import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { ref, watch, computed, nextTick, defineComponent } from 'vue'; // Utils

import { cellSharedProps } from '../cell/Cell';
import { pick, extend, truthProp, numericProp, createNamespace } from '../utils';
import { COLLAPSE_KEY } from '../collapse/Collapse'; // Composables

import { raf, doubleRaf, useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLazyRender } from '../composables/use-lazy-render'; // Components

import { Cell } from '../cell';
var [name, bem] = createNamespace('collapse-item');
var CELL_SLOTS = ['icon', 'title', 'value', 'label', 'right-icon'];
var collapseItemProps = extend({}, cellSharedProps, {
  name: numericProp,
  isLink: truthProp,
  disabled: Boolean,
  readonly: Boolean
});
export default defineComponent({
  name,
  props: collapseItemProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var wrapperRef = ref();
    var contentRef = ref();
    var {
      parent,
      index
    } = useParent(COLLAPSE_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <CollapseItem> must be a child component of <Collapse>.');
      }

      return;
    }

    var name = computed(() => {
      var _props$name;

      return (_props$name = props.name) != null ? _props$name : index.value;
    });
    var expanded = computed(() => parent.isExpanded(name.value));
    var show = ref(expanded.value);
    var lazyRender = useLazyRender(show);

    var onTransitionEnd = () => {
      if (!expanded.value) {
        show.value = false;
      } else if (wrapperRef.value) {
        wrapperRef.value.style.height = '';
      }
    };

    watch(expanded, (value, oldValue) => {
      if (oldValue === null) {
        return;
      }

      if (value) {
        show.value = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var tick = value ? nextTick : raf;
      tick(() => {
        if (!contentRef.value || !wrapperRef.value) {
          return;
        }

        var {
          offsetHeight
        } = contentRef.value;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapperRef.value.style.height = value ? '0' : contentHeight; // use double raf to ensure animation can start

          doubleRaf(() => {
            if (wrapperRef.value) {
              wrapperRef.value.style.height = value ? contentHeight : '0';
            }
          });
        } else {
          onTransitionEnd();
        }
      });
    });

    var toggle = function (newValue) {
      if (newValue === void 0) {
        newValue = !expanded.value;
      }

      parent.toggle(name.value, newValue);
    };

    var onClickTitle = () => {
      if (!props.disabled && !props.readonly) {
        toggle();
      }
    };

    var renderTitle = () => {
      var {
        border,
        disabled,
        readonly
      } = props;
      var attrs = pick(props, Object.keys(cellSharedProps));

      if (readonly) {
        attrs.isLink = false;
      }

      if (disabled || readonly) {
        attrs.clickable = false;
      }

      return _createVNode(Cell, _mergeProps({
        "role": "button",
        "class": bem('title', {
          disabled,
          expanded: expanded.value,
          borderless: !border
        }),
        "aria-expanded": String(expanded.value),
        "onClick": onClickTitle
      }, attrs), pick(slots, CELL_SLOTS));
    };

    var renderContent = lazyRender(() => _withDirectives(_createVNode("div", {
      "ref": wrapperRef,
      "class": bem('wrapper'),
      "onTransitionend": onTransitionEnd
    }, [_createVNode("div", {
      "ref": contentRef,
      "class": bem('content')
    }, [slots.default == null ? void 0 : slots.default()])]), [[_vShow, show.value]]));
    useExpose({
      toggle
    });
    return () => _createVNode("div", {
      "class": [bem({
        border: index.value && props.border
      })]
    }, [renderTitle(), renderContent()]);
  }

});