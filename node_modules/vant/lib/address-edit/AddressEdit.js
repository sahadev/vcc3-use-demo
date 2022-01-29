"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _useExpose = require("../composables/use-expose");

var _area = require("../area");

var _cell = require("../cell");

var _form = require("../form");

var _field = require("../field");

var _popup = require("../popup");

var _toast = require("../toast");

var _button = require("../button");

var _switch = require("../switch");

var _AddressEditDetail = _interopRequireDefault(require("./AddressEditDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Composables
// Components
var [name, bem, t] = (0, _utils.createNamespace)('address-edit');
var DEFAULT_DATA = {
  name: '',
  tel: '',
  city: '',
  county: '',
  country: '',
  province: '',
  areaCode: '',
  isDefault: false,
  postalCode: '',
  addressDetail: ''
};

var isPostal = value => /^\d{6}$/.test(value);

var addressEditProps = {
  areaList: Object,
  isSaving: Boolean,
  isDeleting: Boolean,
  validator: Function,
  showArea: _utils.truthProp,
  showDetail: _utils.truthProp,
  showDelete: Boolean,
  showPostal: Boolean,
  disableArea: Boolean,
  searchResult: Array,
  telMaxlength: _utils.numericProp,
  showSetDefault: Boolean,
  saveButtonText: String,
  areaPlaceholder: String,
  deleteButtonText: String,
  showSearchResult: Boolean,
  detailRows: (0, _utils.makeNumericProp)(1),
  detailMaxlength: (0, _utils.makeNumericProp)(200),
  areaColumnsPlaceholder: (0, _utils.makeArrayProp)(),
  addressInfo: {
    type: Object,
    default: () => (0, _utils.extend)({}, DEFAULT_DATA)
  },
  telValidator: {
    type: Function,
    default: _utils.isMobile
  },
  postalValidator: {
    type: Function,
    default: isPostal
  }
};

var _default = (0, _vue.defineComponent)({
  name,
  props: addressEditProps,
  emits: ['save', 'focus', 'delete', 'click-area', 'change-area', 'change-detail', 'select-search', 'change-default'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var areaRef = (0, _vue.ref)();
    var data = (0, _vue.reactive)({});
    var showAreaPopup = (0, _vue.ref)(false);
    var detailFocused = (0, _vue.ref)(false);
    var areaListLoaded = (0, _vue.computed)(() => (0, _utils.isObject)(props.areaList) && Object.keys(props.areaList).length);
    var areaText = (0, _vue.computed)(() => {
      var {
        country,
        province,
        city,
        county,
        areaCode
      } = data;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(Boolean).join('/');
      }

      return '';
    }); // hide bottom field when use search && detail get focused

    var hideBottomFields = (0, _vue.computed)(() => {
      var _props$searchResult;

      return ((_props$searchResult = props.searchResult) == null ? void 0 : _props$searchResult.length) && detailFocused.value;
    });

    var assignAreaValues = () => {
      if (areaRef.value) {
        var detail = areaRef.value.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        (0, _utils.extend)(data, detail);
      }
    };

    var onFocus = key => {
      detailFocused.value = key === 'addressDetail';
      emit('focus', key);
    };

    var rules = (0, _vue.computed)(() => {
      var {
        validator,
        telValidator,
        postalValidator
      } = props;

      var makeRule = (name, emptyMessage) => ({
        validator: value => {
          if (validator) {
            var message = validator(name, value);

            if (message) {
              return message;
            }
          }

          if (!value) {
            return emptyMessage;
          }

          return true;
        }
      });

      return {
        name: [makeRule('name', t('nameEmpty'))],
        tel: [makeRule('tel', t('telInvalid')), {
          validator: telValidator,
          message: t('telInvalid')
        }],
        areaCode: [makeRule('areaCode', t('areaEmpty'))],
        addressDetail: [makeRule('addressDetail', t('addressEmpty'))],
        postalCode: [makeRule('addressDetail', t('postalEmpty')), {
          validator: postalValidator,
          message: t('postalEmpty')
        }]
      };
    });

    var onSave = () => emit('save', data);

    var onChangeDetail = val => {
      data.addressDetail = val;
      emit('change-detail', val);
    };

    var onAreaConfirm = values => {
      values = values.filter(Boolean);

      if (values.some(value => !value.code)) {
        (0, _toast.Toast)(t('areaEmpty'));
      } else {
        showAreaPopup.value = false;
        assignAreaValues();
        emit('change-area', values);
      }
    };

    var onDelete = () => emit('delete', data); // get values of area component


    var getArea = () => {
      var _areaRef$value;

      return ((_areaRef$value = areaRef.value) == null ? void 0 : _areaRef$value.getValues()) || [];
    }; // set area code to area component


    var setAreaCode = code => {
      data.areaCode = code || '';

      if (code) {
        (0, _vue.nextTick)(assignAreaValues);
      }
    };

    var onDetailBlur = () => {
      // await for click search event
      setTimeout(() => {
        detailFocused.value = false;
      });
    };

    var setAddressDetail = value => {
      data.addressDetail = value;
    };

    var renderSetDefaultCell = () => {
      if (props.showSetDefault) {
        var _slots = {
          'right-icon': () => (0, _vue.createVNode)(_switch.Switch, {
            "modelValue": data.isDefault,
            "onUpdate:modelValue": $event => data.isDefault = $event,
            "size": "24",
            "onChange": event => emit('change-default', event)
          }, null)
        };
        return (0, _vue.withDirectives)((0, _vue.createVNode)(_cell.Cell, {
          "center": true,
          "title": t('defaultAddress'),
          "class": bem('default')
        }, _slots), [[_vue.vShow, !hideBottomFields.value]]);
      }
    };

    (0, _useExpose.useExpose)({
      getArea,
      setAreaCode,
      setAddressDetail
    });
    (0, _vue.watch)(() => props.areaList, () => setAreaCode(data.areaCode));
    (0, _vue.watch)(() => props.addressInfo, value => {
      (0, _utils.extend)(data, DEFAULT_DATA, value);
      setAreaCode(value.areaCode);
    }, {
      deep: true,
      immediate: true
    });
    return () => {
      var {
        disableArea
      } = props;
      return (0, _vue.createVNode)(_form.Form, {
        "class": bem(),
        "onSubmit": onSave
      }, {
        default: () => [(0, _vue.createVNode)("div", {
          "class": bem('fields')
        }, [(0, _vue.createVNode)(_field.Field, {
          "modelValue": data.name,
          "onUpdate:modelValue": $event => data.name = $event,
          "clearable": true,
          "label": t('name'),
          "rules": rules.value.name,
          "placeholder": t('name'),
          "onFocus": () => onFocus('name')
        }, null), (0, _vue.createVNode)(_field.Field, {
          "modelValue": data.tel,
          "onUpdate:modelValue": $event => data.tel = $event,
          "clearable": true,
          "type": "tel",
          "label": t('tel'),
          "rules": rules.value.tel,
          "maxlength": props.telMaxlength,
          "placeholder": t('tel'),
          "onFocus": () => onFocus('tel')
        }, null), (0, _vue.withDirectives)((0, _vue.createVNode)(_field.Field, {
          "readonly": true,
          "label": t('area'),
          "is-link": !disableArea,
          "modelValue": areaText.value,
          "rules": rules.value.areaCode,
          "placeholder": props.areaPlaceholder || t('area'),
          "onFocus": () => onFocus('areaCode'),
          "onClick": () => {
            emit('click-area');
            showAreaPopup.value = !disableArea;
          }
        }, null), [[_vue.vShow, props.showArea]]), (0, _vue.createVNode)(_AddressEditDetail.default, {
          "show": props.showDetail,
          "rows": props.detailRows,
          "rules": rules.value.addressDetail,
          "value": data.addressDetail,
          "focused": detailFocused.value,
          "maxlength": props.detailMaxlength,
          "searchResult": props.searchResult,
          "showSearchResult": props.showSearchResult,
          "onBlur": onDetailBlur,
          "onFocus": () => onFocus('addressDetail'),
          "onInput": onChangeDetail,
          "onSelect-search": event => emit('select-search', event)
        }, null), props.showPostal && (0, _vue.withDirectives)((0, _vue.createVNode)(_field.Field, {
          "modelValue": data.postalCode,
          "onUpdate:modelValue": $event => data.postalCode = $event,
          "type": "tel",
          "rules": rules.value.postalCode,
          "label": t('postal'),
          "maxlength": "6",
          "placeholder": t('postal'),
          "onFocus": () => onFocus('postalCode')
        }, null), [[_vue.vShow, !hideBottomFields.value]]), slots.default == null ? void 0 : slots.default()]), renderSetDefaultCell(), (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
          "class": bem('buttons')
        }, [(0, _vue.createVNode)(_button.Button, {
          "block": true,
          "round": true,
          "type": "danger",
          "text": props.saveButtonText || t('save'),
          "class": bem('button'),
          "loading": props.isSaving,
          "nativeType": "submit"
        }, null), props.showDelete && (0, _vue.createVNode)(_button.Button, {
          "block": true,
          "round": true,
          "class": bem('button'),
          "loading": props.isDeleting,
          "text": props.deleteButtonText || t('delete'),
          "onClick": onDelete
        }, null)]), [[_vue.vShow, !hideBottomFields.value]]), (0, _vue.createVNode)(_popup.Popup, {
          "show": showAreaPopup.value,
          "onUpdate:show": $event => showAreaPopup.value = $event,
          "round": true,
          "teleport": "body",
          "position": "bottom",
          "lazyRender": false
        }, {
          default: () => [(0, _vue.createVNode)(_area.Area, {
            "ref": areaRef,
            "value": data.areaCode,
            "loading": !areaListLoaded.value,
            "areaList": props.areaList,
            "columnsPlaceholder": props.areaColumnsPlaceholder,
            "onConfirm": onAreaConfirm,
            "onCancel": () => {
              showAreaPopup.value = false;
            }
          }, null)]
        })]
      });
    };
  }

});

exports.default = _default;