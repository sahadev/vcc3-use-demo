"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("./utils");

var _utils2 = require("../utils");

var _icon = require("../icon");

var _image = require("../image");

var _loading = require("../loading");

// Utils
// Components
var _default = (0, _vue.defineComponent)({
  props: {
    name: _utils2.numericProp,
    item: (0, _utils2.makeRequiredProp)(Object),
    index: Number,
    imageFit: String,
    lazyLoad: Boolean,
    deletable: Boolean,
    previewSize: _utils2.numericProp,
    beforeDelete: Function
  },
  emits: ['delete', 'preview'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;

    var renderMask = () => {
      var {
        status,
        message
      } = props.item;

      if (status === 'uploading' || status === 'failed') {
        var MaskIcon = status === 'failed' ? (0, _vue.createVNode)(_icon.Icon, {
          "name": "close",
          "class": (0, _utils.bem)('mask-icon')
        }, null) : (0, _vue.createVNode)(_loading.Loading, {
          "class": (0, _utils.bem)('loading')
        }, null);
        var showMessage = (0, _utils2.isDef)(message) && message !== '';
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils.bem)('mask')
        }, [MaskIcon, showMessage && (0, _vue.createVNode)("div", {
          "class": (0, _utils.bem)('mask-message')
        }, [message])]);
      }
    };

    var onDelete = event => {
      var {
        name,
        item,
        index,
        beforeDelete
      } = props;
      event.stopPropagation();
      (0, _utils2.callInterceptor)(beforeDelete, {
        args: [item, {
          name,
          index
        }],
        done: () => emit('delete')
      });
    };

    var onPreview = () => emit('preview');

    var renderDeleteIcon = () => {
      if (props.deletable && props.item.status !== 'uploading') {
        return (0, _vue.createVNode)("div", {
          "role": "button",
          "class": (0, _utils.bem)('preview-delete'),
          "tabindex": 0,
          "aria-label": (0, _utils.t)('delete'),
          "onClick": onDelete
        }, [(0, _vue.createVNode)(_icon.Icon, {
          "name": "cross",
          "class": (0, _utils.bem)('preview-delete-icon')
        }, null)]);
      }
    };

    var renderCover = () => {
      if (slots['preview-cover']) {
        var {
          index,
          item
        } = props;
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils.bem)('preview-cover')
        }, [slots['preview-cover']((0, _utils2.extend)({
          index
        }, item))]);
      }
    };

    var renderPreview = () => {
      var {
        item
      } = props;

      if ((0, _utils.isImageFile)(item)) {
        return (0, _vue.createVNode)(_image.Image, {
          "fit": props.imageFit,
          "src": item.content || item.url,
          "class": (0, _utils.bem)('preview-image'),
          "width": props.previewSize,
          "height": props.previewSize,
          "lazyLoad": props.lazyLoad,
          "onClick": onPreview
        }, {
          default: renderCover
        });
      }

      return (0, _vue.createVNode)("div", {
        "class": (0, _utils.bem)('file'),
        "style": (0, _utils2.getSizeStyle)(props.previewSize)
      }, [(0, _vue.createVNode)(_icon.Icon, {
        "class": (0, _utils.bem)('file-icon'),
        "name": "description"
      }, null), (0, _vue.createVNode)("div", {
        "class": [(0, _utils.bem)('file-name'), 'van-ellipsis']
      }, [item.file ? item.file.name : item.url]), renderCover()]);
    };

    return () => (0, _vue.createVNode)("div", {
      "class": (0, _utils.bem)('preview')
    }, [renderPreview(), renderMask(), renderDeleteIcon()]);
  }

});

exports.default = _default;