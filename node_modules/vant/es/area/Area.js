import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { ref, watch, computed, reactive, nextTick, onMounted, defineComponent } from 'vue'; // Utils

import { deepClone } from '../utils/deep-clone';
import { pick, extend, makeArrayProp, makeNumericProp, createNamespace } from '../utils';
import { pickerSharedProps } from '../picker/Picker'; // Composables

import { useExpose } from '../composables/use-expose'; // Components

import { Picker } from '../picker'; // Types

var [name, bem] = createNamespace('area');
var EMPTY_CODE = '000000';
var INHERIT_SLOTS = ['title', 'cancel', 'confirm', 'toolbar', 'columns-top', 'columns-bottom'];
var INHERIT_PROPS = ['title', 'loading', 'readonly', 'itemHeight', 'swipeDuration', 'visibleItemCount', 'cancelButtonText', 'confirmButtonText'];

var isOverseaCode = code => code[0] === '9';

var areaProps = extend({}, pickerSharedProps, {
  value: String,
  columnsNum: makeNumericProp(3),
  columnsPlaceholder: makeArrayProp(),
  areaList: {
    type: Object,
    default: () => ({})
  },
  isOverseaCode: {
    type: Function,
    default: isOverseaCode
  }
});
export default defineComponent({
  name,
  props: areaProps,
  emits: ['change', 'confirm', 'cancel'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var pickerRef = ref();
    var state = reactive({
      code: props.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    });
    var areaList = computed(() => {
      var {
        areaList
      } = props;
      return {
        province: areaList.province_list || {},
        city: areaList.city_list || {},
        county: areaList.county_list || {}
      };
    });
    var placeholderMap = computed(() => {
      var {
        columnsPlaceholder
      } = props;
      return {
        province: columnsPlaceholder[0] || '',
        city: columnsPlaceholder[1] || '',
        county: columnsPlaceholder[2] || ''
      };
    });

    var getDefaultCode = () => {
      if (props.columnsPlaceholder.length) {
        return EMPTY_CODE;
      }

      var {
        county,
        city
      } = areaList.value;
      var countyCodes = Object.keys(county);

      if (countyCodes[0]) {
        return countyCodes[0];
      }

      var cityCodes = Object.keys(city);

      if (cityCodes[0]) {
        return cityCodes[0];
      }

      return '';
    };

    var getColumnValues = (type, code) => {
      var column = [];

      if (type !== 'province' && !code) {
        return column;
      }

      var list = areaList.value[type];
      column = Object.keys(list).map(listCode => ({
        code: listCode,
        name: list[listCode]
      }));

      if (code) {
        // oversea code
        if (type === 'city' && props.isOverseaCode(code)) {
          code = '9';
        }

        column = column.filter(item => item.code.indexOf(code) === 0);
      }

      if (placeholderMap.value[type] && column.length) {
        // set columns placeholder
        var codeFill = '';

        if (type === 'city') {
          codeFill = EMPTY_CODE.slice(2, 4);
        } else if (type === 'county') {
          codeFill = EMPTY_CODE.slice(4, 6);
        }

        column.unshift({
          code: code + codeFill,
          name: placeholderMap.value[type]
        });
      }

      return column;
    }; // get index by code


    var getIndex = (type, code) => {
      var compareNum = code.length;

      if (type === 'province') {
        compareNum = props.isOverseaCode(code) ? 1 : 2;
      }

      if (type === 'city') {
        compareNum = 4;
      }

      code = code.slice(0, compareNum);
      var list = getColumnValues(type, compareNum > 2 ? code.slice(0, compareNum - 2) : '');

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    };

    var setValues = () => {
      var code = state.code || getDefaultCode();
      var picker = pickerRef.value;
      var province = getColumnValues('province');
      var city = getColumnValues('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !props.isOverseaCode(code)) {
        [{
          code
        }] = city;
      }

      picker.setColumnValues(2, getColumnValues('county', code.slice(0, 4)));
      picker.setIndexes([getIndex('province', code), getIndex('city', code), getIndex('county', code)]);
    }; // parse output columns data


    var parseValues = values => values.map((value, index) => {
      if (value) {
        value = deepClone(value);

        if (!value.code || value.name === props.columnsPlaceholder[index]) {
          value.code = '';
          value.name = '';
        }
      }

      return value;
    });

    var getValues = () => {
      if (pickerRef.value) {
        var values = pickerRef.value.getValues().filter(Boolean);
        return parseValues(values);
      }

      return [];
    };

    var getArea = () => {
      var values = getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(item => item.name);
      var validValues = values.filter(value => value.code);
      area.code = validValues.length ? validValues[validValues.length - 1].code : '';

      if (props.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    };

    var reset = function (newCode) {
      if (newCode === void 0) {
        newCode = '';
      }

      state.code = newCode;
      setValues();
    };

    var onChange = (values, index) => {
      state.code = values[index].code;
      setValues();

      if (pickerRef.value) {
        var parsedValues = parseValues(pickerRef.value.getValues());
        emit('change', parsedValues, index);
      }
    };

    var onConfirm = (values, index) => {
      setValues();
      emit('confirm', parseValues(values), index);
    };

    var onCancel = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return emit('cancel', ...args);
    };

    onMounted(setValues);
    watch(() => props.value, value => {
      state.code = value;
      setValues();
    });
    watch(() => props.areaList, setValues, {
      deep: true
    });
    watch(() => props.columnsNum, () => nextTick(setValues));
    useExpose({
      reset,
      getArea,
      getValues
    });
    return () => {
      var columns = state.columns.slice(0, +props.columnsNum);
      return _createVNode(Picker, _mergeProps({
        "ref": pickerRef,
        "class": bem(),
        "columns": columns,
        "columnsFieldNames": {
          text: 'name'
        },
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, pick(props, INHERIT_PROPS)), pick(slots, INHERIT_SLOTS));
    };
  }

});