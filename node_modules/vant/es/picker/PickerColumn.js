import { createVNode as _createVNode } from "vue";
import { ref, watch, reactive, defineComponent } from 'vue'; // Utils

import { deepClone } from '../utils/deep-clone';
import { clamp, isObject, unknownProp, numericProp, makeArrayProp, makeNumberProp, preventDefault, createNamespace, makeRequiredProp } from '../utils'; // Composables

import { useParent } from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose'; // Types

var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动

var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;
var [name, bem] = createNamespace('picker-column');

function getElementTranslateY(element) {
  var {
    transform
  } = window.getComputedStyle(element);
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

export var PICKER_KEY = Symbol(name);

var isOptionDisabled = option => isObject(option) && option.disabled;

export default defineComponent({
  name,
  props: {
    textKey: makeRequiredProp(String),
    readonly: Boolean,
    allowHtml: Boolean,
    className: unknownProp,
    itemHeight: makeRequiredProp(Number),
    defaultIndex: makeNumberProp(0),
    swipeDuration: makeRequiredProp(numericProp),
    initialOptions: makeArrayProp(),
    visibleItemCount: makeRequiredProp(numericProp)
  },
  emits: ['change'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var moving;
    var startOffset;
    var touchStartTime;
    var momentumOffset;
    var transitionEndTrigger;
    var wrapper = ref();
    var state = reactive({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: deepClone(props.initialOptions)
    });
    var touch = useTouch();

    var count = () => state.options.length;

    var baseOffset = () => props.itemHeight * (+props.visibleItemCount - 1) / 2;

    var adjustIndex = index => {
      index = clamp(index, 0, count());

      for (var i = index; i < count(); i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(state.options[_i])) return _i;
      }
    };

    var setIndex = (index, emitChange) => {
      index = adjustIndex(index) || 0;
      var offset = -index * props.itemHeight;

      var trigger = () => {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            emit('change', index);
          }
        }
      }; // trigger the change event after transitionend when moving


      if (moving && offset !== state.offset) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };

    var setOptions = options => {
      if (JSON.stringify(options) !== JSON.stringify(state.options)) {
        state.options = deepClone(options);
        setIndex(props.defaultIndex);
      }
    };

    var onClickItem = index => {
      if (moving || props.readonly) {
        return;
      }

      transitionEndTrigger = null;
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
    };

    var getOptionText = option => {
      if (isObject(option) && props.textKey in option) {
        return option[props.textKey];
      }

      return option;
    };

    var getIndexByOffset = offset => clamp(Math.round(-offset / props.itemHeight), 0, count() - 1);

    var momentum = (distance, duration) => {
      var speed = Math.abs(distance / duration);
      distance = state.offset + speed / 0.003 * (distance < 0 ? -1 : 1);
      var index = getIndexByOffset(distance);
      state.duration = +props.swipeDuration;
      setIndex(index, true);
    };

    var stopMomentum = () => {
      moving = false;
      state.duration = 0;

      if (transitionEndTrigger) {
        transitionEndTrigger();
        transitionEndTrigger = null;
      }
    };

    var onTouchStart = event => {
      if (props.readonly) {
        return;
      }

      touch.start(event);

      if (moving) {
        var translateY = getElementTranslateY(wrapper.value);
        state.offset = Math.min(0, translateY - baseOffset());
        startOffset = state.offset;
      } else {
        startOffset = state.offset;
      }

      state.duration = 0;
      touchStartTime = Date.now();
      momentumOffset = startOffset;
      transitionEndTrigger = null;
    };

    var onTouchMove = event => {
      if (props.readonly) {
        return;
      }

      touch.move(event);

      if (touch.isVertical()) {
        moving = true;
        preventDefault(event, true);
      }

      state.offset = clamp(startOffset + touch.deltaY.value, -(count() * props.itemHeight), props.itemHeight);
      var now = Date.now();

      if (now - touchStartTime > MOMENTUM_LIMIT_TIME) {
        touchStartTime = now;
        momentumOffset = state.offset;
      }
    };

    var onTouchEnd = () => {
      if (props.readonly) {
        return;
      }

      var distance = state.offset - momentumOffset;
      var duration = Date.now() - touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }

      var index = getIndexByOffset(state.offset);
      state.duration = DEFAULT_DURATION;
      setIndex(index, true); // compatible with desktop scenario
      // use setTimeout to skip the click event Emitted after touchstart

      setTimeout(() => {
        moving = false;
      }, 0);
    };

    var renderOptions = () => {
      var optionStyle = {
        height: props.itemHeight + "px"
      };
      return state.options.map((option, index) => {
        var text = getOptionText(option);
        var disabled = isOptionDisabled(option);
        var data = {
          role: 'button',
          style: optionStyle,
          tabindex: disabled ? -1 : 0,
          class: bem('item', {
            disabled,
            selected: index === state.index
          }),
          onClick: () => onClickItem(index)
        };
        var childData = {
          class: 'van-ellipsis',
          [props.allowHtml ? 'innerHTML' : 'textContent']: text
        };
        return _createVNode("li", data, [slots.option ? slots.option(option) : _createVNode("div", childData, null)]);
      });
    };

    var setValue = value => {
      var {
        options
      } = state;

      for (var i = 0; i < options.length; i++) {
        if (getOptionText(options[i]) === value) {
          return setIndex(i);
        }
      }
    };

    var getValue = () => state.options[state.index];

    setIndex(state.index);
    useParent(PICKER_KEY);
    useExpose({
      state,
      setIndex,
      getValue,
      setValue,
      setOptions,
      stopMomentum
    });
    watch(() => props.initialOptions, setOptions);
    watch(() => props.defaultIndex, value => setIndex(value));
    return () => _createVNode("div", {
      "class": [bem(), props.className],
      "onTouchstart": onTouchStart,
      "onTouchmove": onTouchMove,
      "onTouchend": onTouchEnd,
      "onTouchcancel": onTouchEnd
    }, [_createVNode("ul", {
      "ref": wrapper,
      "style": {
        transform: "translate3d(0, " + (state.offset + baseOffset()) + "px, 0)",
        transitionDuration: state.duration + "ms",
        transitionProperty: state.duration ? 'all' : 'none'
      },
      "class": bem('wrapper'),
      "onTransitionend": stopMomentum
    }, [renderOptions()])]);
  }

});