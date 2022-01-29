import { createVNode as _createVNode } from "vue";
import { ref, computed, defineComponent } from 'vue'; // Utils

import { clamp, addUnit, addNumber, numericProp, getSizeStyle, preventDefault, stopPropagation, createNamespace, makeNumericProp } from '../utils'; // Composables

import { useRect, useCustomFieldValue } from '@vant/use';
import { useTouch } from '../composables/use-touch';
var [name, bem] = createNamespace('slider');
var sliderProps = {
  min: makeNumericProp(0),
  max: makeNumericProp(100),
  step: makeNumericProp(1),
  range: Boolean,
  reverse: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  vertical: Boolean,
  barHeight: numericProp,
  buttonSize: numericProp,
  activeColor: String,
  inactiveColor: String,
  modelValue: {
    type: [Number, Array],
    default: 0
  }
};
export default defineComponent({
  name,
  props: sliderProps,
  emits: ['change', 'drag-end', 'drag-start', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var buttonIndex;
    var current;
    var startValue;
    var root = ref();
    var dragStatus = ref();
    var touch = useTouch();
    var scope = computed(() => Number(props.max) - Number(props.min));
    var wrapperStyle = computed(() => {
      var crossAxis = props.vertical ? 'width' : 'height';
      return {
        background: props.inactiveColor,
        [crossAxis]: addUnit(props.barHeight)
      };
    });

    var isRange = val => props.range && Array.isArray(val); // 计算选中条的长度百分比


    var calcMainAxis = () => {
      var {
        modelValue,
        min
      } = props;

      if (isRange(modelValue)) {
        return (modelValue[1] - modelValue[0]) * 100 / scope.value + "%";
      }

      return (modelValue - Number(min)) * 100 / scope.value + "%";
    }; // 计算选中条的开始位置的偏移量


    var calcOffset = () => {
      var {
        modelValue,
        min
      } = props;

      if (isRange(modelValue)) {
        return (modelValue[0] - Number(min)) * 100 / scope.value + "%";
      }

      return '0%';
    };

    var barStyle = computed(() => {
      var mainAxis = props.vertical ? 'height' : 'width';
      var style = {
        [mainAxis]: calcMainAxis(),
        background: props.activeColor
      };

      if (dragStatus.value) {
        style.transition = 'none';
      }

      var getPositionKey = () => {
        if (props.vertical) {
          return props.reverse ? 'bottom' : 'top';
        }

        return props.reverse ? 'right' : 'left';
      };

      style[getPositionKey()] = calcOffset();
      return style;
    });

    var format = value => {
      var min = +props.min;
      var max = +props.max;
      var step = +props.step;
      value = clamp(value, min, max);
      var diff = Math.round((value - min) / step) * step;
      return addNumber(min, diff);
    };

    var isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);

    var handleRangeValue = value => {
      var _value$, _value$2;

      // 设置默认值
      var left = (_value$ = value[0]) != null ? _value$ : Number(props.min);
      var right = (_value$2 = value[1]) != null ? _value$2 : Number(props.max); // 处理两个滑块重叠之后的情况

      return left > right ? [right, left] : [left, right];
    };

    var updateValue = (value, end) => {
      if (isRange(value)) {
        value = handleRangeValue(value).map(format);
      } else {
        value = format(value);
      }

      if (!isSameValue(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      if (end && !isSameValue(value, startValue)) {
        emit('change', value);
      }
    };

    var onClick = event => {
      event.stopPropagation();

      if (props.disabled || props.readonly) {
        return;
      }

      var {
        min,
        reverse,
        vertical,
        modelValue
      } = props;
      var rect = useRect(root);

      var getDelta = () => {
        if (vertical) {
          if (reverse) {
            return rect.bottom - event.clientY;
          }

          return event.clientY - rect.top;
        }

        if (reverse) {
          return rect.right - event.clientX;
        }

        return event.clientX - rect.left;
      };

      var total = vertical ? rect.height : rect.width;
      var value = Number(min) + getDelta() / total * scope.value;

      if (isRange(modelValue)) {
        var [left, right] = modelValue;
        var middle = (left + right) / 2;

        if (value <= middle) {
          updateValue([value, right], true);
        } else {
          updateValue([left, value], true);
        }
      } else {
        updateValue(value, true);
      }
    };

    var onTouchStart = event => {
      if (props.disabled || props.readonly) {
        return;
      }

      touch.start(event);
      current = props.modelValue;

      if (isRange(current)) {
        startValue = current.map(format);
      } else {
        startValue = format(current);
      }

      dragStatus.value = 'start';
    };

    var onTouchMove = event => {
      if (props.disabled || props.readonly) {
        return;
      }

      if (dragStatus.value === 'start') {
        emit('drag-start', event);
      }

      preventDefault(event, true);
      touch.move(event);
      dragStatus.value = 'dragging';
      var rect = useRect(root);
      var delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
      var total = props.vertical ? rect.height : rect.width;
      var diff = delta / total * scope.value;

      if (props.reverse) {
        diff = -diff;
      }

      if (isRange(startValue)) {
        var index = props.reverse ? 1 - buttonIndex : buttonIndex;
        current[index] = startValue[index] + diff;
      } else {
        current = startValue + diff;
      }

      updateValue(current);
    };

    var onTouchEnd = event => {
      if (props.disabled || props.readonly) {
        return;
      }

      if (dragStatus.value === 'dragging') {
        updateValue(current, true);
        emit('drag-end', event);
      }

      dragStatus.value = '';
    };

    var getButtonClassName = index => {
      if (typeof index === 'number') {
        var position = ['left', 'right'];
        return bem("button-wrapper", position[index]);
      }

      return bem('button-wrapper', props.reverse ? 'left' : 'right');
    };

    var renderButtonContent = (value, index) => {
      if (typeof index === 'number') {
        var slot = slots[index === 0 ? 'left-button' : 'right-button'];

        if (slot) {
          return slot({
            value
          });
        }
      }

      if (slots.button) {
        return slots.button({
          value
        });
      }

      return _createVNode("div", {
        "class": bem('button'),
        "style": getSizeStyle(props.buttonSize)
      }, null);
    };

    var renderButton = index => {
      var current = typeof index === 'number' ? props.modelValue[index] : props.modelValue;
      return _createVNode("div", {
        "role": "slider",
        "class": getButtonClassName(index),
        "tabindex": props.disabled ? undefined : 0,
        "aria-valuemin": props.min,
        "aria-valuenow": current,
        "aria-valuemax": props.max,
        "aria-disabled": props.disabled || undefined,
        "aria-readonly": props.readonly || undefined,
        "aria-orientation": props.vertical ? 'vertical' : 'horizontal',
        "onTouchstart": event => {
          if (typeof index === 'number') {
            // save index of current button
            buttonIndex = index;
          }

          onTouchStart(event);
        },
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd,
        "onClick": stopPropagation
      }, [renderButtonContent(current, index)]);
    }; // format initial value


    updateValue(props.modelValue);
    useCustomFieldValue(() => props.modelValue);
    return () => _createVNode("div", {
      "ref": root,
      "style": wrapperStyle.value,
      "class": bem({
        vertical: props.vertical,
        disabled: props.disabled
      }),
      "onClick": onClick
    }, [_createVNode("div", {
      "class": bem('bar'),
      "style": barStyle.value
    }, [props.range ? [renderButton(0), renderButton(1)] : renderButton()])]);
  }

});