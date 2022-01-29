"use strict";

exports.__esModule = true;
exports.default = exports.DROPDOWN_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _useId = require("../composables/use-id");

var _use = require("@vant/use");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('dropdown-menu');
var dropdownMenuProps = {
  overlay: _utils.truthProp,
  zIndex: _utils.numericProp,
  duration: (0, _utils.makeNumericProp)(0.2),
  direction: (0, _utils.makeStringProp)('down'),
  activeColor: String,
  closeOnClickOutside: _utils.truthProp,
  closeOnClickOverlay: _utils.truthProp
};
var DROPDOWN_KEY = Symbol(name);
exports.DROPDOWN_KEY = DROPDOWN_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: dropdownMenuProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var id = (0, _useId.useId)();
    var root = (0, _vue.ref)();
    var barRef = (0, _vue.ref)();
    var offset = (0, _vue.ref)(0);
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(DROPDOWN_KEY);
    var scrollParent = (0, _use.useScrollParent)(root);
    var opened = (0, _vue.computed)(() => children.some(item => item.state.showWrapper));
    var barStyle = (0, _vue.computed)(() => {
      if (opened.value && (0, _utils.isDef)(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1
        };
      }
    });

    var onClickAway = () => {
      if (props.closeOnClickOutside) {
        children.forEach(item => {
          item.toggle(false);
        });
      }
    };

    var updateOffset = () => {
      if (barRef.value) {
        var rect = (0, _use.useRect)(barRef);

        if (props.direction === 'down') {
          offset.value = rect.bottom;
        } else {
          offset.value = _utils.windowHeight.value - rect.top;
        }
      }
    };

    var onScroll = () => {
      if (opened.value) {
        updateOffset();
      }
    };

    var toggleItem = active => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    };

    var renderTitle = (item, index) => {
      var {
        showPopup
      } = item.state;
      var {
        disabled,
        titleClass
      } = item;
      return (0, _vue.createVNode)("div", {
        "id": id + "-" + index,
        "role": "button",
        "tabindex": disabled ? undefined : 0,
        "class": [bem('item', {
          disabled
        }), {
          [_utils.HAPTICS_FEEDBACK]: !disabled
        }],
        "onClick": () => {
          if (!disabled) {
            toggleItem(index);
          }
        }
      }, [(0, _vue.createVNode)("span", {
        "class": [bem('title', {
          down: showPopup === (props.direction === 'down'),
          active: showPopup
        }), titleClass],
        "style": {
          color: showPopup ? props.activeColor : ''
        }
      }, [(0, _vue.createVNode)("div", {
        "class": "van-ellipsis"
      }, [item.renderTitle()])])]);
    };

    linkChildren({
      id,
      props,
      offset
    });
    (0, _use.useClickAway)(root, onClickAway);
    (0, _use.useEventListener)('scroll', onScroll, {
      target: scrollParent
    });
    return () => (0, _vue.createVNode)("div", {
      "ref": root,
      "class": bem()
    }, [(0, _vue.createVNode)("div", {
      "ref": barRef,
      "style": barStyle.value,
      "class": bem('bar', {
        opened: opened.value
      })
    }, [children.map(renderTitle)]), slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;