"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useVisibilityChange = require("../composables/use-visibility-change");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('sticky');
var stickyProps = {
  zIndex: _utils.numericProp,
  position: (0, _utils.makeStringProp)('top'),
  container: Object,
  offsetTop: (0, _utils.makeNumericProp)(0),
  offsetBottom: (0, _utils.makeNumericProp)(0)
};

var _default = (0, _vue.defineComponent)({
  name,
  props: stickyProps,
  emits: ['scroll', 'change'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = (0, _vue.ref)();
    var scrollParent = (0, _use.useScrollParent)(root);
    var state = (0, _vue.reactive)({
      fixed: false,
      width: 0,
      // root width
      height: 0,
      // root height
      transform: 0
    });
    var offset = (0, _vue.computed)(() => (0, _utils.unitToPx)(props.position === 'top' ? props.offsetTop : props.offsetBottom));
    var rootStyle = (0, _vue.computed)(() => {
      var {
        fixed,
        height,
        width
      } = state;

      if (fixed) {
        return {
          width: width + "px",
          height: height + "px"
        };
      }
    });
    var stickyStyle = (0, _vue.computed)(() => {
      if (!state.fixed) {
        return;
      }

      var style = (0, _utils.extend)((0, _utils.getZIndexStyle)(props.zIndex), {
        width: state.width + "px",
        height: state.height + "px",
        [props.position]: offset.value + "px"
      });

      if (state.transform) {
        style.transform = "translate3d(0, " + state.transform + "px, 0)";
      }

      return style;
    });

    var emitScroll = scrollTop => emit('scroll', {
      scrollTop,
      isFixed: state.fixed
    });

    var onScroll = () => {
      if (!root.value || (0, _utils.isHidden)(root)) {
        return;
      }

      var {
        container,
        position
      } = props;
      var rootRect = (0, _use.useRect)(root);
      var scrollTop = (0, _utils.getScrollTop)(window);
      state.width = rootRect.width;
      state.height = rootRect.height;

      if (position === 'top') {
        // The sticky component should be kept inside the container element
        if (container) {
          var containerRect = (0, _use.useRect)(container);
          var difference = containerRect.bottom - offset.value - state.height;
          state.fixed = offset.value > rootRect.top && containerRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = offset.value > rootRect.top;
        }
      } else {
        var {
          clientHeight
        } = document.documentElement;

        if (container) {
          var _containerRect = (0, _use.useRect)(container);

          var _difference = clientHeight - _containerRect.top - offset.value - state.height;

          state.fixed = clientHeight - offset.value < rootRect.bottom && clientHeight > _containerRect.top;
          state.transform = _difference < 0 ? -_difference : 0;
        } else {
          state.fixed = clientHeight - offset.value < rootRect.bottom;
        }
      }

      emitScroll(scrollTop);
    };

    (0, _vue.watch)(() => state.fixed, value => emit('change', value));
    (0, _use.useEventListener)('scroll', onScroll, {
      target: scrollParent
    });
    (0, _useVisibilityChange.useVisibilityChange)(root, onScroll);
    return () => (0, _vue.createVNode)("div", {
      "ref": root,
      "style": rootStyle.value
    }, [(0, _vue.createVNode)("div", {
      "class": bem({
        fixed: state.fixed
      }),
      "style": stickyStyle.value
    }, [slots.default == null ? void 0 : slots.default()])]);
  }

});

exports.default = _default;