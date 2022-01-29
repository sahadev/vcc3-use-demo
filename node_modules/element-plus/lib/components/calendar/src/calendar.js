'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');
var constants = require('../../../utils/constants.js');

const calendarProps = props.buildProps({
  modelValue: {
    type: Date
  },
  range: {
    type: props.definePropType(Array),
    validator: (range) => Array.isArray(range) && range.length === 2 && range.every((item) => item instanceof Date)
  }
});
const calendarEmits = {
  [constants.UPDATE_MODEL_EVENT]: (value) => value instanceof Date,
  input: (value) => value instanceof Date
};

exports.calendarEmits = calendarEmits;
exports.calendarProps = calendarProps;
//# sourceMappingURL=calendar.js.map
