"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _Cell = require("../cell/Cell");

var _utils = require("../utils");

var _Collapse = require("../collapse/Collapse");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _useLazyRender = require("../composables/use-lazy-render");

var _cell = require("../cell");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('collapse-item');
var CELL_SLOTS = ['icon', 'title', 'value', 'label', 'right-icon'];
var collapseItemProps = (0, _utils.extend)({}, _Cell.cellSharedProps, {
  name: _utils.numericProp,
  isLink: _utils.truthProp,
  disabled: Boolean,
  readonly: Boolean
});

var _default = (0, _vue.defineComponent)({
  name,
  props: collapseItemProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var wrapperRef = (0, _vue.ref)();
    var contentRef = (0, _vue.ref)();
    var {
      parent,
      index
    } = (0, _use.useParent)(_Collapse.COLLAPSE_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <CollapseItem> must be a child component of <Collapse>.');
      }

      return;
    }

    var name = (0, _vue.computed)(() => {
      var _props$name;

      return (_props$name = props.name) != null ? _props$name : index.value;
    });
    var expanded = (0, _vue.computed)(() => parent.isExpanded(name.value));
    var show = (0, _vue.ref)(expanded.value);
    var lazyRender = (0, _useLazyRender.useLazyRender)(show);

    var onTransitionEnd = () => {
      if (!expanded.value) {
        show.value = false;
      } else if (wrapperRef.value) {
        wrapperRef.value.style.height = '';
      }
    };

    (0, _vue.watch)(expanded, (value, oldValue) => {
      if (oldValue === null) {
        return;
      }

      if (value) {
        show.value = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var tick = value ? _vue.nextTick : _use.raf;
      tick(() => {
        if (!contentRef.value || !wrapperRef.value) {
          return;
        }

        var {
          offsetHeight
        } = contentRef.value;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapperRef.value.style.height = value ? '0' : contentHeight; // use double raf to ensure animation can start

          (0, _use.doubleRaf)(() => {
            if (wrapperRef.value) {
              wrapperRef.value.style.height = value ? contentHeight : '0';
            }
          });
        } else {
          onTransitionEnd();
        }
      });
    });

    var toggle = function (newValue) {
      if (newValue === void 0) {
        newValue = !expanded.value;
      }

      parent.toggle(name.value, newValue);
    };

    var onClickTitle = () => {
      if (!props.disabled && !props.readonly) {
        toggle();
      }
    };

    var renderTitle = () => {
      var {
        border,
        disabled,
        readonly
      } = props;
      var attrs = (0, _utils.pick)(props, Object.keys(_Cell.cellSharedProps));

      if (readonly) {
        attrs.isLink = false;
      }

      if (disabled || readonly) {
        attrs.clickable = false;
      }

      return (0, _vue.createVNode)(_cell.Cell, (0, _vue.mergeProps)({
        "role": "button",
        "class": bem('title', {
          disabled,
          expanded: expanded.value,
          borderless: !border
        }),
        "aria-expanded": String(expanded.value),
        "onClick": onClickTitle
      }, attrs), (0, _utils.pick)(slots, CELL_SLOTS));
    };

    var renderContent = lazyRender(() => (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
      "ref": wrapperRef,
      "class": bem('wrapper'),
      "onTransitionend": onTransitionEnd
    }, [(0, _vue.createVNode)("div", {
      "ref": contentRef,
      "class": bem('content')
    }, [slots.default == null ? void 0 : slots.default()])]), [[_vue.vShow, show.value]]));
    (0, _useExpose.useExpose)({
      toggle
    });
    return () => (0, _vue.createVNode)("div", {
      "class": [bem({
        border: index.value && props.border
      })]
    }, [renderTitle(), renderContent()]);
  }

});

exports.default = _default;