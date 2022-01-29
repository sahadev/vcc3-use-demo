"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _Tabs = require("../tabs/Tabs");

var _use = require("@vant/use");

var _useId = require("../composables/use-id");

var _useExpose = require("../composables/use-expose");

var _useRoute = require("../composables/use-route");

var _useTabStatus = require("../composables/use-tab-status");

var _swipeItem = require("../swipe-item");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('tab');
var tabProps = (0, _utils.extend)({}, _useRoute.routeProps, {
  dot: Boolean,
  name: _utils.numericProp,
  badge: _utils.numericProp,
  title: String,
  disabled: Boolean,
  titleClass: _utils.unknownProp,
  titleStyle: [String, Object],
  showZeroBadge: _utils.truthProp
});

var _default = (0, _vue.defineComponent)({
  name,
  props: tabProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var id = (0, _useId.useId)();
    var inited = (0, _vue.ref)(false);
    var {
      parent,
      index
    } = (0, _use.useParent)(_Tabs.TABS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <Tab> must be a child component of <Tabs>.');
      }

      return;
    }

    var getName = () => {
      var _props$name;

      return (_props$name = props.name) != null ? _props$name : index.value;
    };

    var init = () => {
      inited.value = true;

      if (parent.props.lazyRender) {
        (0, _vue.nextTick)(() => {
          parent.onRendered(getName(), props.title);
        });
      }
    };

    var active = (0, _vue.computed)(() => {
      var isActive = getName() === parent.currentName.value;

      if (isActive && !inited.value) {
        init();
      }

      return isActive;
    });
    (0, _vue.watch)(() => props.title, () => {
      parent.setLine();
      parent.scrollIntoView();
    });
    (0, _vue.provide)(_useTabStatus.TAB_STATUS_KEY, active);
    return () => {
      var label = parent.id + "-" + index.value;
      var {
        animated,
        swipeable,
        scrollspy,
        lazyRender
      } = parent.props;

      if (!slots.default && !animated) {
        return;
      }

      var show = scrollspy || active.value;

      if (animated || swipeable) {
        return (0, _vue.createVNode)(_swipeItem.SwipeItem, {
          "id": id,
          "role": "tabpanel",
          "class": bem('panel-wrapper', {
            inactive: !active.value
          }),
          "tabindex": active.value ? 0 : -1,
          "aria-hidden": !active.value,
          "aria-labelledby": label
        }, {
          default: () => [(0, _vue.createVNode)("div", {
            "class": bem('panel')
          }, [slots.default == null ? void 0 : slots.default()])]
        });
      }

      var shouldRender = inited.value || scrollspy || !lazyRender;
      var Content = shouldRender ? slots.default == null ? void 0 : slots.default() : null;
      (0, _useExpose.useExpose)({
        id
      });
      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "id": id,
        "role": "tabpanel",
        "class": bem('panel'),
        "tabindex": show ? 0 : -1,
        "aria-labelledby": label
      }, [Content]), [[_vue.vShow, show]]);
    };
  }

});

exports.default = _default;