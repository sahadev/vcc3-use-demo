import { createVNode as _createVNode } from "vue";
import { ref, watch, computed, reactive, defineComponent } from 'vue'; // Utils

import { extend, isHidden, unitToPx, numericProp, getScrollTop, getZIndexStyle, makeStringProp, makeNumericProp, createNamespace } from '../utils'; // Composables

import { useRect, useEventListener, useScrollParent } from '@vant/use';
import { useVisibilityChange } from '../composables/use-visibility-change';
var [name, bem] = createNamespace('sticky');
var stickyProps = {
  zIndex: numericProp,
  position: makeStringProp('top'),
  container: Object,
  offsetTop: makeNumericProp(0),
  offsetBottom: makeNumericProp(0)
};
export default defineComponent({
  name,
  props: stickyProps,
  emits: ['scroll', 'change'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var root = ref();
    var scrollParent = useScrollParent(root);
    var state = reactive({
      fixed: false,
      width: 0,
      // root width
      height: 0,
      // root height
      transform: 0
    });
    var offset = computed(() => unitToPx(props.position === 'top' ? props.offsetTop : props.offsetBottom));
    var rootStyle = computed(() => {
      var {
        fixed,
        height,
        width
      } = state;

      if (fixed) {
        return {
          width: width + "px",
          height: height + "px"
        };
      }
    });
    var stickyStyle = computed(() => {
      if (!state.fixed) {
        return;
      }

      var style = extend(getZIndexStyle(props.zIndex), {
        width: state.width + "px",
        height: state.height + "px",
        [props.position]: offset.value + "px"
      });

      if (state.transform) {
        style.transform = "translate3d(0, " + state.transform + "px, 0)";
      }

      return style;
    });

    var emitScroll = scrollTop => emit('scroll', {
      scrollTop,
      isFixed: state.fixed
    });

    var onScroll = () => {
      if (!root.value || isHidden(root)) {
        return;
      }

      var {
        container,
        position
      } = props;
      var rootRect = useRect(root);
      var scrollTop = getScrollTop(window);
      state.width = rootRect.width;
      state.height = rootRect.height;

      if (position === 'top') {
        // The sticky component should be kept inside the container element
        if (container) {
          var containerRect = useRect(container);
          var difference = containerRect.bottom - offset.value - state.height;
          state.fixed = offset.value > rootRect.top && containerRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = offset.value > rootRect.top;
        }
      } else {
        var {
          clientHeight
        } = document.documentElement;

        if (container) {
          var _containerRect = useRect(container);

          var _difference = clientHeight - _containerRect.top - offset.value - state.height;

          state.fixed = clientHeight - offset.value < rootRect.bottom && clientHeight > _containerRect.top;
          state.transform = _difference < 0 ? -_difference : 0;
        } else {
          state.fixed = clientHeight - offset.value < rootRect.bottom;
        }
      }

      emitScroll(scrollTop);
    };

    watch(() => state.fixed, value => emit('change', value));
    useEventListener('scroll', onScroll, {
      target: scrollParent
    });
    useVisibilityChange(root, onScroll);
    return () => _createVNode("div", {
      "ref": root,
      "style": rootStyle.value
    }, [_createVNode("div", {
      "class": bem({
        fixed: state.fixed
      }),
      "style": stickyStyle.value
    }, [slots.default == null ? void 0 : slots.default()])]);
  }

});