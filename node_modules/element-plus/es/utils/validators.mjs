import { isNumber } from './util.mjs';

const isValidWidthUnit = (val) => {
  if (isNumber(val)) {
    return true;
  }
  return ["px", "rem", "em", "vw", "%", "vmin", "vmax"].some((unit) => val.endsWith(unit)) || val.startsWith("calc");
};
const isValidComponentSize = (val) => ["", "large", "default", "small"].includes(val);
const isValidDatePickType = (val) => [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
].includes(val);

export { isValidComponentSize, isValidDatePickType, isValidWidthUnit };
//# sourceMappingURL=validators.mjs.map
