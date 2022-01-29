import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { ref, watch, computed, defineComponent } from 'vue'; // Utils

import { pick, isDate, truthProp, numericProp, getScrollTop, makeStringProp, makeNumericProp } from '../utils';
import { t, bem, name, getToday, cloneDate, cloneDates, getPrevDay, getNextDay, compareDay, calcDateNum, compareMonth, getDayByOffset } from './utils'; // Composables

import { raf, useRect, onMountedOrActivated } from '@vant/use';
import { useRefs } from '../composables/use-refs';
import { useExpose } from '../composables/use-expose'; // Components

import { Popup } from '../popup';
import { Button } from '../button';
import { Toast } from '../toast';
import CalendarMonth from './CalendarMonth';
import CalendarHeader from './CalendarHeader'; // Types

var calendarProps = {
  show: Boolean,
  type: makeStringProp('single'),
  title: String,
  color: String,
  round: truthProp,
  readonly: Boolean,
  poppable: truthProp,
  maxRange: makeNumericProp(null),
  position: makeStringProp('bottom'),
  teleport: [String, Object],
  showMark: truthProp,
  showTitle: truthProp,
  formatter: Function,
  rowHeight: numericProp,
  confirmText: String,
  rangePrompt: String,
  lazyRender: truthProp,
  showConfirm: truthProp,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: truthProp,
  closeOnPopstate: truthProp,
  showRangePrompt: truthProp,
  confirmDisabledText: String,
  closeOnClickOverlay: truthProp,
  safeAreaInsetBottom: truthProp,
  minDate: {
    type: Date,
    validator: isDate,
    default: getToday
  },
  maxDate: {
    type: Date,
    validator: isDate,
    default: () => {
      var now = getToday();
      return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
    }
  },
  firstDayOfWeek: {
    type: numericProp,
    default: 0,
    validator: val => val >= 0 && val <= 6
  }
};
export default defineComponent({
  name,
  props: calendarProps,
  emits: ['select', 'confirm', 'unselect', 'month-show', 'over-range', 'update:show', 'click-subtitle'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    var limitDateRange = function (date, minDate, maxDate) {
      if (minDate === void 0) {
        minDate = props.minDate;
      }

      if (maxDate === void 0) {
        maxDate = props.maxDate;
      }

      if (compareDay(date, minDate) === -1) {
        return minDate;
      }

      if (compareDay(date, maxDate) === 1) {
        return maxDate;
      }

      return date;
    };

    var getInitialDate = function (defaultDate) {
      if (defaultDate === void 0) {
        defaultDate = props.defaultDate;
      }

      var {
        type,
        minDate,
        maxDate
      } = props;

      if (defaultDate === null) {
        return defaultDate;
      }

      var now = getToday();

      if (type === 'range') {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }

        var start = limitDateRange(defaultDate[0] || now, minDate, getPrevDay(maxDate));
        var end = limitDateRange(defaultDate[1] || now, getNextDay(minDate));
        return [start, end];
      }

      if (type === 'multiple') {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map(date => limitDateRange(date));
        }

        return [limitDateRange(now)];
      }

      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now;
      }

      return limitDateRange(defaultDate);
    };

    var bodyHeight;
    var bodyRef = ref();
    var subtitle = ref('');
    var currentDate = ref(getInitialDate());
    var [monthRefs, setMonthRefs] = useRefs();
    var dayOffset = computed(() => props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0);
    var months = computed(() => {
      var months = [];
      var cursor = new Date(props.minDate);
      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, props.maxDate) !== 1);

      return months;
    });
    var buttonDisabled = computed(() => {
      if (currentDate.value) {
        if (props.type === 'range') {
          return !currentDate.value[0] || !currentDate.value[1];
        }

        if (props.type === 'multiple') {
          return !currentDate.value.length;
        }
      }

      return !currentDate.value;
    }); // calculate the position of the elements
    // and find the elements that needs to be rendered

    var onScroll = () => {
      var top = getScrollTop(bodyRef.value);
      var bottom = top + bodyHeight;
      var heights = months.value.map((item, index) => monthRefs.value[index].getHeight());
      var heightSum = heights.reduce((a, b) => a + b, 0); // iOS scroll bounce may exceed the range

      if (bottom > heightSum && top > 0) {
        return;
      }

      var height = 0;
      var currentMonth;
      var visibleRange = [-1, -1];

      for (var i = 0; i < months.value.length; i++) {
        var month = monthRefs.value[i];
        var visible = height <= bottom && height + heights[i] >= top;

        if (visible) {
          visibleRange[1] = i;

          if (!currentMonth) {
            currentMonth = month;
            visibleRange[0] = i;
          }

          if (!monthRefs.value[i].showed) {
            monthRefs.value[i].showed = true;
            emit('month-show', {
              date: month.date,
              title: month.getTitle()
            });
          }
        }

        height += heights[i];
      }

      months.value.forEach((month, index) => {
        var visible = index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
        monthRefs.value[index].setVisible(visible);
      });
      /* istanbul ignore else */

      if (currentMonth) {
        subtitle.value = currentMonth.getTitle();
      }
    };

    var scrollToDate = targetDate => {
      raf(() => {
        months.value.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            if (bodyRef.value) {
              monthRefs.value[index].scrollToDate(bodyRef.value, targetDate);
            }

            return true;
          }

          return false;
        });
        onScroll();
      });
    };

    var scrollToCurrentDate = () => {
      if (props.poppable && !props.show) {
        return;
      }

      if (currentDate.value) {
        var targetDate = props.type === 'single' ? currentDate.value : currentDate.value[0];
        scrollToDate(targetDate);
      } else {
        raf(onScroll);
      }
    };

    var init = () => {
      if (props.poppable && !props.show) {
        return;
      }

      raf(() => {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        bodyHeight = Math.floor(useRect(bodyRef).height);
        scrollToCurrentDate();
      });
    };

    var reset = function (date) {
      if (date === void 0) {
        date = getInitialDate();
      }

      currentDate.value = date;
      scrollToCurrentDate();
    };

    var checkRange = date => {
      var {
        maxRange,
        rangePrompt,
        showRangePrompt
      } = props;

      if (maxRange && calcDateNum(date) > maxRange) {
        if (showRangePrompt) {
          Toast(rangePrompt || t('rangePrompt', maxRange));
        }

        emit('over-range');
        return false;
      }

      return true;
    };

    var onConfirm = () => {
      var _currentDate$value;

      return emit('confirm', (_currentDate$value = currentDate.value) != null ? _currentDate$value : cloneDates(currentDate.value));
    };

    var select = (date, complete) => {
      var setCurrentDate = date => {
        currentDate.value = date;
        emit('select', cloneDates(date));
      };

      if (complete && props.type === 'range') {
        var valid = checkRange(date);

        if (!valid) {
          // auto selected to max range
          setCurrentDate([date[0], getDayByOffset(date[0], +props.maxRange - 1)]);
          return;
        }
      }

      setCurrentDate(date);

      if (complete && !props.showConfirm) {
        onConfirm();
      }
    }; // get first disabled calendarDay between date range


    var getDisabledDate = (disabledDays, startDay, date) => {
      var _disabledDays$find;

      return (_disabledDays$find = disabledDays.find(day => compareDay(startDay, day.date) === -1 && compareDay(day.date, date) === -1)) == null ? void 0 : _disabledDays$find.date;
    }; // disabled calendarDay


    var disabledDays = computed(() => monthRefs.value.reduce((arr, ref) => {
      var _ref$disabledDays$val, _ref$disabledDays;

      arr.push(...((_ref$disabledDays$val = (_ref$disabledDays = ref.disabledDays) == null ? void 0 : _ref$disabledDays.value) != null ? _ref$disabledDays$val : []));
      return arr;
    }, []));

    var onClickDay = item => {
      if (props.readonly || !item.date) {
        return;
      }

      var {
        date
      } = item;
      var {
        type
      } = props;

      if (type === 'range') {
        if (!currentDate.value) {
          select([date]);
          return;
        }

        var [startDay, endDay] = currentDate.value;

        if (startDay && !endDay) {
          var compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            var disabledDay = getDisabledDate(disabledDays.value, startDay, date);

            if (disabledDay) {
              select([startDay, getPrevDay(disabledDay)]);
            } else {
              select([startDay, date], true);
            }
          } else if (compareToStart === -1) {
            select([date]);
          } else if (props.allowSameDay) {
            select([date, date], true);
          }
        } else {
          select([date]);
        }
      } else if (type === 'multiple') {
        if (!currentDate.value) {
          select([date]);
          return;
        }

        var dates = currentDate.value;
        var selectedIndex = dates.findIndex(dateItem => compareDay(dateItem, date) === 0);

        if (selectedIndex !== -1) {
          var [unselectedDate] = dates.splice(selectedIndex, 1);
          emit('unselect', cloneDate(unselectedDate));
        } else if (props.maxRange && dates.length >= props.maxRange) {
          Toast(props.rangePrompt || t('rangePrompt', props.maxRange));
        } else {
          select([...dates, date]);
        }
      } else {
        select(date, true);
      }
    };

    var updateShow = value => emit('update:show', value);

    var renderMonth = (date, index) => {
      var showMonthTitle = index !== 0 || !props.showSubtitle;
      return _createVNode(CalendarMonth, _mergeProps({
        "ref": setMonthRefs(index),
        "date": date,
        "currentDate": currentDate.value,
        "showMonthTitle": showMonthTitle,
        "firstDayOfWeek": dayOffset.value
      }, pick(props, ['type', 'color', 'minDate', 'maxDate', 'showMark', 'formatter', 'rowHeight', 'lazyRender', 'showSubtitle', 'allowSameDay']), {
        "onClick": onClickDay
      }), pick(slots, ['top-info', 'bottom-info']));
    };

    var renderFooterButton = () => {
      if (slots.footer) {
        return slots.footer();
      }

      if (props.showConfirm) {
        var slot = slots['confirm-text'];
        var disabled = buttonDisabled.value;
        var text = disabled ? props.confirmDisabledText : props.confirmText;
        return _createVNode(Button, {
          "round": true,
          "block": true,
          "type": "danger",
          "color": props.color,
          "class": bem('confirm'),
          "disabled": disabled,
          "nativeType": "button",
          "onClick": onConfirm
        }, {
          default: () => [slot ? slot({
            disabled
          }) : text || t('confirm')]
        });
      }
    };

    var renderFooter = () => _createVNode("div", {
      "class": [bem('footer'), {
        'van-safe-area-bottom': props.safeAreaInsetBottom
      }]
    }, [renderFooterButton()]);

    var renderCalendar = () => _createVNode("div", {
      "class": bem()
    }, [_createVNode(CalendarHeader, {
      "title": props.title,
      "subtitle": subtitle.value,
      "showTitle": props.showTitle,
      "showSubtitle": props.showSubtitle,
      "firstDayOfWeek": dayOffset.value,
      "onClick-subtitle": event => emit('click-subtitle', event)
    }, pick(slots, ['title', 'subtitle'])), _createVNode("div", {
      "ref": bodyRef,
      "class": bem('body'),
      "onScroll": onScroll
    }, [months.value.map(renderMonth)]), renderFooter()]);

    watch(() => props.show, init);
    watch(() => [props.type, props.minDate, props.maxDate], () => reset(getInitialDate(currentDate.value)));
    watch(() => props.defaultDate, function (value) {
      if (value === void 0) {
        value = null;
      }

      currentDate.value = value;
      scrollToCurrentDate();
    });
    useExpose({
      reset,
      scrollToDate
    });
    onMountedOrActivated(init);
    return () => {
      if (props.poppable) {
        return _createVNode(Popup, {
          "show": props.show,
          "class": bem('popup'),
          "round": props.round,
          "position": props.position,
          "closeable": props.showTitle || props.showSubtitle,
          "teleport": props.teleport,
          "closeOnPopstate": props.closeOnPopstate,
          "closeOnClickOverlay": props.closeOnClickOverlay,
          "onUpdate:show": updateShow
        }, {
          default: renderCalendar
        });
      }

      return renderCalendar();
    };
  }

});