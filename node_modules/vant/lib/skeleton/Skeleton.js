"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var [name, bem] = (0, _utils.createNamespace)('skeleton');
var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';
var skeletonProps = {
  row: (0, _utils.makeNumericProp)(0),
  title: Boolean,
  round: Boolean,
  avatar: Boolean,
  loading: _utils.truthProp,
  animate: _utils.truthProp,
  avatarSize: _utils.numericProp,
  titleWidth: _utils.numericProp,
  avatarShape: (0, _utils.makeStringProp)('round'),
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props: skeletonProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;

    var renderAvatar = () => {
      if (props.avatar) {
        return (0, _vue.createVNode)("div", {
          "class": bem('avatar', props.avatarShape),
          "style": (0, _utils.getSizeStyle)(props.avatarSize)
        }, null);
      }
    };

    var renderTitle = () => {
      if (props.title) {
        return (0, _vue.createVNode)("h3", {
          "class": bem('title'),
          "style": {
            width: (0, _utils.addUnit)(props.titleWidth)
          }
        }, null);
      }
    };

    var getRowWidth = index => {
      var {
        rowWidth
      } = props;

      if (rowWidth === DEFAULT_ROW_WIDTH && index === +props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    };

    var renderRows = () => Array(props.row).fill('').map((_, i) => (0, _vue.createVNode)("div", {
      "class": bem('row'),
      "style": {
        width: (0, _utils.addUnit)(getRowWidth(i))
      }
    }, null));

    return () => {
      if (!props.loading) {
        return slots.default == null ? void 0 : slots.default();
      }

      return (0, _vue.createVNode)("div", {
        "class": bem({
          animate: props.animate,
          round: props.round
        })
      }, [renderAvatar(), (0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [renderTitle(), renderRows()])]);
    };
  }

});

exports.default = _default;