import { createVNode as _createVNode } from "vue";
import { ref, watch, nextTick, onUpdated, onMounted, defineComponent } from 'vue'; // Utils

import { isHidden, truthProp, makeStringProp, makeNumericProp, createNamespace } from '../utils'; // Composables

import { useRect, useScrollParent, useEventListener } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useTabStatus } from '../composables/use-tab-status'; // Components

import { Loading } from '../loading'; // Types

var [name, bem, t] = createNamespace('list');
var listProps = {
  error: Boolean,
  offset: makeNumericProp(300),
  loading: Boolean,
  finished: Boolean,
  errorText: String,
  direction: makeStringProp('down'),
  loadingText: String,
  finishedText: String,
  immediateCheck: truthProp
};
export default defineComponent({
  name,
  props: listProps,
  emits: ['load', 'update:error', 'update:loading'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    // use sync innerLoading state to avoid repeated loading in some edge cases
    var loading = ref(false);
    var root = ref();
    var placeholder = ref();
    var tabStatus = useTabStatus();
    var scrollParent = useScrollParent(root);

    var check = () => {
      nextTick(() => {
        if (loading.value || props.finished || props.error || // skip check when inside an inactive tab
        (tabStatus == null ? void 0 : tabStatus.value) === false) {
          return;
        }

        var {
          offset,
          direction
        } = props;
        var scrollParentRect = useRect(scrollParent);

        if (!scrollParentRect.height || isHidden(root)) {
          return;
        }

        var isReachEdge = false;
        var placeholderRect = useRect(placeholder);

        if (direction === 'up') {
          isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset;
        }

        if (isReachEdge) {
          loading.value = true;
          emit('update:loading', true);
          emit('load');
        }
      });
    };

    var renderFinishedText = () => {
      if (props.finished) {
        var text = slots.finished ? slots.finished() : props.finishedText;

        if (text) {
          return _createVNode("div", {
            "class": bem('finished-text')
          }, [text]);
        }
      }
    };

    var clickErrorText = () => {
      emit('update:error', false);
      check();
    };

    var renderErrorText = () => {
      if (props.error) {
        var text = slots.error ? slots.error() : props.errorText;

        if (text) {
          return _createVNode("div", {
            "role": "button",
            "class": bem('error-text'),
            "tabindex": 0,
            "onClick": clickErrorText
          }, [text]);
        }
      }
    };

    var renderLoading = () => {
      if (loading.value && !props.finished) {
        return _createVNode("div", {
          "class": bem('loading')
        }, [slots.loading ? slots.loading() : _createVNode(Loading, {
          "class": bem('loading-icon')
        }, {
          default: () => [props.loadingText || t('loading')]
        })]);
      }
    };

    watch(() => [props.loading, props.finished, props.error], check);

    if (tabStatus) {
      watch(tabStatus, tabActive => {
        if (tabActive) {
          check();
        }
      });
    }

    onUpdated(() => {
      loading.value = props.loading;
    });
    onMounted(() => {
      if (props.immediateCheck) {
        check();
      }
    });
    useExpose({
      check
    });
    useEventListener('scroll', check, {
      target: scrollParent
    });
    return () => {
      var Content = slots.default == null ? void 0 : slots.default();

      var Placeholder = _createVNode("div", {
        "ref": placeholder,
        "class": bem('placeholder')
      }, null);

      return _createVNode("div", {
        "ref": root,
        "role": "feed",
        "class": bem(),
        "aria-busy": loading.value
      }, [props.direction === 'down' ? Content : Placeholder, renderLoading(), renderFinishedText(), renderErrorText(), props.direction === 'up' ? Content : Placeholder]);
    };
  }

});