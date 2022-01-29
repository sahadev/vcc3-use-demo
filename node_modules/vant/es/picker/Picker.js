import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, watch, computed, defineComponent } from 'vue'; // Utils

import { extend, unitToPx, truthProp, makeArrayProp, preventDefault, makeStringProp, makeNumericProp, createNamespace, HAPTICS_FEEDBACK, BORDER_UNSET_TOP_BOTTOM } from '../utils'; // Composables

import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose'; // Components

import { Loading } from '../loading';
import Column, { PICKER_KEY } from './PickerColumn'; // Types

var [name, bem, t] = createNamespace('picker');
export var pickerSharedProps = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  itemHeight: makeNumericProp(44),
  showToolbar: truthProp,
  swipeDuration: makeNumericProp(1000),
  visibleItemCount: makeNumericProp(6),
  cancelButtonText: String,
  confirmButtonText: String
};
var pickerProps = extend({}, pickerSharedProps, {
  columns: makeArrayProp(),
  // @deprecated
  // should be removed in next major version
  valueKey: String,
  defaultIndex: makeNumericProp(0),
  toolbarPosition: makeStringProp('top'),
  columnsFieldNames: Object
});
export default defineComponent({
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

    var formattedColumns = ref([]);
    var {
      text: textKey,
      values: valuesKey,
      children: childrenKey
    } = extend({
      // compatible with valueKey prop
      text: props.valueKey || 'text',
      values: 'values',
      children: 'children'
    }, props.columnsFieldNames);
    var {
      children,
      linkChildren
    } = useChildren(PICKER_KEY);
    linkChildren();
    var itemHeight = computed(() => unitToPx(props.itemHeight));
    var dataType = computed(() => {
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
        return _createVNode("div", {
          "class": [bem('title'), 'van-ellipsis']
        }, [props.title]);
      }
    };

    var renderCancel = () => {
      var text = props.cancelButtonText || t('cancel');
      return _createVNode("button", {
        "type": "button",
        "class": [bem('cancel'), HAPTICS_FEEDBACK],
        "onClick": cancel
      }, [slots.cancel ? slots.cancel() : text]);
    };

    var renderConfirm = () => {
      var text = props.confirmButtonText || t('confirm');
      return _createVNode("button", {
        "type": "button",
        "class": [bem('confirm'), HAPTICS_FEEDBACK],
        "onClick": confirm
      }, [slots.confirm ? slots.confirm() : text]);
    };

    var renderToolbar = () => {
      if (props.showToolbar) {
        // default slot is deprecated
        // should be removed in next major version
        var slot = slots.toolbar || slots.default;
        return _createVNode("div", {
          "class": bem('toolbar')
        }, [slot ? slot() : [renderCancel(), renderTitle(), renderConfirm()]]);
      }
    };

    var renderColumnItems = () => formattedColumns.value.map((item, columnIndex) => {
      var _item$defaultIndex;

      return _createVNode(Column, {
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
      return _createVNode("div", {
        "class": bem('columns'),
        "style": columnsStyle,
        "onTouchmove": preventDefault
      }, [renderColumnItems(), _createVNode("div", {
        "class": bem('mask'),
        "style": maskStyle
      }, null), _createVNode("div", {
        "class": [BORDER_UNSET_TOP_BOTTOM, bem('frame')],
        "style": frameStyle
      }, null)]);
    };

    watch(() => props.columns, format, {
      immediate: true
    });
    useExpose({
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

      return _createVNode("div", {
        "class": bem()
      }, [props.toolbarPosition === 'top' ? renderToolbar() : null, props.loading ? _createVNode(Loading, {
        "class": bem('loading')
      }, null) : null, (_slots$columnsTop = slots['columns-top']) == null ? void 0 : _slots$columnsTop.call(slots), renderColumns(), (_slots$columnsBottom = slots['columns-bottom']) == null ? void 0 : _slots$columnsBottom.call(slots), props.toolbarPosition === 'bottom' ? renderToolbar() : null]);
    };
  }

});