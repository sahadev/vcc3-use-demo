"use strict";

exports.__esModule = true;
exports.default = exports.TABBAR_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _usePlaceholder = require("../composables/use-placeholder");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('tabbar');
var tabbarProps = {
  route: Boolean,
  fixed: _utils.truthProp,
  border: _utils.truthProp,
  zIndex: _utils.numericProp,
  placeholder: Boolean,
  activeColor: String,
  beforeChange: Function,
  inactiveColor: String,
  modelValue: (0, _utils.makeNumericProp)(0),
  safeAreaInsetBottom: {
    type: Boolean,
    default: null
  }
};
var TABBAR_KEY = Symbol(name);
exports.TABBAR_KEY = TABBAR_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: tabbarProps,
  emits: ['change', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = (0, _vue.ref)();
    var {
      linkChildren
    } = (0, _use.useChildren)(TABBAR_KEY);
    var renderPlaceholder = (0, _usePlaceholder.usePlaceholder)(root, bem); // enable safe-area-inset-bottom by default when fixed

    var enableSafeArea = () => {
      var _props$safeAreaInsetB;

      return (_props$safeAreaInsetB = props.safeAreaInsetBottom) != null ? _props$safeAreaInsetB : props.fixed;
    };

    var renderTabbar = () => {
      var {
        fixed,
        zIndex,
        border
      } = props;
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "role": "tablist",
        "style": (0, _utils.getZIndexStyle)(zIndex),
        "class": [bem({
          fixed
        }), {
          [_utils.BORDER_TOP_BOTTOM]: border,
          'van-safe-area-bottom': enableSafeArea()
        }]
      }, [slots.default == null ? void 0 : slots.default()]);
    };

    var setActive = (active, afterChange) => {
      (0, _utils.callInterceptor)(props.beforeChange, {
        args: [active],

        done() {
          emit('update:modelValue', active);
          emit('change', active);
          afterChange();
        }

      });
    };

    linkChildren({
      props,
      setActive
    });
    return () => {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
      }

      return renderTabbar();
    };
  }

});

exports.default = _default;