import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import { makeNumberProp, createNamespace, makeRequiredProp } from '../utils';
import { bem } from './utils';
var [name] = createNamespace('calendar-day');
export default defineComponent({
  name,
  props: {
    item: makeRequiredProp(Object),
    color: String,
    index: Number,
    offset: makeNumberProp(0),
    rowHeight: String
  },
  emits: ['click'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var style = computed(() => {
      var {
        item,
        index,
        color,
        offset,
        rowHeight
      } = props;
      var style = {
        height: rowHeight
      };

      if (item.type === 'placeholder') {
        style.width = '100%';
        return style;
      }

      if (index === 0) {
        style.marginLeft = 100 * offset / 7 + "%";
      }

      if (color) {
        switch (item.type) {
          case 'end':
          case 'start':
          case 'start-end':
          case 'multiple-middle':
          case 'multiple-selected':
            style.background = color;
            break;

          case 'middle':
            style.color = color;
            break;
        }
      }

      return style;
    });

    var onClick = () => {
      if (props.item.type !== 'disabled') {
        emit('click', props.item);
      }
    };

    var renderTopInfo = () => {
      var {
        topInfo
      } = props.item;

      if (topInfo || slots['top-info']) {
        return _createVNode("div", {
          "class": bem('top-info')
        }, [slots['top-info'] ? slots['top-info'](props.item) : topInfo]);
      }
    };

    var renderBottomInfo = () => {
      var {
        bottomInfo
      } = props.item;

      if (bottomInfo || slots['bottom-info']) {
        return _createVNode("div", {
          "class": bem('bottom-info')
        }, [slots['bottom-info'] ? slots['bottom-info'](props.item) : bottomInfo]);
      }
    };

    var renderContent = () => {
      var {
        item,
        color,
        rowHeight
      } = props;
      var {
        type,
        text
      } = item;
      var Nodes = [renderTopInfo(), text, renderBottomInfo()];

      if (type === 'selected') {
        return _createVNode("div", {
          "class": bem('selected-day'),
          "style": {
            width: rowHeight,
            height: rowHeight,
            background: color
          }
        }, [Nodes]);
      }

      return Nodes;
    };

    return () => {
      var {
        type,
        className
      } = props.item;

      if (type === 'placeholder') {
        return _createVNode("div", {
          "class": bem('day'),
          "style": style.value
        }, null);
      }

      return _createVNode("div", {
        "role": "gridcell",
        "style": style.value,
        "class": [bem('day', type), className],
        "tabindex": type === 'disabled' ? undefined : -1,
        "onClick": onClick
      }, [renderContent()]);
    };
  }

});