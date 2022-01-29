"use strict";

exports.__esModule = true;
exports.mountComponent = mountComponent;
exports.usePopupState = usePopupState;

var _vue = require("vue");

var _utils = require("../utils");

var _useExpose = require("../composables/use-expose");

function usePopupState() {
  var state = (0, _vue.reactive)({
    show: false
  });

  var toggle = show => {
    state.show = show;
  };

  var open = props => {
    (0, _utils.extend)(state, props, {
      transitionAppear: true
    });
    toggle(true);
  };

  var close = () => toggle(false);

  (0, _useExpose.useExpose)({
    open,
    close,
    toggle
  });
  return {
    open,
    close,
    state,
    toggle
  };
}

function mountComponent(RootComponent) {
  var app = (0, _vue.createApp)(RootComponent);
  var root = document.createElement('div');
  document.body.appendChild(root);
  return {
    instance: app.mount(root),

    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }

  };
}