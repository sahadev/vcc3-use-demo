import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { extend, numericProp, preventDefault, makeStringProp, createNamespace, BORDER_SURROUND } from '../utils';
import { useRoute, routeProps } from '../composables/use-route'; // Components

import { Icon } from '../icon';
import { Loading } from '../loading'; // Types

var [name, bem] = createNamespace('button');
var buttonProps = extend({}, routeProps, {
  tag: makeStringProp('button'),
  text: String,
  icon: String,
  type: makeStringProp('default'),
  size: makeStringProp('normal'),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: makeStringProp('button'),
  loadingSize: numericProp,
  loadingText: String,
  loadingType: String,
  iconPosition: makeStringProp('left')
});
export default defineComponent({
  name,
  props: buttonProps,
  emits: ['click'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var route = useRoute();

    var renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }

      return _createVNode(Loading, {
        "size": props.loadingSize,
        "type": props.loadingType,
        "class": bem('loading')
      }, null);
    };

    var renderIcon = () => {
      if (props.loading) {
        return renderLoadingIcon();
      }

      if (slots.icon) {
        return _createVNode("div", {
          "class": bem('icon')
        }, [slots.icon()]);
      }

      if (props.icon) {
        return _createVNode(Icon, {
          "name": props.icon,
          "class": bem('icon'),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    var renderText = () => {
      var text;

      if (props.loading) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : props.text;
      }

      if (text) {
        return _createVNode("span", {
          "class": bem('text')
        }, [text]);
      }
    };

    var getStyle = () => {
      var {
        color,
        plain
      } = props;

      if (color) {
        var style = {
          color: plain ? color : 'white'
        };

        if (!plain) {
          // Use background instead of backgroundColor to make linear-gradient work
          style.background = color;
        } // hide border when color is linear-gradient


        if (color.includes('gradient')) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }

        return style;
      }
    };

    var onClick = event => {
      if (props.loading) {
        preventDefault(event);
      } else if (!props.disabled) {
        emit('click', event);
        route();
      }
    };

    return () => {
      var {
        tag,
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
        nativeType,
        iconPosition
      } = props;
      var classes = [bem([type, size, {
        plain,
        block,
        round,
        square,
        loading,
        disabled,
        hairline
      }]), {
        [BORDER_SURROUND]: hairline
      }];
      return _createVNode(tag, {
        "type": nativeType,
        "class": classes,
        "style": getStyle(),
        "disabled": disabled,
        "onClick": onClick
      }, {
        default: () => [_createVNode("div", {
          "class": bem('content')
        }, [iconPosition === 'left' && renderIcon(), renderText(), iconPosition === 'right' && renderIcon()])]
      });
    };
  }

});