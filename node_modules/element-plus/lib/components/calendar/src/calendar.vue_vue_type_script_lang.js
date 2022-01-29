'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dayjs = require('dayjs');
var index = require('../../button/index.js');
require('../../../hooks/index.js');
var error = require('../../../utils/error.js');
require('./date-table2.js');
var calendar = require('./calendar.js');
var dateTable_vue_vue_type_script_lang = require('./date-table.vue_vue_type_script_lang.js');
var index$1 = require('../../../hooks/use-locale/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

var script = vue.defineComponent({
  name: "ElCalendar",
  components: {
    DateTable: dateTable_vue_vue_type_script_lang["default"],
    ElButton: index.ElButton,
    ElButtonGroup: index.ElButtonGroup
  },
  props: calendar.calendarProps,
  emits: calendar.calendarEmits,
  setup(props, { emit }) {
    const { t, lang } = index$1.useLocale();
    const selectedDay = vue.ref();
    const now = dayjs__default["default"]().locale(lang.value);
    const prevMonthDayjs = vue.computed(() => {
      return date.value.subtract(1, "month");
    });
    const curMonthDatePrefix = vue.computed(() => {
      return dayjs__default["default"](date.value).locale(lang.value).format("YYYY-MM");
    });
    const nextMonthDayjs = vue.computed(() => {
      return date.value.add(1, "month");
    });
    const prevYearDayjs = vue.computed(() => {
      return date.value.subtract(1, "year");
    });
    const nextYearDayjs = vue.computed(() => {
      return date.value.add(1, "year");
    });
    const i18nDate = vue.computed(() => {
      const pickedMonth = `el.datepicker.month${date.value.format("M")}`;
      return `${date.value.year()} ${t("el.datepicker.year")} ${t(pickedMonth)}`;
    });
    const realSelectedDay = vue.computed({
      get() {
        if (!props.modelValue)
          return selectedDay.value;
        return date.value;
      },
      set(val) {
        if (!val)
          return;
        selectedDay.value = val;
        const result = val.toDate();
        emit("input", result);
        emit("update:modelValue", result);
      }
    });
    const date = vue.computed(() => {
      if (!props.modelValue) {
        if (realSelectedDay.value) {
          return realSelectedDay.value;
        } else if (validatedRange.value.length) {
          return validatedRange.value[0][0];
        }
        return now;
      } else {
        return dayjs__default["default"](props.modelValue).locale(lang.value);
      }
    });
    const calculateValidatedDateRange = (startDayjs, endDayjs) => {
      const firstDay = startDayjs.startOf("week");
      const lastDay = endDayjs.endOf("week");
      const firstMonth = firstDay.get("month");
      const lastMonth = lastDay.get("month");
      if (firstMonth === lastMonth) {
        return [[firstDay, lastDay]];
      } else if (firstMonth + 1 === lastMonth) {
        const firstMonthLastDay = firstDay.endOf("month");
        const lastMonthFirstDay = lastDay.startOf("month");
        const isSameWeek = firstMonthLastDay.isSame(lastMonthFirstDay, "week");
        const lastMonthStartDay = isSameWeek ? lastMonthFirstDay.add(1, "week") : lastMonthFirstDay;
        return [
          [firstDay, firstMonthLastDay],
          [lastMonthStartDay.startOf("week"), lastDay]
        ];
      } else if (firstMonth + 2 === lastMonth) {
        const firstMonthLastDay = firstDay.endOf("month");
        const secondMonthFirstDay = firstDay.add(1, "month").startOf("month");
        const secondMonthStartDay = firstMonthLastDay.isSame(secondMonthFirstDay, "week") ? secondMonthFirstDay.add(1, "week") : secondMonthFirstDay;
        const secondMonthLastDay = secondMonthStartDay.endOf("month");
        const lastMonthFirstDay = lastDay.startOf("month");
        const lastMonthStartDay = secondMonthLastDay.isSame(lastMonthFirstDay, "week") ? lastMonthFirstDay.add(1, "week") : lastMonthFirstDay;
        return [
          [firstDay, firstMonthLastDay],
          [secondMonthStartDay.startOf("week"), secondMonthLastDay],
          [lastMonthStartDay.startOf("week"), lastDay]
        ];
      } else {
        error.debugWarn("ElCalendar", "start time and end time interval must not exceed two months");
        return [];
      }
    };
    const validatedRange = vue.computed(() => {
      if (!props.range)
        return [];
      const rangeArrDayjs = props.range.map((_) => dayjs__default["default"](_).locale(lang.value));
      const [startDayjs, endDayjs] = rangeArrDayjs;
      if (startDayjs.isAfter(endDayjs)) {
        error.debugWarn("ElCalendar", "end time should be greater than start time");
        return [];
      }
      if (startDayjs.isSame(endDayjs, "month")) {
        return calculateValidatedDateRange(startDayjs, endDayjs);
      } else {
        if (startDayjs.add(1, "month").month() !== endDayjs.month()) {
          error.debugWarn("ElCalendar", "start time and end time interval must not exceed two months");
          return [];
        }
        return calculateValidatedDateRange(startDayjs, endDayjs);
      }
    });
    const pickDay = (day) => {
      realSelectedDay.value = day;
    };
    const selectDate = (type) => {
      let day;
      if (type === "prev-month") {
        day = prevMonthDayjs.value;
      } else if (type === "next-month") {
        day = nextMonthDayjs.value;
      } else if (type === "prev-year") {
        day = prevYearDayjs.value;
      } else if (type === "next-year") {
        day = nextYearDayjs.value;
      } else {
        day = now;
      }
      if (day.isSame(date.value, "day"))
        return;
      pickDay(day);
    };
    return {
      selectedDay,
      curMonthDatePrefix,
      i18nDate,
      realSelectedDay,
      date,
      validatedRange,
      pickDay,
      selectDate,
      t
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=calendar.vue_vue_type_script_lang.js.map
