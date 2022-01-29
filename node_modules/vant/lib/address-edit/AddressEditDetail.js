"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _cell = require("../cell");

var _field = require("../field");

// Utils
// Components
var [name, bem, t] = (0, _utils.createNamespace)('address-edit-detail');

var _default = (0, _vue.defineComponent)({
  name,
  props: {
    show: Boolean,
    rows: _utils.numericProp,
    value: String,
    rules: Array,
    focused: Boolean,
    maxlength: _utils.numericProp,
    searchResult: Array,
    showSearchResult: Boolean
  },
  emits: ['blur', 'focus', 'input', 'select-search'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var field = (0, _vue.ref)();

    var showSearchResult = () => props.focused && props.searchResult && props.showSearchResult;

    var onSelect = express => {
      emit('select-search', express);
      emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    };

    var renderSearchTitle = express => {
      if (express.name) {
        var text = express.name.replace(props.value, "<span class=" + bem('keyword') + ">" + props.value + "</span>");
        return (0, _vue.createVNode)("div", {
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
      return searchResult.map(express => (0, _vue.createVNode)(_cell.Cell, {
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
        return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_field.Field, {
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

exports.default = _default;