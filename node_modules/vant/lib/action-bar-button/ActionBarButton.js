"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _ActionBar = require("../action-bar/ActionBar");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _useRoute = require("../composables/use-route");

var _button = require("../button");

// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('action-bar-button');
var actionBarButtonProps = (0, _utils.extend)({}, _useRoute.routeProps, {
  type: String,
  text: String,
  icon: String,
  color: String,
  loading: Boolean,
  disabled: Boolean
});

var _default = (0, _vue.defineComponent)({
  name,
  props: actionBarButtonProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var route = (0, _useRoute.useRoute)();
    var {
      parent,
      index
    } = (0, _use.useParent)(_ActionBar.ACTION_BAR_KEY);
    var isFirst = (0, _vue.computed)(() => {
      if (parent) {
        var prev = parent.children[index.value - 1];
        return !(prev && 'isButton' in prev);
      }
    });
    var isLast = (0, _vue.computed)(() => {
      if (parent) {
        var next = parent.children[index.value + 1];
        return !(next && 'isButton' in next);
      }
    });
    (0, _useExpose.useExpose)({
      isButton: true
    });
    return () => {
      var {
        type,
        icon,
        text,
        color,
        loading,
        disabled
      } = props;
      return (0, _vue.createVNode)(_button.Button, {
        "class": bem([type, {
          last: isLast.value,
          first: isFirst.value
        }]),
        "size": "large",
        "type": type,
        "icon": icon,
        "color": color,
        "loading": loading,
        "disabled": disabled,
        "onClick": route
      }, {
        default: () => [slots.default ? slots.default() : text]
      });
    };
  }

});

exports.default = _default;