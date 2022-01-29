import { Fragment as _Fragment, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, defineComponent } from 'vue'; // Utils

import { createNamespace, numericProp } from '../utils'; // Components

import { Cell } from '../cell';
import { Field } from '../field'; // Types

var [name, bem, t] = createNamespace('address-edit-detail');
export default defineComponent({
  name,
  props: {
    show: Boolean,
    rows: numericProp,
    value: String,
    rules: Array,
    focused: Boolean,
    maxlength: numericProp,
    searchResult: Array,
    showSearchResult: Boolean
  },
  emits: ['blur', 'focus', 'input', 'select-search'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var field = ref();

    var showSearchResult = () => props.focused && props.searchResult && props.showSearchResult;

    var onSelect = express => {
      emit('select-search', express);
      emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    };

    var renderSearchTitle = express => {
      if (express.name) {
        var text = express.name.replace(props.value, "<span class=" + bem('keyword') + ">" + props.value + "</span>");
        return _createVNode("div", {
          "innerHTML": text
        }, null);
      }
    };

    var renderSearchResult = () => {
      if (!showSearchResult()) {
        return;
      }

      var {
        searchResult
      } = props;
      return searchResult.map(express => _createVNode(Cell, {
        "clickable": true,
        "key": express.name + express.address,
        "icon": "location-o",
        "label": express.address,
        "class": bem('search-item'),
        "border": false,
        "onClick": () => onSelect(express)
      }, {
        title: () => renderSearchTitle(express)
      }));
    };

    var onBlur = event => emit('blur', event);

    var onFocus = event => emit('focus', event);

    var onInput = value => emit('input', value);

    return () => {
      if (props.show) {
        return _createVNode(_Fragment, null, [_createVNode(Field, {
          "autosize": true,
          "clearable": true,
          "ref": field,
          "class": bem(),
          "rows": props.rows,
          "type": "textarea",
          "rules": props.rules,
          "label": t('label'),
          "border": !showSearchResult(),
          "maxlength": props.maxlength,
          "modelValue": props.value,
          "placeholder": t('placeholder'),
          "onBlur": onBlur,
          "onFocus": onFocus,
          "onUpdate:modelValue": onInput
        }, null), renderSearchResult()]);
      }
    };
  }

});