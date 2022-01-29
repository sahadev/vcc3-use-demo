"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _IndexBar = require("../index-bar/IndexBar");

var _dom = require("../utils/dom");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('index-anchor');
var indexAnchorProps = {
  index: _utils.numericProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: indexAnchorProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var state = (0, _vue.reactive)({
      top: 0,
      left: null,
      rect: {
        top: 0,
        height: 0
      },
      width: null,
      active: false
    });
    var root = (0, _vue.ref)();
    var {
      parent
    } = (0, _use.useParent)(_IndexBar.INDEX_BAR_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <IndexAnchor> must be a child component of <IndexBar>.');
      }

      return;
    }

    var isSticky = () => state.active && parent.props.sticky;

    var anchorStyle = (0, _vue.computed)(() => {
      var {
        zIndex,
        highlightColor
      } = parent.props;

      if (isSticky()) {
        return (0, _utils.extend)((0, _utils.getZIndexStyle)(zIndex), {
          left: state.left ? state.left + "px" : undefined,
          width: state.width ? state.width + "px" : undefined,
          transform: state.top ? "translate3d(0, " + state.top + "px, 0)" : undefined,
          color: highlightColor
        });
      }
    });

    var getRect = (scrollParent, scrollParentRect) => {
      var rootRect = (0, _use.useRect)(root);
      state.rect.height = rootRect.height;

      if (scrollParent === window || scrollParent === document.body) {
        state.rect.top = rootRect.top + (0, _dom.getRootScrollTop)();
      } else {
        state.rect.top = rootRect.top + (0, _dom.getScrollTop)(scrollParent) - scrollParentRect.top;
      }

      return state.rect;
    };

    (0, _useExpose.useExpose)({
      state,
      getRect
    });
    return () => {
      var sticky = isSticky();
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "style": {
          height: sticky ? state.rect.height + "px" : undefined
        }
      }, [(0, _vue.createVNode)("div", {
        "style": anchorStyle.value,
        "class": [bem({
          sticky
        }), {
          [_utils.BORDER_BOTTOM]: sticky
        }]
      }, [slots.default ? slots.default() : props.index])]);
    };
  }

});

exports.default = _default;