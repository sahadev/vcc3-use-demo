"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _Grid = require("../grid/Grid");

var _use = require("@vant/use");

var _useRoute = require("../composables/use-route");

var _icon = require("../icon");

var _badge = require("../badge");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('grid-item');
var gridItemProps = (0, _utils.extend)({}, _useRoute.routeProps, {
  dot: Boolean,
  text: String,
  icon: String,
  badge: _utils.numericProp,
  iconColor: String,
  iconPrefix: String
});

var _default = (0, _vue.defineComponent)({
  name,
  props: gridItemProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      parent,
      index
    } = (0, _use.useParent)(_Grid.GRID_KEY);
    var route = (0, _useRoute.useRoute)();

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <GridItem> must be a child component of <Grid>.');
      }

      return;
    }

    var rootStyle = (0, _vue.computed)(() => {
      var {
        square,
        gutter,
        columnNum
      } = parent.props;
      var percent = 100 / +columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        style.paddingRight = gutterValue;

        if (index.value >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    });
    var contentStyle = (0, _vue.computed)(() => {
      var {
        square,
        gutter
      } = parent.props;

      if (square && gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    });

    var renderIcon = () => {
      if (slots.icon) {
        return (0, _vue.createVNode)(_badge.Badge, {
          "dot": props.dot,
          "content": props.badge
        }, {
          default: slots.icon
        });
      }

      if (props.icon) {
        return (0, _vue.createVNode)(_icon.Icon, {
          "dot": props.dot,
          "name": props.icon,
          "size": parent.props.iconSize,
          "badge": props.badge,
          "class": bem('icon'),
          "classPrefix": props.iconPrefix,
          "color": props.iconColor
        }, null);
      }
    };

    var renderText = () => {
      if (slots.text) {
        return slots.text();
      }

      if (props.text) {
        return (0, _vue.createVNode)("span", {
          "class": bem('text')
        }, [props.text]);
      }
    };

    var renderContent = () => {
      if (slots.default) {
        return slots.default();
      }

      return [renderIcon(), renderText()];
    };

    return () => {
      var {
        center,
        border,
        square,
        gutter,
        reverse,
        direction,
        clickable
      } = parent.props;
      var classes = [bem('content', [direction, {
        center,
        square,
        reverse,
        clickable,
        surround: border && gutter
      }]), {
        [_utils.BORDER]: border
      }];
      return (0, _vue.createVNode)("div", {
        "class": [bem({
          square
        })],
        "style": rootStyle.value
      }, [(0, _vue.createVNode)("div", {
        "role": clickable ? 'button' : undefined,
        "class": classes,
        "style": contentStyle.value,
        "tabindex": clickable ? 0 : undefined,
        "onClick": route
      }, [renderContent()])]);
    };
  }

});

exports.default = _default;