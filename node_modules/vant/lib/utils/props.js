"use strict";

exports.__esModule = true;
exports.unknownProp = exports.truthProp = exports.numericProp = exports.makeStringProp = exports.makeRequiredProp = exports.makeNumericProp = exports.makeNumberProp = exports.makeArrayProp = void 0;

/**
 * prop type helpers
 * help us to write less code and reduce bundle size
 */
var unknownProp = null;
exports.unknownProp = unknownProp;
var numericProp = [Number, String];
exports.numericProp = numericProp;
var truthProp = {
  type: Boolean,
  default: true
};
exports.truthProp = truthProp;

var makeRequiredProp = type => ({
  type,
  required: true
});

exports.makeRequiredProp = makeRequiredProp;

var makeArrayProp = () => ({
  type: Array,
  default: () => []
});

exports.makeArrayProp = makeArrayProp;

var makeNumberProp = defaultVal => ({
  type: Number,
  default: defaultVal
});

exports.makeNumberProp = makeNumberProp;

var makeNumericProp = defaultVal => ({
  type: numericProp,
  default: defaultVal
});

exports.makeNumericProp = makeNumericProp;

var makeStringProp = defaultVal => ({
  type: String,
  default: defaultVal
});

exports.makeStringProp = makeStringProp;