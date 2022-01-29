'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');

const paginationPrevProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String,
    default: ""
  }
};
var script = vue.defineComponent({
  name: "ElPaginationPrev",
  components: {
    ElIcon: index.ElIcon,
    ArrowLeft: iconsVue.ArrowLeft
  },
  props: paginationPrevProps,
  emits: ["click"],
  setup(props) {
    const internalDisabled = vue.computed(() => props.disabled || props.currentPage <= 1);
    return {
      internalDisabled
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=prev.vue_vue_type_script_lang.js.map
