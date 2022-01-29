import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
import { ref, reactive, defineComponent, onBeforeUnmount } from 'vue'; // Utils

import { pick, extend, isPromise, truthProp, numericProp, getSizeStyle, makeArrayProp, makeStringProp, makeNumericProp } from '../utils';
import { bem, name, toArray, isOversize, filterFiles, isImageFile, readFileContent } from './utils'; // Composables

import { useCustomFieldValue } from '@vant/use';
import { useExpose } from '../composables/use-expose'; // Components

import { Icon } from '../icon';
import { ImagePreview } from '../image-preview';
import UploaderPreviewItem from './UploaderPreviewItem'; // Types

var uploaderProps = {
  name: makeNumericProp(''),
  accept: makeStringProp('image/*'),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: makeNumericProp(Infinity),
  imageFit: makeStringProp('cover'),
  resultType: makeStringProp('dataUrl'),
  uploadIcon: makeStringProp('photograph'),
  uploadText: String,
  deletable: truthProp,
  afterRead: Function,
  showUpload: truthProp,
  modelValue: makeArrayProp(),
  beforeRead: Function,
  beforeDelete: Function,
  previewSize: numericProp,
  previewImage: truthProp,
  previewOptions: Object,
  previewFullImage: truthProp,
  maxSize: {
    type: [Number, String, Function],
    default: Infinity
  }
};
export default defineComponent({
  name,
  props: uploaderProps,
  emits: ['delete', 'oversize', 'click-upload', 'close-preview', 'click-preview', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var inputRef = ref();
    var urls = [];

    var getDetail = function (index) {
      if (index === void 0) {
        index = props.modelValue.length;
      }

      return {
        name: props.name,
        index
      };
    };

    var resetInput = () => {
      if (inputRef.value) {
        inputRef.value.value = '';
      }
    };

    var onAfterRead = items => {
      resetInput();

      if (isOversize(items, props.maxSize)) {
        if (Array.isArray(items)) {
          var result = filterFiles(items, props.maxSize);
          items = result.valid;
          emit('oversize', result.invalid, getDetail());

          if (!items.length) {
            return;
          }
        } else {
          emit('oversize', items, getDetail());
          return;
        }
      }

      items = reactive(items);
      emit('update:modelValue', [...props.modelValue, ...toArray(items)]);

      if (props.afterRead) {
        props.afterRead(items, getDetail());
      }
    };

    var readFile = files => {
      var {
        maxCount,
        modelValue,
        resultType
      } = props;

      if (Array.isArray(files)) {
        var remainCount = +maxCount - modelValue.length;

        if (files.length > remainCount) {
          files = files.slice(0, remainCount);
        }

        Promise.all(files.map(file => readFileContent(file, resultType))).then(contents => {
          var fileList = files.map((file, index) => {
            var result = {
              file,
              status: '',
              message: ''
            };

            if (contents[index]) {
              result.content = contents[index];
            }

            return result;
          });
          onAfterRead(fileList);
        });
      } else {
        readFileContent(files, resultType).then(content => {
          var result = {
            file: files,
            status: '',
            message: ''
          };

          if (content) {
            result.content = content;
          }

          onAfterRead(result);
        });
      }
    };

    var onChange = event => {
      var {
        files
      } = event.target;

      if (props.disabled || !files || !files.length) {
        return;
      }

      var file = files.length === 1 ? files[0] : [].slice.call(files);

      if (props.beforeRead) {
        var response = props.beforeRead(file, getDetail());

        if (!response) {
          resetInput();
          return;
        }

        if (isPromise(response)) {
          response.then(data => {
            if (data) {
              readFile(data);
            } else {
              readFile(file);
            }
          }).catch(resetInput);
          return;
        }
      }

      readFile(file);
    };

    var imagePreview;

    var onClosePreview = () => emit('close-preview');

    var previewImage = item => {
      if (props.previewFullImage) {
        var imageFiles = props.modelValue.filter(isImageFile);
        var images = imageFiles.map(item => {
          if (item.file && !item.url) {
            item.url = URL.createObjectURL(item.file);
            urls.push(item.url);
          }

          return item.url;
        }).filter(Boolean);
        imagePreview = ImagePreview(extend({
          images,
          startPosition: imageFiles.indexOf(item),
          onClose: onClosePreview
        }, props.previewOptions));
      }
    };

    var closeImagePreview = () => {
      if (imagePreview) {
        imagePreview.close();
      }
    };

    var deleteFile = (item, index) => {
      var fileList = props.modelValue.slice(0);
      fileList.splice(index, 1);
      emit('update:modelValue', fileList);
      emit('delete', item, getDetail(index));
    };

    var renderPreviewItem = (item, index) => {
      var needPickData = ['imageFit', 'deletable', 'previewSize', 'beforeDelete'];
      var previewData = extend(pick(props, needPickData), pick(item, needPickData, true));
      return _createVNode(UploaderPreviewItem, _mergeProps({
        "item": item,
        "index": index,
        "onClick": () => emit('click-preview', item, getDetail(index)),
        "onDelete": () => deleteFile(item, index),
        "onPreview": () => previewImage(item)
      }, pick(props, ['name', 'lazyLoad']), previewData), {
        'preview-cover': slots['preview-cover']
      });
    };

    var renderPreviewList = () => {
      if (props.previewImage) {
        return props.modelValue.map(renderPreviewItem);
      }
    };

    var onClickUpload = event => emit('click-upload', event);

    var renderUpload = () => {
      if (props.modelValue.length >= props.maxCount || !props.showUpload) {
        return;
      }

      var Input = props.readonly ? null : _createVNode("input", {
        "ref": inputRef,
        "type": "file",
        "class": bem('input'),
        "accept": props.accept,
        "capture": props.capture,
        "multiple": props.multiple,
        "disabled": props.disabled,
        "onChange": onChange
      }, null);

      if (slots.default) {
        return _createVNode("div", {
          "class": bem('input-wrapper'),
          "onClick": onClickUpload
        }, [slots.default(), Input]);
      }

      return _createVNode("div", {
        "class": bem('upload', {
          readonly: props.readonly
        }),
        "style": getSizeStyle(props.previewSize),
        "onClick": onClickUpload
      }, [_createVNode(Icon, {
        "name": props.uploadIcon,
        "class": bem('upload-icon')
      }, null), props.uploadText && _createVNode("span", {
        "class": bem('upload-text')
      }, [props.uploadText]), Input]);
    };

    var chooseFile = () => {
      if (inputRef.value && !props.disabled) {
        inputRef.value.click();
      }
    };

    onBeforeUnmount(() => {
      urls.forEach(url => URL.revokeObjectURL(url));
    });
    useExpose({
      chooseFile,
      closeImagePreview
    });
    useCustomFieldValue(() => props.modelValue);
    return () => _createVNode("div", {
      "class": bem()
    }, [_createVNode("div", {
      "class": bem('wrapper', {
        disabled: props.disabled
      })
    }, [renderPreviewList(), renderUpload()])]);
  }

});