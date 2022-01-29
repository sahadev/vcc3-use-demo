import { createNamespace } from '../utils';
var [name, bem, t] = createNamespace('calendar');
export { name, bem, t };
export var formatMonthTitle = date => t('monthTitle', date.getFullYear(), date.getMonth() + 1);
export function compareMonth(date1, date2) {
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();

  if (year1 === year2) {
    var month1 = date1.getMonth();
    var month2 = date2.getMonth();
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}
export function compareDay(day1, day2) {
  var compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}
export var cloneDate = date => new Date(date);
export var cloneDates = dates => Array.isArray(dates) ? dates.map(cloneDate) : cloneDate(dates);
export function getDayByOffset(date, offset) {
  var cloned = cloneDate(date);
  cloned.setDate(cloned.getDate() + offset);
  return cloned;
}
export var getPrevDay = date => getDayByOffset(date, -1);
export var getNextDay = date => getDayByOffset(date, 1);
export var getToday = () => {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};
export function calcDateNum(date) {
  var day1 = date[0].getTime();
  var day2 = date[1].getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}