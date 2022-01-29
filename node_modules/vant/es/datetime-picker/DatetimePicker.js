import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { ref, defineComponent } from 'vue';
import { pick, extend, createNamespace } from '../utils';
import { useExpose } from '../composables/use-expose';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
var [name, bem] = createNamespace('datetime-picker');
var timePickerPropKeys = Object.keys(TimePicker.props);
var datePickerPropKeys = Object.keys(DatePicker.props);
var datetimePickerProps = extend({}, TimePicker.props, DatePicker.props, {
  modelValue: [String, Date]
});
export default defineComponent({
  name,
  props: datetimePickerProps,

  setup(props, _ref) {
    var {
      attrs,
      slots
    } = _ref;
    var root = ref();
    useExpose({
      getPicker: () => {
        var _root$value;

        return (_root$value = root.value) == null ? void 0 : _root$value.getPicker();
      }
    });
    return () => {
      var isTimePicker = props.type === 'time';
      var Component = isTimePicker ? TimePicker : DatePicker;
      var inheritProps = pick(props, isTimePicker ? timePickerPropKeys : datePickerPropKeys);
      return _createVNode(Component, _mergeProps({
        "ref": root,
        "class": bem()
      }, inheritProps, attrs), slots);
    };
  }

});