"use strict";

exports.__esModule = true;
exports.formatDiscount = exports.formatAmount = void 0;
exports.getDate = getDate;

var _utils = require("../utils");

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + (0, _utils.padZero)(date.getMonth() + 1) + "." + (0, _utils.padZero)(date.getDate());
}

var formatDiscount = discount => (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);

exports.formatDiscount = formatDiscount;

var formatAmount = amount => (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);

exports.formatAmount = formatAmount;