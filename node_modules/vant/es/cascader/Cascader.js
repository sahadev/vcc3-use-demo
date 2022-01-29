import { createVNode as _createVNode } from "vue";
import { ref, watch, nextTick, defineComponent } from 'vue';
import { extend, truthProp, numericProp, makeArrayProp, makeStringProp, createNamespace, HAPTICS_FEEDBACK } from '../utils'; // Components

import { Tab } from '../tab';
import { Tabs } from '../tabs';
import { Icon } from '../icon'; // Types

var [name, bem, t] = createNamespace('cascader');
var cascaderProps = {
  title: String,
  options: makeArrayProp(),
  closeable: truthProp,
  swipeable: truthProp,
  closeIcon: makeStringProp('cross'),
  modelValue: numericProp,
  fieldNames: Object,
  placeholder: String,
  activeColor: String
};
export default defineComponent({
  name,
  props: cascaderProps,
  emits: ['close', 'change', 'finish', 'click-tab', 'update:modelValue'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;
    var tabs = ref([]);
    var activeTab = ref(0);
    var {
      text: textKey,
      value: valueKey,
      children: childrenKey
    } = extend({
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

          nextTick(() => {
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

        nextTick(() => {
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

    var renderHeader = () => _createVNode("div", {
      "class": bem('header')
    }, [_createVNode("h2", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]), props.closeable ? _createVNode(Icon, {
      "name": props.closeIcon,
      "class": [bem('close-icon'), HAPTICS_FEEDBACK],
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
      }) : _createVNode("span", null, [option[textKey]]);
      return _createVNode("li", {
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
      }, [Text, selected ? _createVNode(Icon, {
        "name": "success",
        "class": bem('selected-icon')
      }, null) : null]);
    };

    var renderOptions = (options, selectedOption, tabIndex) => _createVNode("ul", {
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
      return _createVNode(Tab, {
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

    var renderTabs = () => _createVNode(Tabs, {
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
    watch(() => props.options, updateTabs, {
      deep: true
    });
    watch(() => props.modelValue, value => {
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
    return () => _createVNode("div", {
      "class": bem()
    }, [renderHeader(), renderTabs()]);
  }

});