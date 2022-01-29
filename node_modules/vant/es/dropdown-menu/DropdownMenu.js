import { createVNode as _createVNode } from "vue";
import { ref, computed, defineComponent } from 'vue'; // Utils

import { isDef, truthProp, numericProp, windowHeight, makeStringProp, makeNumericProp, createNamespace, HAPTICS_FEEDBACK } from '../utils'; // Composables

import { useId } from '../composables/use-id';
import { useRect, useChildren, useClickAway, useScrollParent, useEventListener } from '@vant/use'; // Types

var [name, bem] = createNamespace('dropdown-menu');
var dropdownMenuProps = {
  overlay: truthProp,
  zIndex: numericProp,
  duration: makeNumericProp(0.2),
  direction: makeStringProp('down'),
  activeColor: String,
  closeOnClickOutside: truthProp,
  closeOnClickOverlay: truthProp
};
export var DROPDOWN_KEY = Symbol(name);
export default defineComponent({
  name,
  props: dropdownMenuProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var id = useId();
    var root = ref();
    var barRef = ref();
    var offset = ref(0);
    var {
      children,
      linkChildren
    } = useChildren(DROPDOWN_KEY);
    var scrollParent = useScrollParent(root);
    var opened = computed(() => children.some(item => item.state.showWrapper));
    var barStyle = computed(() => {
      if (opened.value && isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1
        };
      }
    });

    var onClickAway = () => {
      if (props.closeOnClickOutside) {
        children.forEach(item => {
          item.toggle(false);
        });
      }
    };

    var updateOffset = () => {
      if (barRef.value) {
        var rect = useRect(barRef);

        if (props.direction === 'down') {
          offset.value = rect.bottom;
        } else {
          offset.value = windowHeight.value - rect.top;
        }
      }
    };

    var onScroll = () => {
      if (opened.value) {
        updateOffset();
      }
    };

    var toggleItem = active => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    };

    var renderTitle = (item, index) => {
      var {
        showPopup
      } = item.state;
      var {
        disabled,
        titleClass
      } = item;
      return _createVNode("div", {
        "id": id + "-" + index,
        "role": "button",
        "tabindex": disabled ? undefined : 0,
        "class": [bem('item', {
          disabled
        }), {
          [HAPTICS_FEEDBACK]: !disabled
        }],
        "onClick": () => {
          if (!disabled) {
            toggleItem(index);
          }
        }
      }, [_createVNode("span", {
        "class": [bem('title', {
          down: showPopup === (props.direction === 'down'),
          active: showPopup
        }), titleClass],
        "style": {
          color: showPopup ? props.activeColor : ''
        }
      }, [_createVNode("div", {
        "class": "van-ellipsis"
      }, [item.renderTitle()])])]);
    };

    linkChildren({
      id,
      props,
      offset
    });
    useClickAway(root, onClickAway);
    useEventListener('scroll', onScroll, {
      target: scrollParent
    });
    return () => _createVNode("div", {
      "ref": root,
      "class": bem()
    }, [_createVNode("div", {
      "ref": barRef,
      "style": barStyle.value,
      "class": bem('bar', {
        opened: opened.value
      })
    }, [children.map(renderTitle)]), slots.default == null ? void 0 : slots.default()]);
  }

});