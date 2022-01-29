import { createVNode as _createVNode } from "vue";
import { ref, watch, computed, nextTick, Teleport, onMounted, defineComponent } from 'vue'; // Utils

import { isDef, isHidden, truthProp, numericProp, getScrollTop, preventDefault, makeNumberProp, createNamespace, getRootScrollTop, setRootScrollTop } from '../utils'; // Composables

import { useRect, useChildren, useScrollParent, useEventListener } from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose'; // Types

function genAlphabet() {
  var charCodeOfA = 'A'.charCodeAt(0);
  var indexList = Array(26).fill('').map((_, i) => String.fromCharCode(charCodeOfA + i));
  return indexList;
}

var [name, bem] = createNamespace('index-bar');
var indexBarProps = {
  sticky: truthProp,
  zIndex: numericProp,
  teleport: [String, Object],
  highlightColor: String,
  stickyOffsetTop: makeNumberProp(0),
  indexList: {
    type: Array,
    default: genAlphabet
  }
};
export var INDEX_BAR_KEY = Symbol(name);
export default defineComponent({
  name,
  props: indexBarProps,
  emits: ['select', 'change'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = ref();
    var activeAnchor = ref('');
    var touch = useTouch();
    var scrollParent = useScrollParent(root);
    var {
      children,
      linkChildren
    } = useChildren(INDEX_BAR_KEY);
    linkChildren({
      props
    });
    var sidebarStyle = computed(() => {
      if (isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1
        };
      }
    });
    var highlightStyle = computed(() => {
      if (props.highlightColor) {
        return {
          color: props.highlightColor
        };
      }
    });

    var getActiveAnchor = (scrollTop, rects) => {
      for (var i = children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;
        var reachTop = props.sticky ? prevHeight + props.stickyOffsetTop : 0;

        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    };

    var onScroll = () => {
      if (isHidden(root)) {
        return;
      }

      var {
        sticky,
        indexList
      } = props;
      var scrollTop = getScrollTop(scrollParent.value);
      var scrollParentRect = useRect(scrollParent);
      var rects = children.map(item => item.getRect(scrollParent.value, scrollParentRect));
      var active = getActiveAnchor(scrollTop, rects);
      activeAnchor.value = indexList[active];

      if (sticky) {
        children.forEach((item, index) => {
          var {
            state,
            $el
          } = item;

          if (index === active || index === active - 1) {
            var rect = $el.getBoundingClientRect();
            state.left = rect.left;
            state.width = rect.width;
          } else {
            state.left = null;
            state.width = null;
          }

          if (index === active) {
            state.active = true;
            state.top = Math.max(props.stickyOffsetTop, rects[index].top - scrollTop) + scrollParentRect.top;
          } else if (index === active - 1) {
            var activeItemTop = rects[active].top - scrollTop;
            state.active = activeItemTop > 0;
            state.top = activeItemTop + scrollParentRect.top - rects[index].height;
          } else {
            state.active = false;
          }
        });
      }
    };

    var init = () => nextTick(onScroll);

    useEventListener('scroll', onScroll, {
      target: scrollParent
    });
    onMounted(init);
    watch(() => props.indexList, init);
    watch(activeAnchor, value => {
      if (value) {
        emit('change', value);
      }
    });

    var renderIndexes = () => props.indexList.map(index => {
      var active = index === activeAnchor.value;
      return _createVNode("span", {
        "class": bem('index', {
          active
        }),
        "style": active ? highlightStyle.value : undefined,
        "data-index": index
      }, [index]);
    });

    var scrollTo = index => {
      index = String(index);
      var match = children.find(item => String(item.index) === index);

      if (match) {
        match.$el.scrollIntoView();

        if (props.sticky && props.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - props.stickyOffsetTop);
        }

        emit('select', match.index);
      }
    };

    var scrollToElement = element => {
      var {
        index
      } = element.dataset;

      if (index) {
        scrollTo(index);
      }
    };

    var onClickSidebar = event => {
      scrollToElement(event.target);
    };

    var touchActiveIndex;

    var onTouchMove = event => {
      touch.move(event);

      if (touch.isVertical()) {
        preventDefault(event);
        var {
          clientX,
          clientY
        } = event.touches[0];
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var {
            index
          } = target.dataset;

          if (index && touchActiveIndex !== index) {
            touchActiveIndex = index;
            scrollToElement(target);
          }
        }
      }
    };

    var renderSidebar = () => _createVNode("div", {
      "class": bem('sidebar'),
      "style": sidebarStyle.value,
      "onClick": onClickSidebar,
      "onTouchstart": touch.start,
      "onTouchmove": onTouchMove
    }, [renderIndexes()]);

    useExpose({
      scrollTo
    });
    return () => _createVNode("div", {
      "ref": root,
      "class": bem()
    }, [props.teleport ? _createVNode(Teleport, {
      "to": props.teleport
    }, {
      default: () => [renderSidebar()]
    }) : renderSidebar(), slots.default == null ? void 0 : slots.default()]);
  }

});