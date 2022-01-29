import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, watch, reactive, nextTick, defineComponent } from 'vue'; // Utils

import { numericProp, getScrollTop, preventDefault, createNamespace, makeNumericProp } from '../utils'; // Composables

import { useScrollParent } from '@vant/use';
import { useTouch } from '../composables/use-touch'; // Components

import { Loading } from '../loading';
var [name, bem, t] = createNamespace('pull-refresh');
var DEFAULT_HEAD_HEIGHT = 50;
var TEXT_STATUS = ['pulling', 'loosing', 'success'];
var pullRefreshProps = {
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: makeNumericProp(DEFAULT_HEAD_HEIGHT),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: numericProp,
  successDuration: makeNumericProp(500),
  animationDuration: makeNumericProp(300)
};
export default defineComponent({
  name,
  props: pullRefreshProps,
  emits: ['refresh', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var reachTop;
    var root = ref();
    var scrollParent = useScrollParent(root);
    var state = reactive({
      status: 'normal',
      distance: 0,
      duration: 0
    });
    var touch = useTouch();

    var getHeadStyle = () => {
      if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
        return {
          height: props.headHeight + "px"
        };
      }
    };

    var isTouchable = () => state.status !== 'loading' && state.status !== 'success' && !props.disabled;

    var ease = distance => {
      var pullDistance = +(props.pullDistance || props.headHeight);

      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2;
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
        }
      }

      return Math.round(distance);
    };

    var setStatus = (distance, isLoading) => {
      var pullDistance = +(props.pullDistance || props.headHeight);
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (distance === 0) {
        state.status = 'normal';
      } else if (distance < pullDistance) {
        state.status = 'pulling';
      } else {
        state.status = 'loosing';
      }
    };

    var getStatusText = () => {
      var {
        status
      } = state;

      if (status === 'normal') {
        return '';
      }

      return props[status + "Text"] || t(status);
    };

    var renderStatus = () => {
      var {
        status,
        distance
      } = state;

      if (slots[status]) {
        return slots[status]({
          distance
        });
      }

      var nodes = [];

      if (TEXT_STATUS.includes(status)) {
        nodes.push(_createVNode("div", {
          "class": bem('text')
        }, [getStatusText()]));
      }

      if (status === 'loading') {
        nodes.push(_createVNode(Loading, {
          "class": bem('loading')
        }, {
          default: getStatusText
        }));
      }

      return nodes;
    };

    var showSuccessTip = () => {
      state.status = 'success';
      setTimeout(() => {
        setStatus(0);
      }, +props.successDuration);
    };

    var checkPosition = event => {
      reachTop = getScrollTop(scrollParent.value) === 0;

      if (reachTop) {
        state.duration = 0;
        touch.start(event);
      }
    };

    var onTouchStart = event => {
      if (isTouchable()) {
        checkPosition(event);
      }
    };

    var onTouchMove = event => {
      if (isTouchable()) {
        if (!reachTop) {
          checkPosition(event);
        }

        var {
          deltaY
        } = touch;
        touch.move(event);

        if (reachTop && deltaY.value >= 0 && touch.isVertical()) {
          preventDefault(event);
          setStatus(ease(deltaY.value));
        }
      }
    };

    var onTouchEnd = () => {
      if (reachTop && touch.deltaY.value && isTouchable()) {
        state.duration = +props.animationDuration;

        if (state.status === 'loosing') {
          setStatus(+props.headHeight, true);
          emit('update:modelValue', true); // ensure value change can be watched

          nextTick(() => emit('refresh'));
        } else {
          setStatus(0);
        }
      }
    };

    watch(() => props.modelValue, value => {
      state.duration = +props.animationDuration;

      if (value) {
        setStatus(+props.headHeight, true);
      } else if (slots.success || props.successText) {
        showSuccessTip();
      } else {
        setStatus(0, false);
      }
    });
    return () => {
      var trackStyle = {
        transitionDuration: state.duration + "ms",
        transform: state.distance ? "translate3d(0," + state.distance + "px, 0)" : ''
      };
      return _createVNode("div", {
        "ref": root,
        "class": bem()
      }, [_createVNode("div", {
        "class": bem('track'),
        "style": trackStyle,
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [_createVNode("div", {
        "class": bem('head'),
        "style": getHeadStyle()
      }, [renderStatus()]), slots.default == null ? void 0 : slots.default()])]);
    };
  }

});