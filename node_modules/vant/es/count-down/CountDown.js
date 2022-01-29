import { createVNode as _createVNode } from "vue";
import { watch, computed, defineComponent } from 'vue'; // Utils

import { truthProp, makeStringProp, makeNumericProp, createNamespace } from '../utils';
import { parseFormat } from './utils'; // Composables

import { useCountDown } from '@vant/use';
import { useExpose } from '../composables/use-expose';
var [name, bem] = createNamespace('count-down');
var countDownProps = {
  time: makeNumericProp(0),
  format: makeStringProp('HH:mm:ss'),
  autoStart: truthProp,
  millisecond: Boolean
};
export default defineComponent({
  name,
  props: countDownProps,
  emits: ['change', 'finish'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      start,
      pause,
      reset,
      current
    } = useCountDown({
      time: +props.time,
      millisecond: props.millisecond,
      onChange: current => emit('change', current),
      onFinish: () => emit('finish')
    });
    var timeText = computed(() => parseFormat(props.format, current.value));

    var resetTime = () => {
      reset(+props.time);

      if (props.autoStart) {
        start();
      }
    };

    watch(() => props.time, resetTime, {
      immediate: true
    });
    useExpose({
      start,
      pause,
      reset: resetTime
    });
    return () => _createVNode("div", {
      "role": "timer",
      "class": bem()
    }, [slots.default ? slots.default(current.value) : timeText.value]);
  }

});