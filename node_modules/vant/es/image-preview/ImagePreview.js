import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
import { ref, watch, nextTick, reactive, onMounted, defineComponent } from 'vue'; // Utils

import { pick, truthProp, unknownProp, windowWidth, windowHeight, makeArrayProp, makeStringProp, makeNumericProp, callInterceptor, createNamespace, HAPTICS_FEEDBACK } from '../utils'; // Composables

import { useRect } from '@vant/use';
import { useExpose } from '../composables/use-expose'; // Components

import { Icon } from '../icon';
import { Swipe } from '../swipe';
import { Popup } from '../popup';
import ImagePreviewItem from './ImagePreviewItem'; // Types

var [name, bem] = createNamespace('image-preview');
var popupProps = ['show', 'transition', 'overlayStyle', 'closeOnPopstate'];
var imagePreviewProps = {
  show: Boolean,
  loop: truthProp,
  images: makeArrayProp(),
  minZoom: makeNumericProp(1 / 3),
  maxZoom: makeNumericProp(3),
  overlay: truthProp,
  closeable: Boolean,
  showIndex: truthProp,
  className: unknownProp,
  closeIcon: makeStringProp('clear'),
  transition: String,
  beforeClose: Function,
  overlayStyle: Object,
  swipeDuration: makeNumericProp(300),
  startPosition: makeNumericProp(0),
  showIndicators: Boolean,
  closeOnPopstate: truthProp,
  closeIconPosition: makeStringProp('top-right')
};
export default defineComponent({
  name,
  props: imagePreviewProps,
  emits: ['scale', 'close', 'closed', 'change', 'update:show'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var swipeRef = ref();
    var state = reactive({
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    });

    var resize = () => {
      if (swipeRef.value) {
        var rect = useRect(swipeRef.value.$el);
        state.rootWidth = rect.width;
        state.rootHeight = rect.height;
        swipeRef.value.resize();
      }
    };

    var emitScale = args => emit('scale', args);

    var updateShow = show => emit('update:show', show);

    var emitClose = () => {
      callInterceptor(props.beforeClose, {
        args: [state.active],
        done: () => updateShow(false)
      });
    };

    var setActive = active => {
      if (active !== state.active) {
        state.active = active;
        emit('change', active);
      }
    };

    var renderIndex = () => {
      if (props.showIndex) {
        return _createVNode("div", {
          "class": bem('index')
        }, [slots.index ? slots.index({
          index: state.active
        }) : state.active + 1 + " / " + props.images.length]);
      }
    };

    var renderCover = () => {
      if (slots.cover) {
        return _createVNode("div", {
          "class": bem('cover')
        }, [slots.cover()]);
      }
    };

    var renderImages = () => _createVNode(Swipe, {
      "ref": swipeRef,
      "lazyRender": true,
      "loop": props.loop,
      "class": bem('swipe'),
      "duration": props.swipeDuration,
      "initialSwipe": props.startPosition,
      "showIndicators": props.showIndicators,
      "indicatorColor": "white",
      "onChange": setActive
    }, {
      default: () => [props.images.map(image => _createVNode(ImagePreviewItem, {
        "src": image,
        "show": props.show,
        "active": state.active,
        "maxZoom": props.maxZoom,
        "minZoom": props.minZoom,
        "rootWidth": state.rootWidth,
        "rootHeight": state.rootHeight,
        "onScale": emitScale,
        "onClose": emitClose
      }, null))]
    });

    var renderClose = () => {
      if (props.closeable) {
        return _createVNode(Icon, {
          "role": "button",
          "name": props.closeIcon,
          "class": [bem('close-icon', props.closeIconPosition), HAPTICS_FEEDBACK],
          "onClick": emitClose
        }, null);
      }
    };

    var onClosed = () => emit('closed');

    var swipeTo = (index, options) => {
      var _swipeRef$value;

      return (_swipeRef$value = swipeRef.value) == null ? void 0 : _swipeRef$value.swipeTo(index, options);
    };

    useExpose({
      swipeTo
    });
    onMounted(resize);
    watch([windowWidth, windowHeight], resize);
    watch(() => props.startPosition, value => setActive(+value));
    watch(() => props.show, value => {
      var {
        images,
        startPosition
      } = props;

      if (value) {
        setActive(+startPosition);
        nextTick(() => {
          resize();
          swipeTo(+startPosition, {
            immediate: true
          });
        });
      } else {
        emit('close', {
          index: state.active,
          url: images[state.active]
        });
      }
    });
    return () => _createVNode(Popup, _mergeProps({
      "class": [bem(), props.className],
      "overlayClass": bem('overlay'),
      "onClosed": onClosed,
      "onUpdate:show": updateShow
    }, pick(props, popupProps)), {
      default: () => [renderClose(), renderImages(), renderIndex(), renderCover()]
    });
  }

});