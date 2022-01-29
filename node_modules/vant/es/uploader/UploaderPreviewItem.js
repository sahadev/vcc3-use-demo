import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue'; // Utils

import { t, bem, isImageFile } from './utils';
import { isDef, extend, numericProp, getSizeStyle, callInterceptor, makeRequiredProp } from '../utils'; // Components

import { Icon } from '../icon';
import { Image } from '../image';
import { Loading } from '../loading'; // Types

export default defineComponent({
  props: {
    name: numericProp,
    item: makeRequiredProp(Object),
    index: Number,
    imageFit: String,
    lazyLoad: Boolean,
    deletable: Boolean,
    previewSize: numericProp,
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
        var MaskIcon = status === 'failed' ? _createVNode(Icon, {
          "name": "close",
          "class": bem('mask-icon')
        }, null) : _createVNode(Loading, {
          "class": bem('loading')
        }, null);
        var showMessage = isDef(message) && message !== '';
        return _createVNode("div", {
          "class": bem('mask')
        }, [MaskIcon, showMessage && _createVNode("div", {
          "class": bem('mask-message')
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
      callInterceptor(beforeDelete, {
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
        return _createVNode("div", {
          "role": "button",
          "class": bem('preview-delete'),
          "tabindex": 0,
          "aria-label": t('delete'),
          "onClick": onDelete
        }, [_createVNode(Icon, {
          "name": "cross",
          "class": bem('preview-delete-icon')
        }, null)]);
      }
    };

    var renderCover = () => {
      if (slots['preview-cover']) {
        var {
          index,
          item
        } = props;
        return _createVNode("div", {
          "class": bem('preview-cover')
        }, [slots['preview-cover'](extend({
          index
        }, item))]);
      }
    };

    var renderPreview = () => {
      var {
        item
      } = props;

      if (isImageFile(item)) {
        return _createVNode(Image, {
          "fit": props.imageFit,
          "src": item.content || item.url,
          "class": bem('preview-image'),
          "width": props.previewSize,
          "height": props.previewSize,
          "lazyLoad": props.lazyLoad,
          "onClick": onPreview
        }, {
          default: renderCover
        });
      }

      return _createVNode("div", {
        "class": bem('file'),
        "style": getSizeStyle(props.previewSize)
      }, [_createVNode(Icon, {
        "class": bem('file-icon'),
        "name": "description"
      }, null), _createVNode("div", {
        "class": [bem('file-name'), 'van-ellipsis']
      }, [item.file ? item.file.name : item.url]), renderCover()]);
    };

    return () => _createVNode("div", {
      "class": bem('preview')
    }, [renderPreview(), renderMask(), renderDeleteIcon()]);
  }

});