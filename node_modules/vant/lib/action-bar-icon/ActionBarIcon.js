"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _ActionBar = require("../action-bar/ActionBar");

var _use = require("@vant/use");

var _useRoute = require("../composables/use-route");

var _icon = require("../icon");

var _badge = require("../badge");

// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('action-bar-icon');
var actionBarIconProps = (0, _utils.extend)({}, _useRoute.routeProps, {
  dot: Boolean,
  text: String,
  icon: String,
  color: String,
  badge: _utils.numericProp,
  iconClass: _utils.unknownProp,
  iconPrefix: String
});

var _default = (0, _vue.defineComponent)({
  name,
  props: actionBarIconProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var route = (0, _useRoute.useRoute)();
    (0, _use.useParent)(_ActionBar.ACTION_BAR_KEY);

    var renderIcon = () => {
      var {
        dot,
        badge,
        icon,
        color,
        iconClass,
        iconPrefix
      } = props;

      if (slots.icon) {
        return (0, _vue.createVNode)(_badge.Badge, {
          "dot": dot,
          "content": badge,
          "class": bem('icon')
        }, {
          default: slots.icon
        });
      }

      return (0, _vue.createVNode)(_icon.Icon, {
        "tag": "div",
        "dot": dot,
        "name": icon,
        "badge": badge,
        "color": color,
        "class": [bem('icon'), iconClass],
        "classPrefix": iconPrefix
      }, null);
    };

    return () => (0, _vue.createVNode)("div", {
      "role": "button",
      "class": bem(),
      "tabindex": 0,
      "onClick": route
    }, [renderIcon(), slots.default ? slots.default() : props.text]);
  }

});

exports.default = _default;