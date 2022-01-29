'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dayjs = require('dayjs');
var localeData = require('dayjs/plugin/localeData');
require('../../../hooks/index.js');
require('../../time-picker/index.js');
var dateTable = require('./date-table.js');
var dateUtils = require('../../time-picker/src/common/date-utils.js');
var index = require('../../../hooks/use-locale/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var localeData__default = /*#__PURE__*/_interopDefaultLegacy(localeData);

dayjs__default["default"].extend(localeData__default["default"]);
const WEEK_DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const getPrevMonthLastDays = (date, count) => {
  const lastDay = date.subtract(1, "month").endOf("month").date();
  return dateUtils.rangeArr(count).map((_, index) => lastDay - (count - index - 1));
};
const getMonthDays = (date) => {
  const days = date.daysInMonth();
  return dateUtils.rangeArr(days).map((_, index) => index + 1);
};
const toNestedArr = (days) => dateUtils.rangeArr(days.length / 7).map((index) => {
  const start = index * 7;
  return days.slice(start, start + 7);
});
var script = vue.defineComponent({
  props: dateTable.dateTableProps,
  emits: dateTable.dateTableEmits,
  setup(props, { emit }) {
    const { t, lang } = index.useLocale();
    const now = dayjs__default["default"]().locale(lang.value);
    const firstDayOfWeek = now.$locale().weekStart || 0;
    const isInRange = vue.computed(() => !!props.range && !!props.range.length);
    const rows = vue.computed(() => {
      let days = [];
      if (isInRange.value) {
        const [start, end] = props.range;
        const currentMonthRange = dateUtils.rangeArr(end.date() - start.date() + 1).map((index) => ({
          text: start.date() + index,
          type: "current"
        }));
        let remaining = currentMonthRange.length % 7;
        remaining = remaining === 0 ? 0 : 7 - remaining;
        const nextMonthRange = dateUtils.rangeArr(remaining).map((_, index) => ({
          text: index + 1,
          type: "next"
        }));
        days = currentMonthRange.concat(nextMonthRange);
      } else {
        const firstDay = props.date.startOf("month").day() || 7;
        const prevMonthDays = getPrevMonthLastDays(props.date, firstDay - firstDayOfWeek).map((day) => ({
          text: day,
          type: "prev"
        }));
        const currentMonthDays = getMonthDays(props.date).map((day) => ({
          text: day,
          type: "current"
        }));
        days = [...prevMonthDays, ...currentMonthDays];
        const nextMonthDays = dateUtils.rangeArr(42 - days.length).map((_, index) => ({
          text: index + 1,
          type: "next"
        }));
        days = days.concat(nextMonthDays);
      }
      return toNestedArr(days);
    });
    const weekDays = vue.computed(() => {
      const start = firstDayOfWeek;
      if (start === 0) {
        return WEEK_DAYS.map((_) => t(`el.datepicker.weeks.${_}`));
      } else {
        return WEEK_DAYS.slice(start).concat(WEEK_DAYS.slice(0, start)).map((_) => t(`el.datepicker.weeks.${_}`));
      }
    });
    const getFormattedDate = (day, type) => {
      switch (type) {
        case "prev":
          return props.date.startOf("month").subtract(1, "month").date(day);
        case "next":
          return props.date.startOf("month").add(1, "month").date(day);
        case "current":
          return props.date.date(day);
      }
    };
    const getCellClass = ({ text, type }) => {
      const classes = [type];
      if (type === "current") {
        const date = getFormattedDate(text, type);
        if (date.isSame(props.selectedDay, "day")) {
          classes.push("is-selected");
        }
        if (date.isSame(now, "day")) {
          classes.push("is-today");
        }
      }
      return classes;
    };
    const handlePickDay = ({ text, type }) => {
      const date = getFormattedDate(text, type);
      emit("pick", date);
    };
    const getSlotData = ({ text, type }) => {
      const day = getFormattedDate(text, type);
      return {
        isSelected: day.isSame(props.selectedDay),
        type: `${type}-month`,
        day: day.format("YYYY-MM-DD"),
        date: day.toDate()
      };
    };
    return {
      isInRange,
      weekDays,
      rows,
      getCellClass,
      handlePickDay,
      getSlotData
    };
  }
});

exports["default"] = script;
exports.getMonthDays = getMonthDays;
exports.getPrevMonthLastDays = getPrevMonthLastDays;
//# sourceMappingURL=date-table.vue_vue_type_script_lang.js.map
