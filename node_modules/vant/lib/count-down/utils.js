"use strict";

exports.__esModule = true;
exports.parseFormat = parseFormat;

var _utils = require("../utils");

function parseFormat(format, currentTime) {
  var {
    days
  } = currentTime;
  var {
    hours,
    minutes,
    seconds,
    milliseconds
  } = currentTime;

  if (format.includes('DD')) {
    format = format.replace('DD', (0, _utils.padZero)(days));
  } else {
    hours += days * 24;
  }

  if (format.includes('HH')) {
    format = format.replace('HH', (0, _utils.padZero)(hours));
  } else {
    minutes += hours * 60;
  }

  if (format.includes('mm')) {
    format = format.replace('mm', (0, _utils.padZero)(minutes));
  } else {
    seconds += minutes * 60;
  }

  if (format.includes('ss')) {
    format = format.replace('ss', (0, _utils.padZero)(seconds));
  } else {
    milliseconds += seconds * 1000;
  }

  if (format.includes('S')) {
    var ms = (0, _utils.padZero)(milliseconds, 3);

    if (format.includes('SSS')) {
      format = format.replace('SSS', ms);
    } else if (format.includes('SS')) {
      format = format.replace('SS', ms.slice(0, 2));
    } else {
      format = format.replace('S', ms.charAt(0));
    }
  }

  return format;
}