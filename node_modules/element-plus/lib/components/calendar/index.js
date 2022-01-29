'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/calendar2.js');
var calendar = require('./src/calendar.js');
var calendar_vue_vue_type_script_lang = require('./src/calendar.vue_vue_type_script_lang.js');

const ElCalendar = withInstall.withInstall(calendar_vue_vue_type_script_lang["default"]);

exports.calendarEmits = calendar.calendarEmits;
exports.calendarProps = calendar.calendarProps;
exports.ElCalendar = ElCalendar;
exports["default"] = ElCalendar;
//# sourceMappingURL=index.js.map
