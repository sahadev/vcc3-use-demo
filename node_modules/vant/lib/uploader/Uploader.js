"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _icon = require("../icon");

var _imagePreview = require("../image-preview");

var _UploaderPreviewItem = _interopRequireDefault(require("./UploaderPreviewItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utils
// Composables
// Components
var uploaderProps = {
  name: (0, _utils.makeNumericProp)(''),
  accept: (0, _utils.makeStringProp)('image/*'),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: (0, _utils.makeNumericProp)(Infinity),
  imageFit: (0, _utils.makeStringProp)('cover'),
  resultType: (0, _utils.makeStringProp)('dataUrl'),
  uploadIcon: (0, _utils.makeStringProp)('photograph'),
  uploadText: String,
  deletable: _utils.truthProp,
  afterRead: Function,
  showUpload: _utils.truthProp,
  modelValue: (0, _utils.makeArrayProp)(),
  beforeRead: Function,
  beforeDelete: Function,
  previewSize: _utils.numericProp,
  previewImage: _utils.truthProp,
  previewOptions: Object,
  previewFullImage: _utils.truthProp,
  maxSize: {
    type: [Number, String, Function],
    default: Infinity
  }
};

var _default = (0, _vue.defineComponent)({
  name: _utils2.name,
  props: uploaderProps,
  emits: ['delete', 'oversize', 'click-upload', 'close-preview', 'click-preview', 'update:modelValue'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var inputRef = (0, _vue.ref)();
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

      if ((0, _utils2.isOversize)(items, props.maxSize)) {
        if (Array.isArray(items)) {
          var result = (0, _utils2.filterFiles)(items, props.maxSize);
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

      items = (0, _vue.reactive)(items);
      emit('update:modelValue', [...props.modelValue, ...(0, _utils2.toArray)(items)]);

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

        Promise.all(files.map(file => (0, _utils2.readFileContent)(file, resultType))).then(contents => {
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
        (0, _utils2.readFileContent)(files, resultType).then(content => {
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

        if ((0, _utils.isPromise)(response)) {
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
        var imageFiles = props.modelValue.filter(_utils2.isImageFile);
        var images = imageFiles.map(item => {
          if (item.file && !item.url) {
            item.url = URL.createObjectURL(item.file);
            urls.push(item.url);
          }

          return item.url;
        }).filter(Boolean);
        imagePreview = (0, _imagePreview.ImagePreview)((0, _utils.extend)({
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
      var previewData = (0, _utils.extend)((0, _utils.pick)(props, needPickData), (0, _utils.pick)(item, needPickData, true));
      return (0, _vue.createVNode)(_UploaderPreviewItem.default, (0, _vue.mergeProps)({
        "item": item,
        "index": index,
        "onClick": () => emit('click-preview', item, getDetail(index)),
        "onDelete": () => deleteFile(item, index),
        "onPreview": () => previewImage(item)
      }, (0, _utils.pick)(props, ['name', 'lazyLoad']), previewData), {
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

      var Input = props.readonly ? null : (0, _vue.createVNode)("input", {
        "ref": inputRef,
        "type": "file",
        "class": (0, _utils2.bem)('input'),
        "accept": props.accept,
        "capture": props.capture,
        "multiple": props.multiple,
        "disabled": props.disabled,
        "onChange": onChange
      }, null);

      if (slots.default) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('input-wrapper'),
          "onClick": onClickUpload
        }, [slots.default(), Input]);
      }

      return (0, _vue.createVNode)("div", {
        "class": (0, _utils2.bem)('upload', {
          readonly: props.readonly
        }),
        "style": (0, _utils.getSizeStyle)(props.previewSize),
        "onClick": onClickUpload
      }, [(0, _vue.createVNode)(_icon.Icon, {
        "name": props.uploadIcon,
        "class": (0, _utils2.bem)('upload-icon')
      }, null), props.uploadText && (0, _vue.createVNode)("span", {
        "class": (0, _utils2.bem)('upload-text')
      }, [props.uploadText]), Input]);
    };

    var chooseFile = () => {
      if (inputRef.value && !props.disabled) {
        inputRef.value.click();
      }
    };

    (0, _vue.onBeforeUnmount)(() => {
      urls.forEach(url => URL.revokeObjectURL(url));
    });
    (0, _useExpose.useExpose)({
      chooseFile,
      closeImagePreview
    });
    (0, _use.useCustomFieldValue)(() => props.modelValue);
    return () => (0, _vue.createVNode)("div", {
      "class": (0, _utils2.bem)()
    }, [(0, _vue.createVNode)("div", {
      "class": (0, _utils2.bem)('wrapper', {
        disabled: props.disabled
      })
    }, [renderPreviewList(), renderUpload()])]);
  }

});

exports.default = _default;