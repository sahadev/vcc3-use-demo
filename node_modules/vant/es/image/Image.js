import { withDirectives as _withDirectives, mergeProps as _mergeProps, resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { ref, watch, computed, onBeforeUnmount, defineComponent, getCurrentInstance } from 'vue'; // Utils

import { isDef, addUnit, inBrowser, truthProp, numericProp, makeStringProp, createNamespace } from '../utils'; // Components

import { Icon } from '../icon';
var [name, bem] = createNamespace('image');
var imageProps = {
  src: String,
  alt: String,
  fit: String,
  round: Boolean,
  width: numericProp,
  height: numericProp,
  radius: numericProp,
  lazyLoad: Boolean,
  iconSize: numericProp,
  showError: truthProp,
  errorIcon: makeStringProp('photo-fail'),
  iconPrefix: String,
  showLoading: truthProp,
  loadingIcon: makeStringProp('photo')
};
export default defineComponent({
  name,
  props: imageProps,
  emits: ['load', 'error'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var error = ref(false);
    var loading = ref(true);
    var imageRef = ref();
    var {
      $Lazyload
    } = getCurrentInstance().proxy;
    var style = computed(() => {
      var style = {
        width: addUnit(props.width),
        height: addUnit(props.height)
      };

      if (isDef(props.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = addUnit(props.radius);
      }

      return style;
    });
    watch(() => props.src, () => {
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

      return _createVNode(Icon, {
        "name": name,
        "size": props.iconSize,
        "class": className,
        "classPrefix": props.iconPrefix
      }, null);
    };

    var renderPlaceholder = () => {
      if (loading.value && props.showLoading) {
        return _createVNode("div", {
          "class": bem('loading')
        }, [renderIcon(props.loadingIcon, bem('loading-icon'), slots.loading)]);
      }

      if (error.value && props.showError) {
        return _createVNode("div", {
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
        return _withDirectives(_createVNode("img", _mergeProps({
          "ref": imageRef
        }, attrs), null), [[_resolveDirective("lazy"), props.src]]);
      }

      return _createVNode("img", _mergeProps({
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

    if ($Lazyload && inBrowser) {
      $Lazyload.$on('loaded', onLazyLoaded);
      $Lazyload.$on('error', onLazyLoadError);
      onBeforeUnmount(() => {
        $Lazyload.$off('loaded', onLazyLoaded);
        $Lazyload.$off('error', onLazyLoadError);
      });
    }

    return () => _createVNode("div", {
      "class": bem({
        round: props.round
      }),
      "style": style.value
    }, [renderImage(), renderPlaceholder(), slots.default == null ? void 0 : slots.default()]);
  }

});