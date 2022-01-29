import { createVNode as _createVNode } from "vue";
import { computed, nextTick, reactive, onMounted, defineComponent } from 'vue'; // Utils

import { createNamespace } from '../utils';
import { SWIPE_KEY } from '../swipe/Swipe'; // Composables

import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
var [name, bem] = createNamespace('swipe-item');
export default defineComponent({
  name,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var rendered;
    var state = reactive({
      offset: 0,
      inited: false,
      mounted: false
    });
    var {
      parent,
      index
    } = useParent(SWIPE_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <SwipeItem> must be a child component of <Swipe>.');
      }

      return;
    }

    var style = computed(() => {
      var style = {};
      var {
        vertical
      } = parent.props;

      if (parent.size.value) {
        style[vertical ? 'height' : 'width'] = parent.size.value + "px";
      }

      if (state.offset) {
        style.transform = "translate" + (vertical ? 'Y' : 'X') + "(" + state.offset + "px)";
      }

      return style;
    });
    var shouldRender = computed(() => {
      var {
        loop,
        lazyRender
      } = parent.props;

      if (!lazyRender || rendered) {
        return true;
      } // wait for all item to mount, so we can get the exact count


      if (!state.mounted) {
        return false;
      }

      var active = parent.activeIndicator.value;
      var maxActive = parent.count.value - 1;
      var prevActive = active === 0 && loop ? maxActive : active - 1;
      var nextActive = active === maxActive && loop ? 0 : active + 1;
      rendered = index.value === active || index.value === prevActive || index.value === nextActive;
      return rendered;
    });

    var setOffset = offset => {
      state.offset = offset;
    };

    onMounted(() => {
      nextTick(() => {
        state.mounted = true;
      });
    });
    useExpose({
      setOffset
    });
    return () => _createVNode("div", {
      "class": bem(),
      "style": style.value
    }, [shouldRender.value ? slots.default == null ? void 0 : slots.default() : null]);
  }

});