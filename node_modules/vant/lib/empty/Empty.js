"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _Network = require("./Network");

var [name, bem] = (0, _utils.createNamespace)('empty');
var PRESET_IMAGES = ['error', 'search', 'default'];
var emptyProps = {
  image: (0, _utils.makeStringProp)('default'),
  imageSize: _utils.numericProp,
  description: String
};

var _default = (0, _vue.defineComponent)({
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
        return _Network.Network;
      }

      if (PRESET_IMAGES.includes(image)) {
        image = "https://img.yzcdn.cn/vant/empty-image-" + image + ".png";
      }

      return (0, _vue.createVNode)("img", {
        "src": image
      }, null);
    };

    var renderDescription = () => {
      var description = slots.description ? slots.description() : props.description;

      if (description) {
        return (0, _vue.createVNode)("p", {
          "class": bem('description')
        }, [description]);
      }
    };

    var renderBottom = () => {
      if (slots.default) {
        return (0, _vue.createVNode)("div", {
          "class": bem('bottom')
        }, [slots.default()]);
      }
    };

    return () => (0, _vue.createVNode)("div", {
      "class": bem()
    }, [(0, _vue.createVNode)("div", {
      "class": bem('image'),
      "style": (0, _utils.getSizeStyle)(props.imageSize)
    }, [renderImage()]), renderDescription(), renderBottom()]);
  }

});

exports.default = _default;