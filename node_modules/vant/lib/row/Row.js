"use strict";

exports.__esModule = true;
exports.default = exports.ROW_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var [name, bem] = (0, _utils.createNamespace)('row');
var ROW_KEY = Symbol(name);
exports.ROW_KEY = ROW_KEY;
var rowProps = {
  tag: (0, _utils.makeStringProp)('div'),
  wrap: _utils.truthProp,
  align: String,
  gutter: (0, _utils.makeNumericProp)(0),
  justify: String
};

var _default = (0, _vue.defineComponent)({
  name,
  props: rowProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(ROW_KEY);
    var groups = (0, _vue.computed)(() => {
      var groups = [[]];
      var totalSpan = 0;
      children.forEach((child, index) => {
        totalSpan += Number(child.span);

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });
      return groups;
    });
    var spaces = (0, _vue.computed)(() => {
      var gutter = Number(props.gutter);
      var spaces = [];

      if (!gutter) {
        return spaces;
      }

      groups.value.forEach(group => {
        var averagePadding = gutter * (group.length - 1) / group.length;
        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({
              right: averagePadding
            });
          } else {
            var left = gutter - spaces[item - 1].right;
            var right = averagePadding - left;
            spaces.push({
              left,
              right
            });
          }
        });
      });
      return spaces;
    });
    linkChildren({
      spaces
    });
    return () => {
      var {
        tag,
        wrap,
        align,
        justify
      } = props;
      return (0, _vue.createVNode)(tag, {
        "class": bem({
          ["align-" + align]: align,
          ["justify-" + justify]: justify,
          nowrap: !wrap
        })
      }, {
        default: () => [slots.default == null ? void 0 : slots.default()]
      });
    };
  }

});

exports.default = _default;