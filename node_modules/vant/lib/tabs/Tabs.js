"use strict";

exports.__esModule = true;
exports.default = exports.TABS_KEY = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _use = require("@vant/use");

var _useId = require("../composables/use-id");

var _useRoute = require("../composables/use-route");

var _useRefs = require("../composables/use-refs");

var _useExpose = require("../composables/use-expose");

var _onPopupReopen = require("../composables/on-popup-reopen");

var _sticky = require("../sticky");

var _TabsTitle = _interopRequireDefault(require("./TabsTitle"));

var _TabsContent = _interopRequireDefault(require("./TabsContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('tabs');
var tabsProps = {
  type: (0, _utils.makeStringProp)('line'),
  color: String,
  border: Boolean,
  sticky: Boolean,
  active: (0, _utils.makeNumericProp)(0),
  duration: (0, _utils.makeNumericProp)(0.3),
  animated: Boolean,
  ellipsis: _utils.truthProp,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: (0, _utils.makeNumericProp)(0),
  background: String,
  lazyRender: _utils.truthProp,
  lineWidth: _utils.numericProp,
  lineHeight: _utils.numericProp,
  beforeChange: Function,
  swipeThreshold: (0, _utils.makeNumericProp)(5),
  titleActiveColor: String,
  titleInactiveColor: String
};
var TABS_KEY = Symbol(name);
exports.TABS_KEY = TABS_KEY;

var _default = (0, _vue.defineComponent)({
  name,
  props: tabsProps,
  emits: ['click', 'change', 'scroll', 'disabled', 'rendered', 'click-tab', 'update:active'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    if (process.env.NODE_ENV !== 'production') {
      var _getCurrentInstance, _getCurrentInstance$v;

      var _props = (_getCurrentInstance = (0, _vue.getCurrentInstance)()) == null ? void 0 : (_getCurrentInstance$v = _getCurrentInstance.vnode) == null ? void 0 : _getCurrentInstance$v.props;

      if (_props && 'onClick' in _props) {
        console.warn('[Vant] Tabs: "click" event is deprecated, using "click-tab" instead.');
      }

      if (_props && 'onDisabled' in _props) {
        console.warn('[Vant] Tabs: "disabled" event is deprecated, using "click-tab" instead.');
      }
    }

    var tabHeight;
    var lockScroll;
    var stickyFixed;
    var root = (0, _vue.ref)();
    var navRef = (0, _vue.ref)();
    var wrapRef = (0, _vue.ref)();
    var id = (0, _useId.useId)();
    var scroller = (0, _use.useScrollParent)(root);
    var [titleRefs, setTitleRefs] = (0, _useRefs.useRefs)();
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(TABS_KEY);
    var state = (0, _vue.reactive)({
      inited: false,
      position: '',
      lineStyle: {},
      currentIndex: -1
    }); // whether the nav is scrollable

    var scrollable = (0, _vue.computed)(() => children.length > props.swipeThreshold || !props.ellipsis);
    var navStyle = (0, _vue.computed)(() => ({
      borderColor: props.color,
      background: props.background
    }));

    var getTabName = (tab, index) => {
      var _tab$name;

      return (_tab$name = tab.name) != null ? _tab$name : index;
    };

    var currentName = (0, _vue.computed)(() => {
      var activeTab = children[state.currentIndex];

      if (activeTab) {
        return getTabName(activeTab, state.currentIndex);
      }
    });
    var offsetTopPx = (0, _vue.computed)(() => (0, _utils.unitToPx)(props.offsetTop));
    var scrollOffset = (0, _vue.computed)(() => {
      if (props.sticky) {
        return offsetTopPx.value + tabHeight;
      }

      return 0;
    }); // scroll active tab into view

    var scrollIntoView = immediate => {
      var nav = navRef.value;
      var titles = titleRefs.value;

      if (!scrollable.value || !nav || !titles || !titles[state.currentIndex]) {
        return;
      }

      var title = titles[state.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      (0, _utils2.scrollLeftTo)(nav, to, immediate ? 0 : +props.duration);
    }; // update nav bar style


    var setLine = () => {
      var shouldAnimate = state.inited;
      (0, _vue.nextTick)(() => {
        var titles = titleRefs.value;

        if (!titles || !titles[state.currentIndex] || props.type !== 'line' || (0, _utils.isHidden)(root.value)) {
          return;
        }

        var title = titles[state.currentIndex].$el;
        var {
          lineWidth,
          lineHeight
        } = props;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: (0, _utils.addUnit)(lineWidth),
          backgroundColor: props.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = props.duration + "s";
        }

        if ((0, _utils.isDef)(lineHeight)) {
          var height = (0, _utils.addUnit)(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        state.lineStyle = lineStyle;
      });
    };

    var findAvailableTab = index => {
      var diff = index < state.currentIndex ? -1 : 1;

      while (index >= 0 && index < children.length) {
        if (!children[index].disabled) {
          return index;
        }

        index += diff;
      }
    };

    var setCurrentIndex = currentIndex => {
      var newIndex = findAvailableTab(currentIndex);

      if (!(0, _utils.isDef)(newIndex)) {
        return;
      }

      var newTab = children[newIndex];
      var newName = getTabName(newTab, newIndex);
      var shouldEmitChange = state.currentIndex !== null;
      state.currentIndex = newIndex;

      if (newName !== props.active) {
        emit('update:active', newName);

        if (shouldEmitChange) {
          emit('change', newName, newTab.title);
        }
      }
    }; // correct the index of active tab


    var setCurrentIndexByName = name => {
      var matched = children.find((tab, index) => getTabName(tab, index) === name);
      var index = matched ? children.indexOf(matched) : 0;
      setCurrentIndex(index);
    };

    var scrollToCurrentContent = function (immediate) {
      if (immediate === void 0) {
        immediate = false;
      }

      if (props.scrollspy) {
        var target = children[state.currentIndex].$el;

        if (target && scroller.value) {
          var to = (0, _utils.getElementTop)(target, scroller.value) - scrollOffset.value;
          lockScroll = true;
          (0, _utils2.scrollTopTo)(scroller.value, to, immediate ? 0 : +props.duration, () => {
            lockScroll = false;
          });
        }
      }
    }; // emit event when clicked


    var onClickTab = (item, index, event) => {
      var {
        title,
        disabled
      } = children[index];
      var name = getTabName(children[index], index);

      if (disabled) {
        // @deprecated
        // should be removed in next major version
        emit('disabled', name, title);
      } else {
        (0, _utils.callInterceptor)(props.beforeChange, {
          args: [name],
          done: () => {
            setCurrentIndex(index);
            scrollToCurrentContent();
          }
        }); // @deprecated
        // should be removed in next major version

        emit('click', name, title);
        (0, _useRoute.route)(item);
      }

      emit('click-tab', {
        name,
        title,
        event,
        disabled
      });
    };

    var onStickyScroll = params => {
      stickyFixed = params.isFixed;
      emit('scroll', params);
    };

    var scrollTo = name => {
      (0, _vue.nextTick)(() => {
        setCurrentIndexByName(name);
        scrollToCurrentContent(true);
      });
    };

    var getCurrentIndexOnScroll = () => {
      for (var index = 0; index < children.length; index++) {
        var {
          top
        } = (0, _use.useRect)(children[index].$el);

        if (top > scrollOffset.value) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    };

    var onScroll = () => {
      if (props.scrollspy && !lockScroll) {
        var index = getCurrentIndexOnScroll();
        setCurrentIndex(index);
      }
    };

    var renderNav = () => children.map((item, index) => (0, _vue.createVNode)(_TabsTitle.default, (0, _vue.mergeProps)({
      "id": id + "-" + index,
      "ref": setTitleRefs(index),
      "type": props.type,
      "color": props.color,
      "style": item.titleStyle,
      "class": item.titleClass,
      "isActive": index === state.currentIndex,
      "controls": item.id,
      "scrollable": scrollable.value,
      "renderTitle": item.$slots.title,
      "activeColor": props.titleActiveColor,
      "inactiveColor": props.titleInactiveColor,
      "onClick": event => onClickTab(item, index, event)
    }, (0, _utils.pick)(item, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge'])), null));

    var renderHeader = () => {
      var _slots$navLeft, _slots$navRight;

      var {
        type,
        border
      } = props;
      return (0, _vue.createVNode)("div", {
        "ref": wrapRef,
        "class": [bem('wrap', {
          scrollable: scrollable.value
        }), {
          [_utils.BORDER_TOP_BOTTOM]: type === 'line' && border
        }]
      }, [(0, _vue.createVNode)("div", {
        "ref": navRef,
        "role": "tablist",
        "class": bem('nav', [type, {
          complete: scrollable.value
        }]),
        "style": navStyle.value,
        "aria-orientation": "horizontal"
      }, [(_slots$navLeft = slots['nav-left']) == null ? void 0 : _slots$navLeft.call(slots), renderNav(), type === 'line' && (0, _vue.createVNode)("div", {
        "class": bem('line'),
        "style": state.lineStyle
      }, null), (_slots$navRight = slots['nav-right']) == null ? void 0 : _slots$navRight.call(slots)])]);
    };

    (0, _vue.watch)([() => props.color, _utils.windowWidth], setLine);
    (0, _vue.watch)(() => props.active, value => {
      if (value !== currentName.value) {
        setCurrentIndexByName(value);
      }
    });
    (0, _vue.watch)(() => children.length, () => {
      if (state.inited) {
        setCurrentIndexByName(props.active);
        setLine();
        (0, _vue.nextTick)(() => {
          scrollIntoView(true);
        });
      }
    });
    (0, _vue.watch)(() => state.currentIndex, () => {
      scrollIntoView();
      setLine(); // scroll to correct position

      if (stickyFixed && !props.scrollspy) {
        (0, _utils.setRootScrollTop)(Math.ceil((0, _utils.getElementTop)(root.value) - offsetTopPx.value));
      }
    });

    var init = () => {
      setCurrentIndexByName(props.active);
      (0, _vue.nextTick)(() => {
        state.inited = true;

        if (wrapRef.value) {
          tabHeight = (0, _use.useRect)(wrapRef.value).height;
        }

        scrollIntoView(true);
      });
    };

    var onRendered = (name, title) => emit('rendered', name, title);

    (0, _useExpose.useExpose)({
      resize: setLine,
      scrollTo
    });
    (0, _vue.onActivated)(setLine);
    (0, _onPopupReopen.onPopupReopen)(setLine);
    (0, _use.onMountedOrActivated)(init);
    (0, _use.useEventListener)('scroll', onScroll, {
      target: scroller
    });
    linkChildren({
      id,
      props,
      setLine,
      onRendered,
      currentName,
      scrollIntoView
    });
    return () => {
      var _slots$navBottom, _slots$navBottom2;

      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem([props.type])
      }, [props.sticky ? (0, _vue.createVNode)(_sticky.Sticky, {
        "container": root.value,
        "offsetTop": offsetTopPx.value,
        "onScroll": onStickyScroll
      }, {
        default: () => [renderHeader(), (_slots$navBottom = slots['nav-bottom']) == null ? void 0 : _slots$navBottom.call(slots)]
      }) : [renderHeader(), (_slots$navBottom2 = slots['nav-bottom']) == null ? void 0 : _slots$navBottom2.call(slots)], (0, _vue.createVNode)(_TabsContent.default, {
        "count": children.length,
        "inited": state.inited,
        "animated": props.animated,
        "duration": props.duration,
        "swipeable": props.swipeable,
        "lazyRender": props.lazyRender,
        "currentIndex": state.currentIndex,
        "onChange": setCurrentIndex
      }, {
        default: () => [slots.default == null ? void 0 : slots.default()]
      })]);
    };
  }

});

exports.default = _default;