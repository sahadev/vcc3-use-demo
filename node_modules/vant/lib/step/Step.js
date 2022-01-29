"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _Steps = require("../steps/Steps");

var _use = require("@vant/use");

var _icon = require("../icon");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('step');

var _default = (0, _vue.defineComponent)({
  name,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      parent,
      index
    } = (0, _use.useParent)(_Steps.STEPS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <Step> must be a child component of <Steps>.');
      }

      return;
    }

    var parentProps = parent.props;

    var getStatus = () => {
      var active = +parentProps.active;

      if (index.value < active) {
        return 'finish';
      }

      return index.value === active ? 'process' : 'waiting';
    };

    var isActive = () => getStatus() === 'process';

    var lineStyle = (0, _vue.computed)(() => ({
      background: getStatus() === 'finish' ? parentProps.activeColor : parentProps.inactiveColor
    }));
    var titleStyle = (0, _vue.computed)(() => {
      if (isActive()) {
        return {
          color: parentProps.activeColor
        };
      }

      if (!getStatus()) {
        return {
          color: parentProps.inactiveColor
        };
      }
    });

    var onClickStep = () => parent.onClickStep(index.value);

    var renderCircle = () => {
      var {
        iconPrefix,
        finishIcon,
        activeIcon,
        activeColor,
        inactiveIcon
      } = parentProps;

      if (isActive()) {
        if (slots['active-icon']) {
          return slots['active-icon']();
        }

        return (0, _vue.createVNode)(_icon.Icon, {
          "class": bem('icon', 'active'),
          "name": activeIcon,
          "color": activeColor,
          "classPrefix": iconPrefix
        }, null);
      }

      if (getStatus() === 'finish' && (finishIcon || slots['finish-icon'])) {
        if (slots['finish-icon']) {
          return slots['finish-icon']();
        }

        return (0, _vue.createVNode)(_icon.Icon, {
          "class": bem('icon', 'finish'),
          "name": finishIcon,
          "color": activeColor,
          "classPrefix": iconPrefix
        }, null);
      }

      if (slots['inactive-icon']) {
        return slots['inactive-icon']();
      }

      if (inactiveIcon) {
        return (0, _vue.createVNode)(_icon.Icon, {
          "class": bem('icon'),
          "name": inactiveIcon,
          "classPrefix": iconPrefix
        }, null);
      }

      return (0, _vue.createVNode)("i", {
        "class": bem('circle'),
        "style": lineStyle.value
      }, null);
    };

    return () => {
      var status = getStatus();
      return (0, _vue.createVNode)("div", {
        "class": [_utils.BORDER, bem([parentProps.direction, {
          [status]: status
        }])]
      }, [(0, _vue.createVNode)("div", {
        "class": bem('title', {
          active: isActive()
        }),
        "style": titleStyle.value,
        "onClick": onClickStep
      }, [slots.default == null ? void 0 : slots.default()]), (0, _vue.createVNode)("div", {
        "class": bem('circle-container'),
        "onClick": onClickStep
      }, [renderCircle()]), (0, _vue.createVNode)("div", {
        "class": bem('line'),
        "style": lineStyle.value
      }, null)]);
    };
  }

});

exports.default = _default;