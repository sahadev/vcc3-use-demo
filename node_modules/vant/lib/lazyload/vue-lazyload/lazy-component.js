"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _use = require("@vant/use");

var _default = lazy => ({
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  emits: ['show'],

  render() {
    return (0, _vue.h)(this.tag, this.show && this.$slots.default ? this.$slots.default() : null);
  },

  data() {
    return {
      el: null,
      state: {
        loaded: false
      },
      show: false
    };
  },

  mounted() {
    this.el = this.$el;
    lazy.addLazyBox(this);
    lazy.lazyLoadHandler();
  },

  beforeUnmount() {
    lazy.removeComponent(this);
  },

  methods: {
    checkInView() {
      var rect = (0, _use.useRect)(this.$el);
      return _use.inBrowser && rect.top < window.innerHeight * lazy.options.preLoad && rect.bottom > 0 && rect.left < window.innerWidth * lazy.options.preLoad && rect.right > 0;
    },

    load() {
      this.show = true;
      this.state.loaded = true;
      this.$emit('show', this);
    },

    destroy() {
      return this.$destroy;
    }

  }
});

exports.default = _default;