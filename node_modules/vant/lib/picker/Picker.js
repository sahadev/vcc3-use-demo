"use strict";

exports.__esModule = true;
exports.pickerSharedProps = exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _loading = require("../loading");

var _PickerColumn = _interopRequireWildcard(require("./PickerColumn"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Utils
// Composables
// Components
var [name, bem, t] = (0, _utils.createNamespace)('picker');
var pickerSharedProps = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  itemHeight: (0, _utils.makeNumericProp)(44),
  showToolbar: _utils.truthProp,
  swipeDuration: (0, _utils.makeNumericProp)(1000),
  visibleItemCount: (0, _utils.makeNumericProp)(6),
  cancelButtonText: String,
  confirmButtonText: String
};
exports.pickerSharedProps = pickerSharedProps;
var pickerProps = (0, _utils.extend)({}, pickerSharedProps, {
  columns: (0, _utils.makeArrayProp)(),
  // @deprecated
  // should be removed in next major version
  valueKey: String,
  defaultIndex: (0, _utils.makeNumericProp)(0),
  toolbarPosition: (0, _utils.makeStringProp)('top'),
  columnsFieldNames: Object
});

var _default = (0, _vue.defineComponent)({
  name,
  props: pickerProps,
  emits: ['confirm', 'cancel', 'change'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    if (process.env.NODE_ENV !== 'production') {
      if (slots.default) {
        console.warn('[Vant] Picker: "default" slot is deprecated, please use "toolbar" slot instead.');
      }

      if (props.valueKey) {
        console.warn('[Vant] Picker: "valueKey" prop is deprecated, please use "columnsFieldNames" prop instead.');
      }
    }

    var formattedColumns = (0, _vue.ref)([]);
    var {
      text: textKey,
      values: valuesKey,
      children: childrenKey
    } = (0, _utils.extend)({
      // compatible with valueKey prop
      text: props.valueKey || 'text',
      values: 'values',
      children: 'children'
    }, props.columnsFieldNames);
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(_PickerColumn.PICKER_KEY);
    linkChildren();
    var itemHeight = (0, _vue.computed)(() => (0, _utils.unitToPx)(props.itemHeight));
    var dataType = (0, _vue.computed)(() => {
      var firstColumn = props.columns[0];

      if (typeof firstColumn === 'object') {
        if (childrenKey in firstColumn) {
          return 'cascade';
        }

        if (valuesKey in firstColumn) {
          return 'object';
        }
      }

      return 'plain';
    });

    var formatCascade = () => {
      var formatted = [];
      var cursor = {
        [childrenKey]: props.columns
      };

      while (cursor && cursor[childrenKey]) {
        var _cursor$defaultIndex;

        var _children = cursor[childrenKey];
        var defaultIndex = (_cursor$defaultIndex = cursor.defaultIndex) != null ? _cursor$defaultIndex : +props.defaultIndex;

        while (_children[defaultIndex] && _children[defaultIndex].disabled) {
          if (defaultIndex < _children.length - 1) {
            defaultIndex++;
          } else {
            defaultIndex = 0;
            break;
          }
        }

        formatted.push({
          [valuesKey]: cursor[childrenKey],
          className: cursor.className,
          defaultIndex
        });
        cursor = _children[defaultIndex];
      }

      formattedColumns.value = formatted;
    };

    var format = () => {
      var {
        columns
      } = props;

      if (dataType.value === 'plain') {
        formattedColumns.value = [{
          [valuesKey]: columns
        }];
      } else if (dataType.value === 'cascade') {
        formatCascade();
      } else {
        formattedColumns.value = columns;
      }
    }; // get indexes of all columns


    var getIndexes = () => children.map(child => child.state.index); // set options of column by index


    var setColumnValues = (index, options) => {
      var column = children[index];

      if (column) {
        column.setOptions(options);
      }
    };

    var onCascadeChange = columnIndex => {
      var cursor = {
        [childrenKey]: props.columns
      };
      var indexes = getIndexes();

      for (var i = 0; i <= columnIndex; i++) {
        cursor = cursor[childrenKey][indexes[i]];
      }

      while (cursor && cursor[childrenKey]) {
        columnIndex++;
        setColumnValues(columnIndex, cursor[childrenKey]);
        cursor = cursor[childrenKey][cursor.defaultIndex || 0];
      }
    }; // get column instance by index


    var getChild = index => children[index]; // get column value by index


    var getColumnValue = index => {
      var column = getChild(index);

      if (column) {
        return column.getValue();
      }
    }; // set column value by index


    var setColumnValue = (index, value) => {
      var column = getChild(index);

      if (column) {
        column.setValue(value);

        if (dataType.value === 'cascade') {
          onCascadeChange(index);
        }
      }
    }; // get column option index by column index


    var getColumnIndex = index => {
      var column = getChild(index);

      if (column) {
        return column.state.index;
      }
    }; // set column option index by column index


    var setColumnIndex = (columnIndex, optionIndex) => {
      var column = getChild(columnIndex);

      if (column) {
        column.setIndex(optionIndex);

        if (dataType.value === 'cascade') {
          onCascadeChange(columnIndex);
        }
      }
    }; // get options of column by index


    var getColumnValues = index => {
      var column = getChild(index);

      if (column) {
        return column.state.options;
      }
    }; // get values of all columns


    var getValues = () => children.map(child => child.getValue()); // set values of all columns


    var setValues = values => {
      values.forEach((value, index) => {
        setColumnValue(index, value);
      });
    }; // set indexes of all columns


    var setIndexes = indexes => {
      indexes.forEach((optionIndex, columnIndex) => {
        setColumnIndex(columnIndex, optionIndex);
      });
    };

    var emitAction = event => {
      if (dataType.value === 'plain') {
        emit(event, getColumnValue(0), getColumnIndex(0));
      } else {
        emit(event, getValues(), getIndexes());
      }
    };

    var onChange = columnIndex => {
      if (dataType.value === 'cascade') {
        onCascadeChange(columnIndex);
      }

      if (dataType.value === 'plain') {
        emit('change', getColumnValue(0), getColumnIndex(0));
      } else {
        emit('change', getValues(), columnIndex);
      }
    };

    var confirm = () => {
      children.forEach(child => child.stopMomentum());
      emitAction('confirm');
    };

    var cancel = () => emitAction('cancel');

    var renderTitle = () => {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('title'), 'van-ellipsis']
        }, [props.title]);
      }
    };

    var renderCancel = () => {
      var text = props.cancelButtonText || t('cancel');
      return (0, _vue.createVNode)("button", {
        "type": "button",
        "class": [bem('cancel'), _utils.HAPTICS_FEEDBACK],
        "onClick": cancel
      }, [slots.cancel ? slots.cancel() : text]);
    };

    var renderConfirm = () => {
      var text = props.confirmButtonText || t('confirm');
      return (0, _vue.createVNode)("button", {
        "type": "button",
        "class": [bem('confirm'), _utils.HAPTICS_FEEDBACK],
        "onClick": confirm
      }, [slots.confirm ? slots.confirm() : text]);
    };

    var renderToolbar = () => {
      if (props.showToolbar) {
        // default slot is deprecated
        // should be removed in next major version
        var slot = slots.toolbar || slots.default;
        return (0, _vue.createVNode)("div", {
          "class": bem('toolbar')
        }, [slot ? slot() : [renderCancel(), renderTitle(), renderConfirm()]]);
      }
    };

    var renderColumnItems = () => formattedColumns.value.map((item, columnIndex) => {
      var _item$defaultIndex;

      return (0, _vue.createVNode)(_PickerColumn.default, {
        "textKey": textKey,
        "readonly": props.readonly,
        "allowHtml": props.allowHtml,
        "className": item.className,
        "itemHeight": itemHeight.value,
        "defaultIndex": (_item$defaultIndex = item.defaultIndex) != null ? _item$defaultIndex : +props.defaultIndex,
        "swipeDuration": props.swipeDuration,
        "initialOptions": item[valuesKey],
        "visibleItemCount": props.visibleItemCount,
        "onChange": () => onChange(columnIndex)
      }, {
        option: slots.option
      });
    });

    var renderColumns = () => {
      var wrapHeight = itemHeight.value * +props.visibleItemCount;
      var frameStyle = {
        height: itemHeight.value + "px"
      };
      var columnsStyle = {
        height: wrapHeight + "px"
      };
      var maskStyle = {
        backgroundSize: "100% " + (wrapHeight - itemHeight.value) / 2 + "px"
      };
      return (0, _vue.createVNode)("div", {
        "class": bem('columns'),
        "style": columnsStyle,
        "onTouchmove": _utils.preventDefault
      }, [renderColumnItems(), (0, _vue.createVNode)("div", {
        "class": bem('mask'),
        "style": maskStyle
      }, null), (0, _vue.createVNode)("div", {
        "class": [_utils.BORDER_UNSET_TOP_BOTTOM, bem('frame')],
        "style": frameStyle
      }, null)]);
    };

    (0, _vue.watch)(() => props.columns, format, {
      immediate: true
    });
    (0, _useExpose.useExpose)({
      confirm,
      getValues,
      setValues,
      getIndexes,
      setIndexes,
      getColumnIndex,
      setColumnIndex,
      getColumnValue,
      setColumnValue,
      getColumnValues,
      setColumnValues
    });
    return () => {
      var _slots$columnsTop, _slots$columnsBottom;

      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [props.toolbarPosition === 'top' ? renderToolbar() : null, props.loading ? (0, _vue.createVNode)(_loading.Loading, {
        "class": bem('loading')
      }, null) : null, (_slots$columnsTop = slots['columns-top']) == null ? void 0 : _slots$columnsTop.call(slots), renderColumns(), (_slots$columnsBottom = slots['columns-bottom']) == null ? void 0 : _slots$columnsBottom.call(slots), props.toolbarPosition === 'bottom' ? renderToolbar() : null]);
    };
  }

});

exports.default = _default;