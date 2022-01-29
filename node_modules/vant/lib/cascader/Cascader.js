"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _tab = require("../tab");

var _tabs = require("../tabs");

var _icon = require("../icon");

// Components
var [name, bem, t] = (0, _utils.createNamespace)('cascader');
var cascaderProps = {
  title: String,
  options: (0, _utils.makeArrayProp)(),
  closeable: _utils.truthProp,
  swipeable: _utils.truthProp,
  closeIcon: (0, _utils.makeStringProp)('cross'),
  modelValue: _utils.numericProp,
  fieldNames: Object,
  placeholder: String,
  activeColor: String
};

var _default = (0, _vue.defineComponent)({
  name,
  props: cascaderProps,
  emits: ['close', 'change', 'finish', 'click-tab', 'update:modelValue'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;
    var tabs = (0, _vue.ref)([]);
    var activeTab = (0, _vue.ref)(0);
    var {
      text: textKey,
      value: valueKey,
      children: childrenKey
    } = (0, _utils.extend)({
      text: 'text',
      value: 'value',
      children: 'children'
    }, props.fieldNames);

    var getSelectedOptionsByValue = (options, value) => {
      for (var option of options) {
        if (option[valueKey] === value) {
          return [option];
        }

        if (option[childrenKey]) {
          var selectedOptions = getSelectedOptionsByValue(option[childrenKey], value);

          if (selectedOptions) {
            return [option, ...selectedOptions];
          }
        }
      }
    };

    var updateTabs = () => {
      var {
        options,
        modelValue
      } = props;

      if (modelValue !== undefined) {
        var selectedOptions = getSelectedOptionsByValue(options, modelValue);

        if (selectedOptions) {
          var optionsCursor = options;
          tabs.value = selectedOptions.map(option => {
            var tab = {
              options: optionsCursor,
              selected: option
            };
            var next = optionsCursor.find(item => item[valueKey] === option[valueKey]);

            if (next) {
              optionsCursor = next[childrenKey];
            }

            return tab;
          });

          if (optionsCursor) {
            tabs.value.push({
              options: optionsCursor,
              selected: null
            });
          }

          (0, _vue.nextTick)(() => {
            activeTab.value = tabs.value.length - 1;
          });
          return;
        }
      }

      tabs.value = [{
        options,
        selected: null
      }];
    };

    var onSelect = (option, tabIndex) => {
      if (option.disabled) {
        return;
      }

      tabs.value[tabIndex].selected = option;

      if (tabs.value.length > tabIndex + 1) {
        tabs.value = tabs.value.slice(0, tabIndex + 1);
      }

      if (option[childrenKey]) {
        var nextTab = {
          options: option[childrenKey],
          selected: null
        };

        if (tabs.value[tabIndex + 1]) {
          tabs.value[tabIndex + 1] = nextTab;
        } else {
          tabs.value.push(nextTab);
        }

        (0, _vue.nextTick)(() => {
          activeTab.value++;
        });
      }

      var selectedOptions = tabs.value.map(tab => tab.selected).filter(Boolean);
      emit('update:modelValue', option[valueKey]);
      var params = {
        value: option[valueKey],
        tabIndex,
        selectedOptions
      };
      emit('change', params);

      if (!option[childrenKey]) {
        emit('finish', params);
      }
    };

    var onClose = () => emit('close');

    var onClickTab = _ref2 => {
      var {
        name,
        title
      } = _ref2;
      return emit('click-tab', name, title);
    };

    var renderHeader = () => (0, _vue.createVNode)("div", {
      "class": bem('header')
    }, [(0, _vue.createVNode)("h2", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]), props.closeable ? (0, _vue.createVNode)(_icon.Icon, {
      "name": props.closeIcon,
      "class": [bem('close-icon'), _utils.HAPTICS_FEEDBACK],
      "onClick": onClose
    }, null) : null]);

    var renderOption = (option, selectedOption, tabIndex) => {
      var {
        disabled
      } = option;
      var selected = !!(selectedOption && option[valueKey] === selectedOption[valueKey]);
      var color = option.color || (selected ? props.activeColor : undefined);
      var Text = slots.option ? slots.option({
        option,
        selected
      }) : (0, _vue.createVNode)("span", null, [option[textKey]]);
      return (0, _vue.createVNode)("li", {
        "role": "menuitemradio",
        "class": [bem('option', {
          selected,
          disabled
        }), option.className],
        "style": {
          color
        },
        "tabindex": disabled ? undefined : selected ? 0 : -1,
        "aria-checked": selected,
        "aria-disabled": disabled || undefined,
        "onClick": () => onSelect(option, tabIndex)
      }, [Text, selected ? (0, _vue.createVNode)(_icon.Icon, {
        "name": "success",
        "class": bem('selected-icon')
      }, null) : null]);
    };

    var renderOptions = (options, selectedOption, tabIndex) => (0, _vue.createVNode)("ul", {
      "role": "menu",
      "class": bem('options')
    }, [options.map(option => renderOption(option, selectedOption, tabIndex))]);

    var renderTab = (tab, tabIndex) => {
      var _slots$optionsTop, _slots$optionsBottom;

      var {
        options,
        selected
      } = tab;
      var placeholder = props.placeholder || t('select');
      var title = selected ? selected[textKey] : placeholder;
      return (0, _vue.createVNode)(_tab.Tab, {
        "title": title,
        "titleClass": bem('tab', {
          unselected: !selected
        })
      }, {
        default: () => [(_slots$optionsTop = slots['options-top']) == null ? void 0 : _slots$optionsTop.call(slots, {
          tabIndex
        }), renderOptions(options, selected, tabIndex), (_slots$optionsBottom = slots['options-bottom']) == null ? void 0 : _slots$optionsBottom.call(slots, {
          tabIndex
        })]
      });
    };

    var renderTabs = () => (0, _vue.createVNode)(_tabs.Tabs, {
      "active": activeTab.value,
      "onUpdate:active": $event => activeTab.value = $event,
      "animated": true,
      "class": bem('tabs'),
      "color": props.activeColor,
      "swipeThreshold": 0,
      "swipeable": props.swipeable,
      "onClick-tab": onClickTab
    }, {
      default: () => [tabs.value.map(renderTab)]
    });

    updateTabs();
    (0, _vue.watch)(() => props.options, updateTabs, {
      deep: true
    });
    (0, _vue.watch)(() => props.modelValue, value => {
      if (value !== undefined) {
        var values = tabs.value.map(tab => {
          var _tab$selected;

          return (_tab$selected = tab.selected) == null ? void 0 : _tab$selected[valueKey];
        });

        if (values.includes(value)) {
          return;
        }
      }

      updateTabs();
    });
    return () => (0, _vue.createVNode)("div", {
      "class": bem()
    }, [renderHeader(), renderTabs()]);
  }

});

exports.default = _default;