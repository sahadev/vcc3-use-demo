"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var [name] = (0, _utils.createNamespace)('calendar-day');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    item: (0, _utils.makeRequiredProp)(Object),
    color: String,
    index: Number,
    offset: (0, _utils.makeNumberProp)(0),
    rowHeight: String
  },
  emits: ['click'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var style = (0, _vue.computed)(() => {
      var {
        item,
        index,
        color,
        offset,
        rowHeight
      } = props;
      var style = {
        height: rowHeight
      };

      if (item.type === 'placeholder') {
        style.width = '100%';
        return style;
      }

      if (index === 0) {
        style.marginLeft = 100 * offset / 7 + "%";
      }

      if (color) {
        switch (item.type) {
          case 'end':
          case 'start':
          case 'start-end':
          case 'multiple-middle':
          case 'multiple-selected':
            style.background = color;
            break;

          case 'middle':
            style.color = color;
            break;
        }
      }

      return style;
    });

    var onClick = () => {
      if (props.item.type !== 'disabled') {
        emit('click', props.item);
      }
    };

    var renderTopInfo = () => {
      var {
        topInfo
      } = props.item;

      if (topInfo || slots['top-info']) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('top-info')
        }, [slots['top-info'] ? slots['top-info'](props.item) : topInfo]);
      }
    };

    var renderBottomInfo = () => {
      var {
        bottomInfo
      } = props.item;

      if (bottomInfo || slots['bottom-info']) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('bottom-info')
        }, [slots['bottom-info'] ? slots['bottom-info'](props.item) : bottomInfo]);
      }
    };

    var renderContent = () => {
      var {
        item,
        color,
        rowHeight
      } = props;
      var {
        type,
        text
      } = item;
      var Nodes = [renderTopInfo(), text, renderBottomInfo()];

      if (type === 'selected') {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('selected-day'),
          "style": {
            width: rowHeight,
            height: rowHeight,
            background: color
          }
        }, [Nodes]);
      }

      return Nodes;
    };

    return () => {
      var {
        type,
        className
      } = props.item;

      if (type === 'placeholder') {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('day'),
          "style": style.value
        }, null);
      }

      return (0, _vue.createVNode)("div", {
        "role": "gridcell",
        "style": style.value,
        "class": [(0, _utils2.bem)('day', type), className],
        "tabindex": type === 'disabled' ? undefined : -1,
        "onClick": onClick
      }, [renderContent()]);
    };
  }

});

exports.default = _default;