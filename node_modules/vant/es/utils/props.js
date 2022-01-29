/**
 * prop type helpers
 * help us to write less code and reduce bundle size
 */
export var unknownProp = null;
export var numericProp = [Number, String];
export var truthProp = {
  type: Boolean,
  default: true
};
export var makeRequiredProp = type => ({
  type,
  required: true
});
export var makeArrayProp = () => ({
  type: Array,
  default: () => []
});
export var makeNumberProp = defaultVal => ({
  type: Number,
  default: defaultVal
});
export var makeNumericProp = defaultVal => ({
  type: numericProp,
  default: defaultVal
});
export var makeStringProp = defaultVal => ({
  type: String,
  default: defaultVal
});