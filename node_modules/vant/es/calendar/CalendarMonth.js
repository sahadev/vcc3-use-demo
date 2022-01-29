import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, computed, defineComponent } from 'vue'; // Utils

import { pick, addUnit, numericProp, setScrollTop, createNamespace, makeRequiredProp } from '../utils';
import { getMonthEndDay } from '../datetime-picker/utils';
import { t, bem, compareDay, getPrevDay, getNextDay, formatMonthTitle } from './utils'; // Composables

import { useRect, useToggle } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useHeight } from '../composables/use-height'; // Components

import CalendarDay from './CalendarDay'; // Types

var [name] = createNamespace('calendar-month');
var calendarMonthProps = {
  date: makeRequiredProp(Date),
  type: String,
  color: String,
  minDate: makeRequiredProp(Date),
  maxDate: makeRequiredProp(Date),
  showMark: Boolean,
  rowHeight: numericProp,
  formatter: Function,
  lazyRender: Boolean,
  currentDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number
};
export default defineComponent({
  name,
  props: calendarMonthProps,
  emits: ['click', 'update-height'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var [visible, setVisible] = useToggle();
    var daysRef = ref();
    var monthRef = ref();
    var height = useHeight(monthRef);
    var title = computed(() => formatMonthTitle(props.date));
    var rowHeight = computed(() => addUnit(props.rowHeight));
    var offset = computed(() => {
      var realDay = props.date.getDay();

      if (props.firstDayOfWeek) {
        return (realDay + 7 - props.firstDayOfWeek) % 7;
      }

      return realDay;
    });
    var totalDay = computed(() => getMonthEndDay(props.date.getFullYear(), props.date.getMonth() + 1));
    var shouldRender = computed(() => visible.value || !props.lazyRender);

    var getTitle = () => title.value;

    var getMultipleDayType = day => {
      var isSelected = date => props.currentDate.some(item => compareDay(item, date) === 0);

      if (isSelected(day)) {
        var prevDay = getPrevDay(day);
        var nextDay = getNextDay(day);
        var prevSelected = isSelected(prevDay);
        var nextSelected = isSelected(nextDay);

        if (prevSelected && nextSelected) {
          return 'multiple-middle';
        }

        if (prevSelected) {
          return 'end';
        }

        if (nextSelected) {
          return 'start';
        }

        return 'multiple-selected';
      }

      return '';
    };

    var getRangeDayType = day => {
      var [startDay, endDay] = props.currentDate;

      if (!startDay) {
        return '';
      }

      var compareToStart = compareDay(day, startDay);

      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }

      var compareToEnd = compareDay(day, endDay);

      if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
        return 'start-end';
      }

      if (compareToStart === 0) {
        return 'start';
      }

      if (compareToEnd === 0) {
        return 'end';
      }

      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }

      return '';
    };

    var getDayType = day => {
      var {
        type,
        minDate,
        maxDate,
        currentDate
      } = props;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (currentDate === null) {
        return '';
      }

      if (Array.isArray(currentDate)) {
        if (type === 'multiple') {
          return getMultipleDayType(day);
        }

        if (type === 'range') {
          return getRangeDayType(day);
        }
      } else if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }

      return '';
    };

    var getBottomInfo = dayType => {
      if (props.type === 'range') {
        if (dayType === 'start' || dayType === 'end') {
          return t(dayType);
        }

        if (dayType === 'start-end') {
          return t('startEnd');
        }
      }
    };

    var renderTitle = () => {
      if (props.showMonthTitle) {
        return _createVNode("div", {
          "class": bem('month-title')
        }, [title.value]);
      }
    };

    var renderMark = () => {
      if (props.showMark && shouldRender.value) {
        return _createVNode("div", {
          "class": bem('month-mark')
        }, [props.date.getMonth() + 1]);
      }
    };

    var placeholders = computed(() => {
      var count = Math.ceil((totalDay.value + offset.value) / 7);
      return Array(count).fill({
        type: 'placeholder'
      });
    });
    var days = computed(() => {
      var days = [];
      var year = props.date.getFullYear();
      var month = props.date.getMonth();

      for (var day = 1; day <= totalDay.value; day++) {
        var date = new Date(year, month, day);
        var type = getDayType(date);
        var config = {
          date,
          type,
          text: day,
          bottomInfo: getBottomInfo(type)
        };

        if (props.formatter) {
          config = props.formatter(config);
        }

        days.push(config);
      }

      return days;
    });
    var disabledDays = computed(() => days.value.filter(day => day.type === 'disabled'));

    var scrollToDate = (body, targetDate) => {
      if (daysRef.value) {
        var daysRect = useRect(daysRef.value);
        var totalRows = placeholders.value.length;
        var currentRow = Math.ceil((targetDate.getDate() + offset.value) / 7);
        var rowOffset = (currentRow - 1) * daysRect.height / totalRows;
        setScrollTop(body, daysRect.top + rowOffset + body.scrollTop - useRect(body).top);
      }
    };

    var renderDay = (item, index) => _createVNode(CalendarDay, {
      "item": item,
      "index": index,
      "color": props.color,
      "offset": offset.value,
      "rowHeight": rowHeight.value,
      "onClick": item => emit('click', item)
    }, pick(slots, ['top-info', 'bottom-info']));

    var renderDays = () => _createVNode("div", {
      "ref": daysRef,
      "role": "grid",
      "class": bem('days')
    }, [renderMark(), (shouldRender.value ? days : placeholders).value.map(renderDay)]);

    useExpose({
      getTitle,
      getHeight: () => height.value,
      setVisible,
      scrollToDate,
      disabledDays
    });
    return () => _createVNode("div", {
      "class": bem('month'),
      "ref": monthRef
    }, [renderTitle(), renderDays()]);
  }

});