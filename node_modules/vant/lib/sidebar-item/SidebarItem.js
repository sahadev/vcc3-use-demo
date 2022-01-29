"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _Sidebar = require("../sidebar/Sidebar");

var _use = require("@vant/use");

var _useRoute = require("../composables/use-route");

var _badge = require("../badge");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('sidebar-item');
var sidebarItemProps = (0, _utils.extend)({}, _useRoute.routeProps, {
  dot: Boolean,
  title: String,
  badge: _utils.numericProp,
  disabled: Boolean
});

var _default = (0, _vue.defineComponent)({
  name,
  props: sidebarItemProps,
  emits: ['click'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var route = (0, _useRoute.useRoute)();
    var {
      parent,
      index
    } = (0, _use.useParent)(_Sidebar.SIDEBAR_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <SidebarItem> must be a child component of <Sidebar>.');
      }

      return;
    }

    var onClick = () => {
      if (props.disabled) {
        return;
      }

      emit('click', index.value);
      parent.setActive(index.value);
      route();
    };

    return () => {
      var {
        dot,
        badge,
        title,
        disabled
      } = props;
      var selected = index.value === parent.getActive();
      return (0, _vue.createVNode)("div", {
        "role": "tab",
        "class": bem({
          select: selected,
          disabled
        }),
        "tabindex": disabled ? undefined : 0,
        "aria-selected": selected,
        "onClick": onClick
      }, [(0, _vue.createVNode)(_badge.Badge, {
        "dot": dot,
        "content": badge,
        "class": bem('text')
      }, {
        default: () => [slots.title ? slots.title() : title]
      })]);
    };
  }

});

exports.default = _default;