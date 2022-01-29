"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _Swipe = require("../swipe/Swipe");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('swipe-item');

var _default = (0, _vue.defineComponent)({
  name,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var rendered;
    var state = (0, _vue.reactive)({
      offset: 0,
      inited: false,
      mounted: false
    });
    var {
      parent,
      index
    } = (0, _use.useParent)(_Swipe.SWIPE_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <SwipeItem> must be a child component of <Swipe>.');
      }

      return;
    }

    var style = (0, _vue.computed)(() => {
      var style = {};
      var {
        vertical
      } = parent.props;

      if (parent.size.value) {
        style[vertical ? 'height' : 'width'] = parent.size.value + "px";
      }

      if (state.offset) {
        style.transform = "translate" + (vertical ? 'Y' : 'X') + "(" + state.offset + "px)";
      }

      return style;
    });
    var shouldRender = (0, _vue.computed)(() => {
      var {
        loop,
        lazyRender
      } = parent.props;

      if (!lazyRender || rendered) {
        return true;
      } // wait for all item to mount, so we can get the exact count


      if (!state.mounted) {
        return false;
      }

      var active = parent.activeIndicator.value;
      var maxActive = parent.count.value - 1;
      var prevActive = active === 0 && loop ? maxActive : active - 1;
      var nextActive = active === maxActive && loop ? 0 : active + 1;
      rendered = index.value === active || index.value === prevActive || index.value === nextActive;
      return rendered;
    });

    var setOffset = offset => {
      state.offset = offset;
    };

    (0, _vue.onMounted)(() => {
      (0, _vue.nextTick)(() => {
        state.mounted = true;
      });
    });
    (0, _useExpose.useExpose)({
      setOffset
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem(),
      "style": style.value
    }, [shouldRender.value ? slots.default == null ? void 0 : slots.default() : null]);
  }

});

exports.default = _default;