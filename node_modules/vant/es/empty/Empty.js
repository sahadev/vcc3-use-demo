import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { numericProp, getSizeStyle, makeStringProp, createNamespace } from '../utils';
import { Network } from './Network';
var [name, bem] = createNamespace('empty');
var PRESET_IMAGES = ['error', 'search', 'default'];
var emptyProps = {
  image: makeStringProp('default'),
  imageSize: numericProp,
  description: String
};
export default defineComponent({
  name,
  props: emptyProps,

  setup(props, _ref) {
    var {
      slots
    } = _ref;

    var renderImage = () => {
      if (slots.image) {
        return slots.image();
      }

      var {
        image
      } = props;

      if (image === 'network') {
        return Network;
      }

      if (PRESET_IMAGES.includes(image)) {
        image = "https://img.yzcdn.cn/vant/empty-image-" + image + ".png";
      }

      return _createVNode("img", {
        "src": image
      }, null);
    };

    var renderDescription = () => {
      var description = slots.description ? slots.description() : props.description;

      if (description) {
        return _createVNode("p", {
          "class": bem('description')
        }, [description]);
      }
    };

    var renderBottom = () => {
      if (slots.default) {
        return _createVNode("div", {
          "class": bem('bottom')
        }, [slots.default()]);
      }
    };

    return () => _createVNode("div", {
      "class": bem()
    }, [_createVNode("div", {
      "class": bem('image'),
      "style": getSizeStyle(props.imageSize)
    }, [renderImage()]), renderDescription(), renderBottom()]);
  }

});