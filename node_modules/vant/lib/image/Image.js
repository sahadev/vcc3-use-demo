"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _icon = require("../icon");

// Utils
// Components
var [name, bem] = (0, _utils.createNamespace)('image');
var imageProps = {
  src: String,
  alt: String,
  fit: String,
  round: Boolean,
  width: _utils.numericProp,
  height: _utils.numericProp,
  radius: _utils.numericProp,
  lazyLoad: Boolean,
  iconSize: _utils.numericProp,
  showError: _utils.truthProp,
  errorIcon: (0, _utils.makeStringProp)('photo-fail'),
  iconPrefix: String,
  showLoading: _utils.truthProp,
  loadingIcon: (0, _utils.makeStringProp)('photo')
};

var _default = (0, _vue.defineComponent)({
  name,
  props: imageProps,
  emits: ['load', 'error'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var error = (0, _vue.ref)(false);
    var loading = (0, _vue.ref)(true);
    var imageRef = (0, _vue.ref)();
    var {
      $Lazyload
    } = (0, _vue.getCurrentInstance)().proxy;
    var style = (0, _vue.computed)(() => {
      var style = {
        width: (0, _utils.addUnit)(props.width),
        height: (0, _utils.addUnit)(props.height)
      };

      if ((0, _utils.isDef)(props.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = (0, _utils.addUnit)(props.radius);
      }

      return style;
    });
    (0, _vue.watch)(() => props.src, () => {
      error.value = false;
      loading.value = true;
    });

    var onLoad = event => {
      loading.value = false;
      emit('load', event);
    };

    var onError = event => {
      error.value = true;
      loading.value = false;
      emit('error', event);
    };

    var renderIcon = (name, className, slot) => {
      if (slot) {
        return slot();
      }

      return (0, _vue.createVNode)(_icon.Icon, {
        "name": name,
        "size": props.iconSize,
        "class": className,
        "classPrefix": props.iconPrefix
      }, null);
    };

    var renderPlaceholder = () => {
      if (loading.value && props.showLoading) {
        return (0, _vue.createVNode)("div", {
          "class": bem('loading')
        }, [renderIcon(props.loadingIcon, bem('loading-icon'), slots.loading)]);
      }

      if (error.value && props.showError) {
        return (0, _vue.createVNode)("div", {
          "class": bem('error')
        }, [renderIcon(props.errorIcon, bem('error-icon'), slots.error)]);
      }
    };

    var renderImage = () => {
      if (error.value || !props.src) {
        return;
      }

      var attrs = {
        alt: props.alt,
        class: bem('img'),
        style: {
          objectFit: props.fit
        }
      };

      if (props.lazyLoad) {
        return (0, _vue.withDirectives)((0, _vue.createVNode)("img", (0, _vue.mergeProps)({
          "ref": imageRef
        }, attrs), null), [[(0, _vue.resolveDirective)("lazy"), props.src]]);
      }

      return (0, _vue.createVNode)("img", (0, _vue.mergeProps)({
        "src": props.src,
        "onLoad": onLoad,
        "onError": onError
      }, attrs), null);
    };

    var onLazyLoaded = _ref2 => {
      var {
        el
      } = _ref2;

      if (el === imageRef.value && loading.value) {
        onLoad();
      }
    };

    var onLazyLoadError = _ref3 => {
      var {
        el
      } = _ref3;

      if (el === imageRef.value && !error.value) {
        onError();
      }
    };

    if ($Lazyload && _utils.inBrowser) {
      $Lazyload.$on('loaded', onLazyLoaded);
      $Lazyload.$on('error', onLazyLoadError);
      (0, _vue.onBeforeUnmount)(() => {
        $Lazyload.$off('loaded', onLazyLoaded);
        $Lazyload.$off('error', onLazyLoadError);
      });
    }

    return () => (0, _vue.createVNode)("div", {
      "class": bem({
        round: props.round
      }),
      "style": style.value
    }, [renderImage(), renderPlaceholder(), slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;