import { withDirectives as _withDirectives, vShow as _vShow, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, watch, computed, nextTick, reactive, defineComponent } from 'vue'; // Utils

import { extend, isObject, isMobile, truthProp, numericProp, makeArrayProp, makeNumericProp, createNamespace } from '../utils'; // Composables

import { useExpose } from '../composables/use-expose'; // Components

import { Area } from '../area';
import { Cell } from '../cell';
import { Form } from '../form';
import { Field } from '../field';
import { Popup } from '../popup';
import { Toast } from '../toast';
import { Button } from '../button';
import { Switch } from '../switch';
import AddressEditDetail from './AddressEditDetail'; // Types

var [name, bem, t] = createNamespace('address-edit');
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
  showArea: truthProp,
  showDetail: truthProp,
  showDelete: Boolean,
  showPostal: Boolean,
  disableArea: Boolean,
  searchResult: Array,
  telMaxlength: numericProp,
  showSetDefault: Boolean,
  saveButtonText: String,
  areaPlaceholder: String,
  deleteButtonText: String,
  showSearchResult: Boolean,
  detailRows: makeNumericProp(1),
  detailMaxlength: makeNumericProp(200),
  areaColumnsPlaceholder: makeArrayProp(),
  addressInfo: {
    type: Object,
    default: () => extend({}, DEFAULT_DATA)
  },
  telValidator: {
    type: Function,
    default: isMobile
  },
  postalValidator: {
    type: Function,
    default: isPostal
  }
};
export default defineComponent({
  name,
  props: addressEditProps,
  emits: ['save', 'focus', 'delete', 'click-area', 'change-area', 'change-detail', 'select-search', 'change-default'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var areaRef = ref();
    var data = reactive({});
    var showAreaPopup = ref(false);
    var detailFocused = ref(false);
    var areaListLoaded = computed(() => isObject(props.areaList) && Object.keys(props.areaList).length);
    var areaText = computed(() => {
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

    var hideBottomFields = computed(() => {
      var _props$searchResult;

      return ((_props$searchResult = props.searchResult) == null ? void 0 : _props$searchResult.length) && detailFocused.value;
    });

    var assignAreaValues = () => {
      if (areaRef.value) {
        var detail = areaRef.value.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        extend(data, detail);
      }
    };

    var onFocus = key => {
      detailFocused.value = key === 'addressDetail';
      emit('focus', key);
    };

    var rules = computed(() => {
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
        Toast(t('areaEmpty'));
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
        nextTick(assignAreaValues);
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
          'right-icon': () => _createVNode(Switch, {
            "modelValue": data.isDefault,
            "onUpdate:modelValue": $event => data.isDefault = $event,
            "size": "24",
            "onChange": event => emit('change-default', event)
          }, null)
        };
        return _withDirectives(_createVNode(Cell, {
          "center": true,
          "title": t('defaultAddress'),
          "class": bem('default')
        }, _slots), [[_vShow, !hideBottomFields.value]]);
      }
    };

    useExpose({
      getArea,
      setAreaCode,
      setAddressDetail
    });
    watch(() => props.areaList, () => setAreaCode(data.areaCode));
    watch(() => props.addressInfo, value => {
      extend(data, DEFAULT_DATA, value);
      setAreaCode(value.areaCode);
    }, {
      deep: true,
      immediate: true
    });
    return () => {
      var {
        disableArea
      } = props;
      return _createVNode(Form, {
        "class": bem(),
        "onSubmit": onSave
      }, {
        default: () => [_createVNode("div", {
          "class": bem('fields')
        }, [_createVNode(Field, {
          "modelValue": data.name,
          "onUpdate:modelValue": $event => data.name = $event,
          "clearable": true,
          "label": t('name'),
          "rules": rules.value.name,
          "placeholder": t('name'),
          "onFocus": () => onFocus('name')
        }, null), _createVNode(Field, {
          "modelValue": data.tel,
          "onUpdate:modelValue": $event => data.tel = $event,
          "clearable": true,
          "type": "tel",
          "label": t('tel'),
          "rules": rules.value.tel,
          "maxlength": props.telMaxlength,
          "placeholder": t('tel'),
          "onFocus": () => onFocus('tel')
        }, null), _withDirectives(_createVNode(Field, {
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
        }, null), [[_vShow, props.showArea]]), _createVNode(AddressEditDetail, {
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
        }, null), props.showPostal && _withDirectives(_createVNode(Field, {
          "modelValue": data.postalCode,
          "onUpdate:modelValue": $event => data.postalCode = $event,
          "type": "tel",
          "rules": rules.value.postalCode,
          "label": t('postal'),
          "maxlength": "6",
          "placeholder": t('postal'),
          "onFocus": () => onFocus('postalCode')
        }, null), [[_vShow, !hideBottomFields.value]]), slots.default == null ? void 0 : slots.default()]), renderSetDefaultCell(), _withDirectives(_createVNode("div", {
          "class": bem('buttons')
        }, [_createVNode(Button, {
          "block": true,
          "round": true,
          "type": "danger",
          "text": props.saveButtonText || t('save'),
          "class": bem('button'),
          "loading": props.isSaving,
          "nativeType": "submit"
        }, null), props.showDelete && _createVNode(Button, {
          "block": true,
          "round": true,
          "class": bem('button'),
          "loading": props.isDeleting,
          "text": props.deleteButtonText || t('delete'),
          "onClick": onDelete
        }, null)]), [[_vShow, !hideBottomFields.value]]), _createVNode(Popup, {
          "show": showAreaPopup.value,
          "onUpdate:show": $event => showAreaPopup.value = $event,
          "round": true,
          "teleport": "body",
          "position": "bottom",
          "lazyRender": false
        }, {
          default: () => [_createVNode(Area, {
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