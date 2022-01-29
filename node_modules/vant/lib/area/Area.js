"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _deepClone = require("../utils/deep-clone");

var _utils = require("../utils");

var _Picker = require("../picker/Picker");

var _useExpose = require("../composables/use-expose");

var _picker = require("../picker");

// Utils
// Composables
// Components
var [name, bem] = (0, _utils.createNamespace)('area');
var EMPTY_CODE = '000000';
var INHERIT_SLOTS = ['title', 'cancel', 'confirm', 'toolbar', 'columns-top', 'columns-bottom'];
var INHERIT_PROPS = ['title', 'loading', 'readonly', 'itemHeight', 'swipeDuration', 'visibleItemCount', 'cancelButtonText', 'confirmButtonText'];

var isOverseaCode = code => code[0] === '9';

var areaProps = (0, _utils.extend)({}, _Picker.pickerSharedProps, {
  value: String,
  columnsNum: (0, _utils.makeNumericProp)(3),
  columnsPlaceholder: (0, _utils.makeArrayProp)(),
  areaList: {
    type: Object,
    default: () => ({})
  },
  isOverseaCode: {
    type: Function,
    default: isOverseaCode
  }
});

var _default = (0, _vue.defineComponent)({
  name,
  props: areaProps,
  emits: ['change', 'confirm', 'cancel'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var pickerRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      code: props.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    });
    var areaList = (0, _vue.computed)(() => {
      var {
        areaList
      } = props;
      return {
        province: areaList.province_list || {},
        city: areaList.city_list || {},
        county: areaList.county_list || {}
      };
    });
    var placeholderMap = (0, _vue.computed)(() => {
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
        value = (0, _deepClone.deepClone)(value);

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

    (0, _vue.onMounted)(setValues);
    (0, _vue.watch)(() => props.value, value => {
      state.code = value;
      setValues();
    });
    (0, _vue.watch)(() => props.areaList, setValues, {
      deep: true
    });
    (0, _vue.watch)(() => props.columnsNum, () => (0, _vue.nextTick)(setValues));
    (0, _useExpose.useExpose)({
      reset,
      getArea,
      getValues
    });
    return () => {
      var columns = state.columns.slice(0, +props.columnsNum);
      return (0, _vue.createVNode)(_picker.Picker, (0, _vue.mergeProps)({
        "ref": pickerRef,
        "class": bem(),
        "columns": columns,
        "columnsFieldNames": {
          text: 'name'
        },
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, (0, _utils.pick)(props, INHERIT_PROPS)), (0, _utils.pick)(slots, INHERIT_SLOTS));
    };
  }

});

exports.default = _default;