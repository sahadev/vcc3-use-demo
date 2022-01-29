"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

var _useTabStatus = require("../composables/use-tab-status");

var _loading = require("../loading");

// Utils
// Composables
// Components
var [name, bem, t] = (0, _utils.createNamespace)('list');
var listProps = {
  error: Boolean,
  offset: (0, _utils.makeNumericProp)(300),
  loading: Boolean,
  finished: Boolean,
  errorText: String,
  direction: (0, _utils.makeStringProp)('down'),
  loadingText: String,
  finishedText: String,
  immediateCheck: _utils.truthProp
};

var _default = (0, _vue.defineComponent)({
  name,
  props: listProps,
  emits: ['load', 'update:error', 'update:loading'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    // use sync innerLoading state to avoid repeated loading in some edge cases
    var loading = (0, _vue.ref)(false);
    var root = (0, _vue.ref)();
    var placeholder = (0, _vue.ref)();
    var tabStatus = (0, _useTabStatus.useTabStatus)();
    var scrollParent = (0, _use.useScrollParent)(root);

    var check = () => {
      (0, _vue.nextTick)(() => {
        if (loading.value || props.finished || props.error || // skip check when inside an inactive tab
        (tabStatus == null ? void 0 : tabStatus.value) === false) {
          return;
        }

        var {
          offset,
          direction
        } = props;
        var scrollParentRect = (0, _use.useRect)(scrollParent);

        if (!scrollParentRect.height || (0, _utils.isHidden)(root)) {
          return;
        }

        var isReachEdge = false;
        var placeholderRect = (0, _use.useRect)(placeholder);

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
          return (0, _vue.createVNode)("div", {
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
          return (0, _vue.createVNode)("div", {
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
        return (0, _vue.createVNode)("div", {
          "class": bem('loading')
        }, [slots.loading ? slots.loading() : (0, _vue.createVNode)(_loading.Loading, {
          "class": bem('loading-icon')
        }, {
          default: () => [props.loadingText || t('loading')]
        })]);
      }
    };

    (0, _vue.watch)(() => [props.loading, props.finished, props.error], check);

    if (tabStatus) {
      (0, _vue.watch)(tabStatus, tabActive => {
        if (tabActive) {
          check();
        }
      });
    }

    (0, _vue.onUpdated)(() => {
      loading.value = props.loading;
    });
    (0, _vue.onMounted)(() => {
      if (props.immediateCheck) {
        check();
      }
    });
    (0, _useExpose.useExpose)({
      check
    });
    (0, _use.useEventListener)('scroll', check, {
      target: scrollParent
    });
    return () => {
      var Content = slots.default == null ? void 0 : slots.default();
      var Placeholder = (0, _vue.createVNode)("div", {
        "ref": placeholder,
        "class": bem('placeholder')
      }, null);
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "role": "feed",
        "class": bem(),
        "aria-busy": loading.value
      }, [props.direction === 'down' ? Content : Placeholder, renderLoading(), renderFinishedText(), renderErrorText(), props.direction === 'up' ? Content : Placeholder]);
    };
  }

});

exports.default = _default;