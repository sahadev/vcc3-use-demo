import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
import { ref, watch, computed, reactive, nextTick, onActivated, defineComponent, getCurrentInstance } from 'vue'; // Utils

import { pick, isDef, addUnit, isHidden, unitToPx, truthProp, numericProp, windowWidth, getElementTop, makeStringProp, callInterceptor, createNamespace, makeNumericProp, setRootScrollTop, BORDER_TOP_BOTTOM } from '../utils';
import { scrollLeftTo, scrollTopTo } from './utils'; // Composables

import { useRect, useChildren, useScrollParent, useEventListener, onMountedOrActivated } from '@vant/use';
import { useId } from '../composables/use-id';
import { route } from '../composables/use-route';
import { useRefs } from '../composables/use-refs';
import { useExpose } from '../composables/use-expose';
import { onPopupReopen } from '../composables/on-popup-reopen'; // Components

import { Sticky } from '../sticky';
import TabsTitle from './TabsTitle';
import TabsContent from './TabsContent'; // Types

var [name, bem] = createNamespace('tabs');
var tabsProps = {
  type: makeStringProp('line'),
  color: String,
  border: Boolean,
  sticky: Boolean,
  active: makeNumericProp(0),
  duration: makeNumericProp(0.3),
  animated: Boolean,
  ellipsis: truthProp,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: makeNumericProp(0),
  background: String,
  lazyRender: truthProp,
  lineWidth: numericProp,
  lineHeight: numericProp,
  beforeChange: Function,
  swipeThreshold: makeNumericProp(5),
  titleActiveColor: String,
  titleInactiveColor: String
};
export var TABS_KEY = Symbol(name);
export default defineComponent({
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

      var _props = (_getCurrentInstance = getCurrentInstance()) == null ? void 0 : (_getCurrentInstance$v = _getCurrentInstance.vnode) == null ? void 0 : _getCurrentInstance$v.props;

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
    var root = ref();
    var navRef = ref();
    var wrapRef = ref();
    var id = useId();
    var scroller = useScrollParent(root);
    var [titleRefs, setTitleRefs] = useRefs();
    var {
      children,
      linkChildren
    } = useChildren(TABS_KEY);
    var state = reactive({
      inited: false,
      position: '',
      lineStyle: {},
      currentIndex: -1
    }); // whether the nav is scrollable

    var scrollable = computed(() => children.length > props.swipeThreshold || !props.ellipsis);
    var navStyle = computed(() => ({
      borderColor: props.color,
      background: props.background
    }));

    var getTabName = (tab, index) => {
      var _tab$name;

      return (_tab$name = tab.name) != null ? _tab$name : index;
    };

    var currentName = computed(() => {
      var activeTab = children[state.currentIndex];

      if (activeTab) {
        return getTabName(activeTab, state.currentIndex);
      }
    });
    var offsetTopPx = computed(() => unitToPx(props.offsetTop));
    var scrollOffset = computed(() => {
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
      scrollLeftTo(nav, to, immediate ? 0 : +props.duration);
    }; // update nav bar style


    var setLine = () => {
      var shouldAnimate = state.inited;
      nextTick(() => {
        var titles = titleRefs.value;

        if (!titles || !titles[state.currentIndex] || props.type !== 'line' || isHidden(root.value)) {
          return;
        }

        var title = titles[state.currentIndex].$el;
        var {
          lineWidth,
          lineHeight
        } = props;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: props.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = props.duration + "s";
        }

        if (isDef(lineHeight)) {
          var height = addUnit(lineHeight);
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

      if (!isDef(newIndex)) {
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
          var to = getElementTop(target, scroller.value) - scrollOffset.value;
          lockScroll = true;
          scrollTopTo(scroller.value, to, immediate ? 0 : +props.duration, () => {
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
        callInterceptor(props.beforeChange, {
          args: [name],
          done: () => {
            setCurrentIndex(index);
            scrollToCurrentContent();
          }
        }); // @deprecated
        // should be removed in next major version

        emit('click', name, title);
        route(item);
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
      nextTick(() => {
        setCurrentIndexByName(name);
        scrollToCurrentContent(true);
      });
    };

    var getCurrentIndexOnScroll = () => {
      for (var index = 0; index < children.length; index++) {
        var {
          top
        } = useRect(children[index].$el);

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

    var renderNav = () => children.map((item, index) => _createVNode(TabsTitle, _mergeProps({
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
    }, pick(item, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge'])), null));

    var renderHeader = () => {
      var _slots$navLeft, _slots$navRight;

      var {
        type,
        border
      } = props;
      return _createVNode("div", {
        "ref": wrapRef,
        "class": [bem('wrap', {
          scrollable: scrollable.value
        }), {
          [BORDER_TOP_BOTTOM]: type === 'line' && border
        }]
      }, [_createVNode("div", {
        "ref": navRef,
        "role": "tablist",
        "class": bem('nav', [type, {
          complete: scrollable.value
        }]),
        "style": navStyle.value,
        "aria-orientation": "horizontal"
      }, [(_slots$navLeft = slots['nav-left']) == null ? void 0 : _slots$navLeft.call(slots), renderNav(), type === 'line' && _createVNode("div", {
        "class": bem('line'),
        "style": state.lineStyle
      }, null), (_slots$navRight = slots['nav-right']) == null ? void 0 : _slots$navRight.call(slots)])]);
    };

    watch([() => props.color, windowWidth], setLine);
    watch(() => props.active, value => {
      if (value !== currentName.value) {
        setCurrentIndexByName(value);
      }
    });
    watch(() => children.length, () => {
      if (state.inited) {
        setCurrentIndexByName(props.active);
        setLine();
        nextTick(() => {
          scrollIntoView(true);
        });
      }
    });
    watch(() => state.currentIndex, () => {
      scrollIntoView();
      setLine(); // scroll to correct position

      if (stickyFixed && !props.scrollspy) {
        setRootScrollTop(Math.ceil(getElementTop(root.value) - offsetTopPx.value));
      }
    });

    var init = () => {
      setCurrentIndexByName(props.active);
      nextTick(() => {
        state.inited = true;

        if (wrapRef.value) {
          tabHeight = useRect(wrapRef.value).height;
        }

        scrollIntoView(true);
      });
    };

    var onRendered = (name, title) => emit('rendered', name, title);

    useExpose({
      resize: setLine,
      scrollTo
    });
    onActivated(setLine);
    onPopupReopen(setLine);
    onMountedOrActivated(init);
    useEventListener('scroll', onScroll, {
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

      return _createVNode("div", {
        "ref": root,
        "class": bem([props.type])
      }, [props.sticky ? _createVNode(Sticky, {
        "container": root.value,
        "offsetTop": offsetTopPx.value,
        "onScroll": onStickyScroll
      }, {
        default: () => [renderHeader(), (_slots$navBottom = slots['nav-bottom']) == null ? void 0 : _slots$navBottom.call(slots)]
      }) : [renderHeader(), (_slots$navBottom2 = slots['nav-bottom']) == null ? void 0 : _slots$navBottom2.call(slots)], _createVNode(TabsContent, {
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