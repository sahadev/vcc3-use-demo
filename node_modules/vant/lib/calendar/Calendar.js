"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _use = require("@vant/use");

var _useRefs = require("../composables/use-refs");

var _useExpose = require("../composables/use-expose");

var _popup = require("../popup");

var _button = require("../button");

var _toast = require("../toast");

var _CalendarMonth = _interopRequireDefault(require("./CalendarMonth"));

var _CalendarHeader = _interopRequireDefault(require("./CalendarHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Composables
// Components
var calendarProps = {
  show: Boolean,
  type: (0, _utils.makeStringProp)('single'),
  title: String,
  color: String,
  round: _utils.truthProp,
  readonly: Boolean,
  poppable: _utils.truthProp,
  maxRange: (0, _utils.makeNumericProp)(null),
  position: (0, _utils.makeStringProp)('bottom'),
  teleport: [String, Object],
  showMark: _utils.truthProp,
  showTitle: _utils.truthProp,
  formatter: Function,
  rowHeight: _utils.numericProp,
  confirmText: String,
  rangePrompt: String,
  lazyRender: _utils.truthProp,
  showConfirm: _utils.truthProp,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: _utils.truthProp,
  closeOnPopstate: _utils.truthProp,
  showRangePrompt: _utils.truthProp,
  confirmDisabledText: String,
  closeOnClickOverlay: _utils.truthProp,
  safeAreaInsetBottom: _utils.truthProp,
  minDate: {
    type: Date,
    validator: _utils.isDate,
    default: _utils2.getToday
  },
  maxDate: {
    type: Date,
    validator: _utils.isDate,
    default: () => {
      var now = (0, _utils2.getToday)();
      return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
    }
  },
  firstDayOfWeek: {
    type: _utils.numericProp,
    default: 0,
    validator: val => val >= 0 && val <= 6
  }
};

var _default = (0, _vue.defineComponent)({
  name: _utils2.name,
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

      if ((0, _utils2.compareDay)(date, minDate) === -1) {
        return minDate;
      }

      if ((0, _utils2.compareDay)(date, maxDate) === 1) {
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

      var now = (0, _utils2.getToday)();

      if (type === 'range') {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }

        var start = limitDateRange(defaultDate[0] || now, minDate, (0, _utils2.getPrevDay)(maxDate));
        var end = limitDateRange(defaultDate[1] || now, (0, _utils2.getNextDay)(minDate));
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
    var bodyRef = (0, _vue.ref)();
    var subtitle = (0, _vue.ref)('');
    var currentDate = (0, _vue.ref)(getInitialDate());
    var [monthRefs, setMonthRefs] = (0, _useRefs.useRefs)();
    var dayOffset = (0, _vue.computed)(() => props.firstDayOfWeek ? +props.firstDayOfWeek % 7 : 0);
    var months = (0, _vue.computed)(() => {
      var months = [];
      var cursor = new Date(props.minDate);
      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while ((0, _utils2.compareMonth)(cursor, props.maxDate) !== 1);

      return months;
    });
    var buttonDisabled = (0, _vue.computed)(() => {
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
      var top = (0, _utils.getScrollTop)(bodyRef.value);
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
      (0, _use.raf)(() => {
        months.value.some((month, index) => {
          if ((0, _utils2.compareMonth)(month, targetDate) === 0) {
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
        (0, _use.raf)(onScroll);
      }
    };

    var init = () => {
      if (props.poppable && !props.show) {
        return;
      }

      (0, _use.raf)(() => {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        bodyHeight = Math.floor((0, _use.useRect)(bodyRef).height);
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

      if (maxRange && (0, _utils2.calcDateNum)(date) > maxRange) {
        if (showRangePrompt) {
          (0, _toast.Toast)(rangePrompt || (0, _utils2.t)('rangePrompt', maxRange));
        }

        emit('over-range');
        return false;
      }

      return true;
    };

    var onConfirm = () => {
      var _currentDate$value;

      return emit('confirm', (_currentDate$value = currentDate.value) != null ? _currentDate$value : (0, _utils2.cloneDates)(currentDate.value));
    };

    var select = (date, complete) => {
      var setCurrentDate = date => {
        currentDate.value = date;
        emit('select', (0, _utils2.cloneDates)(date));
      };

      if (complete && props.type === 'range') {
        var valid = checkRange(date);

        if (!valid) {
          // auto selected to max range
          setCurrentDate([date[0], (0, _utils2.getDayByOffset)(date[0], +props.maxRange - 1)]);
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

      return (_disabledDays$find = disabledDays.find(day => (0, _utils2.compareDay)(startDay, day.date) === -1 && (0, _utils2.compareDay)(day.date, date) === -1)) == null ? void 0 : _disabledDays$find.date;
    }; // disabled calendarDay


    var disabledDays = (0, _vue.computed)(() => monthRefs.value.reduce((arr, ref) => {
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
          var compareToStart = (0, _utils2.compareDay)(date, startDay);

          if (compareToStart === 1) {
            var disabledDay = getDisabledDate(disabledDays.value, startDay, date);

            if (disabledDay) {
              select([startDay, (0, _utils2.getPrevDay)(disabledDay)]);
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
        var selectedIndex = dates.findIndex(dateItem => (0, _utils2.compareDay)(dateItem, date) === 0);

        if (selectedIndex !== -1) {
          var [unselectedDate] = dates.splice(selectedIndex, 1);
          emit('unselect', (0, _utils2.cloneDate)(unselectedDate));
        } else if (props.maxRange && dates.length >= props.maxRange) {
          (0, _toast.Toast)(props.rangePrompt || (0, _utils2.t)('rangePrompt', props.maxRange));
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
      return (0, _vue.createVNode)(_CalendarMonth.default, (0, _vue.mergeProps)({
        "ref": setMonthRefs(index),
        "date": date,
        "currentDate": currentDate.value,
        "showMonthTitle": showMonthTitle,
        "firstDayOfWeek": dayOffset.value
      }, (0, _utils.pick)(props, ['type', 'color', 'minDate', 'maxDate', 'showMark', 'formatter', 'rowHeight', 'lazyRender', 'showSubtitle', 'allowSameDay']), {
        "onClick": onClickDay
      }), (0, _utils.pick)(slots, ['top-info', 'bottom-info']));
    };

    var renderFooterButton = () => {
      if (slots.footer) {
        return slots.footer();
      }

      if (props.showConfirm) {
        var slot = slots['confirm-text'];
        var disabled = buttonDisabled.value;
        var text = disabled ? props.confirmDisabledText : props.confirmText;
        return (0, _vue.createVNode)(_button.Button, {
          "round": true,
          "block": true,
          "type": "danger",
          "color": props.color,
          "class": (0, _utils2.bem)('confirm'),
          "disabled": disabled,
          "nativeType": "button",
          "onClick": onConfirm
        }, {
          default: () => [slot ? slot({
            disabled
          }) : text || (0, _utils2.t)('confirm')]
        });
      }
    };

    var renderFooter = () => (0, _vue.createVNode)("div", {
      "class": [(0, _utils2.bem)('footer'), {
        'van-safe-area-bottom': props.safeAreaInsetBottom
      }]
    }, [renderFooterButton()]);

    var renderCalendar = () => (0, _vue.createVNode)("div", {
      "class": (0, _utils2.bem)()
    }, [(0, _vue.createVNode)(_CalendarHeader.default, {
      "title": props.title,
      "subtitle": subtitle.value,
      "showTitle": props.showTitle,
      "showSubtitle": props.showSubtitle,
      "firstDayOfWeek": dayOffset.value,
      "onClick-subtitle": event => emit('click-subtitle', event)
    }, (0, _utils.pick)(slots, ['title', 'subtitle'])), (0, _vue.createVNode)("div", {
      "ref": bodyRef,
      "class": (0, _utils2.bem)('body'),
      "onScroll": onScroll
    }, [months.value.map(renderMonth)]), renderFooter()]);

    (0, _vue.watch)(() => props.show, init);
    (0, _vue.watch)(() => [props.type, props.minDate, props.maxDate], () => reset(getInitialDate(currentDate.value)));
    (0, _vue.watch)(() => props.defaultDate, function (value) {
      if (value === void 0) {
        value = null;
      }

      currentDate.value = value;
      scrollToCurrentDate();
    });
    (0, _useExpose.useExpose)({
      reset,
      scrollToDate
    });
    (0, _use.onMountedOrActivated)(init);
    return () => {
      if (props.poppable) {
        return (0, _vue.createVNode)(_popup.Popup, {
          "show": props.show,
          "class": (0, _utils2.bem)('popup'),
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

exports.default = _default;