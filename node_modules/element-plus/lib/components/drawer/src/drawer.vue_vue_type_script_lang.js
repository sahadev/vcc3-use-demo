'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var iconsVue = require('@element-plus/icons-vue');
var index = require('../../overlay/index.js');
require('../../dialog/index.js');
var index$1 = require('../../icon/index.js');
require('../../../directives/index.js');
var drawer = require('./drawer.js');
var index$2 = require('../../../directives/trap-focus/index.js');
var useDialog = require('../../dialog/src/use-dialog.js');

var script = vue.defineComponent({
  name: "ElDrawer",
  components: {
    ElOverlay: index.ElOverlay,
    ElIcon: index$1.ElIcon,
    Close: iconsVue.Close
  },
  directives: {
    TrapFocus: index$2["default"]
  },
  props: drawer.drawerProps,
  emits: drawer.drawerEmits,
  setup(props, ctx) {
    const drawerRef = vue.ref();
    const isHorizontal = vue.computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = vue.computed(() => typeof props.size === "number" ? `${props.size}px` : props.size);
    return {
      ...useDialog.useDialog(props, ctx, drawerRef),
      drawerRef,
      isHorizontal,
      drawerSize
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=drawer.vue_vue_type_script_lang.js.map
