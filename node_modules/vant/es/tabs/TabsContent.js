import { createVNode as _createVNode } from "vue";
import { ref, watch, onMounted, defineComponent } from 'vue';
import { numericProp, makeRequiredProp, createNamespace } from '../utils';
import { Swipe } from '../swipe';
var [name, bem] = createNamespace('tabs');
export default defineComponent({
  name,
  props: {
    count: makeRequiredProp(Number),
    inited: Boolean,
    animated: Boolean,
    duration: makeRequiredProp(numericProp),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: makeRequiredProp(Number)
  },
  emits: ['change'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var swipeRef = ref();

    var onChange = index => emit('change', index);

    var renderChildren = () => {
      var Content = slots.default == null ? void 0 : slots.default();

      if (props.animated || props.swipeable) {
        return _createVNode(Swipe, {
          "ref": swipeRef,
          "loop": false,
          "class": bem('track'),
          "duration": +props.duration * 1000,
          "touchable": props.swipeable,
          "lazyRender": props.lazyRender,
          "showIndicators": false,
          "onChange": onChange
        }, {
          default: () => [Content]
        });
      }

      return Content;
    };

    var swipeToCurrentTab = index => {
      var swipe = swipeRef.value;

      if (swipe && swipe.state.active !== index) {
        swipe.swipeTo(index, {
          immediate: !props.inited
        });
      }
    };

    watch(() => props.currentIndex, swipeToCurrentTab);
    onMounted(() => {
      swipeToCurrentTab(props.currentIndex);
    });
    return () => _createVNode("div", {
      "class": bem('content', {
        animated: props.animated || props.swipeable
      })
    }, [renderChildren()]);
  }

});