'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var iconsVue = require('@element-plus/icons-vue');

const pageHeaderProps = {
  icon: {
    type: [String, Object],
    default: iconsVue.Back
  },
  title: String,
  content: {
    type: String,
    default: ""
  }
};
const pageHeaderEmits = {
  back: () => true
};

exports.pageHeaderEmits = pageHeaderEmits;
exports.pageHeaderProps = pageHeaderProps;
//# sourceMappingURL=page-header.js.map
