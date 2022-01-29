import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { addUnit, truthProp, numericProp, BORDER_LEFT, makeStringProp, BORDER_SURROUND, createNamespace, makeNumericProp } from '../utils';
var [name, bem] = createNamespace('password-input');
var passwordInputProps = {
  info: String,
  mask: truthProp,
  value: makeStringProp(''),
  gutter: numericProp,
  length: makeNumericProp(6),
  focused: Boolean,
  errorInfo: String
};
export default defineComponent({
  name,
  props: passwordInputProps,
  emits: ['focus'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;

    var onTouchStart = event => {
      event.stopPropagation();
      emit('focus', event);
    };

    var renderPoints = () => {
      var Points = [];
      var {
        mask,
        value,
        length,
        gutter,
        focused
      } = props;

      for (var i = 0; i < length; i++) {
        var char = value[i];
        var showBorder = i !== 0 && !gutter;
        var showCursor = focused && i === value.length;
        var style = void 0;

        if (i !== 0 && gutter) {
          style = {
            marginLeft: addUnit(gutter)
          };
        }

        Points.push(_createVNode("li", {
          "class": [{
            [BORDER_LEFT]: showBorder
          }, bem('item', {
            focus: showCursor
          })],
          "style": style
        }, [mask ? _createVNode("i", {
          "style": {
            visibility: char ? 'visible' : 'hidden'
          }
        }, null) : char, showCursor && _createVNode("div", {
          "class": bem('cursor')
        }, null)]));
      }

      return Points;
    };

    return () => {
      var info = props.errorInfo || props.info;
      return _createVNode("div", {
        "class": bem()
      }, [_createVNode("ul", {
        "class": [bem('security'), {
          [BORDER_SURROUND]: !props.gutter
        }],
        "onTouchstart": onTouchStart
      }, [renderPoints()]), info && _createVNode("div", {
        "class": bem(props.errorInfo ? 'error-info' : 'info')
      }, [info])]);
    };
  }

});