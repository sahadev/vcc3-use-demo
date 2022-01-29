"use strict";

exports.__esModule = true;
exports.default = void 0;

var _util = require("./util");

/* eslint-disable max-classes-per-file */

/* eslint-disable prefer-object-spread */
var defaultOptions = {
  selector: 'img'
};

class LazyContainer {
  constructor(_ref) {
    var {
      el,
      binding,
      vnode,
      lazy
    } = _ref;
    this.el = null;
    this.vnode = vnode;
    this.binding = binding;
    this.options = {};
    this.lazy = lazy;
    this.queue = [];
    this.update({
      el,
      binding
    });
  }

  update(_ref2) {
    var {
      el,
      binding
    } = _ref2;
    this.el = el;
    this.options = Object.assign({}, defaultOptions, binding.value);
    var imgs = this.getImgs();
    imgs.forEach(el => {
      this.lazy.add(el, Object.assign({}, this.binding, {
        value: {
          src: 'dataset' in el ? el.dataset.src : el.getAttribute('data-src'),
          error: ('dataset' in el ? el.dataset.error : el.getAttribute('data-error')) || this.options.error,
          loading: ('dataset' in el ? el.dataset.loading : el.getAttribute('data-loading')) || this.options.loading
        }
      }), this.vnode);
    });
  }

  getImgs() {
    return Array.from(this.el.querySelectorAll(this.options.selector));
  }

  clear() {
    var imgs = this.getImgs();
    imgs.forEach(el => this.lazy.remove(el));
    this.vnode = null;
    this.binding = null;
    this.lazy = null;
  }

}

class LazyContainerManager {
  constructor(_ref3) {
    var {
      lazy
    } = _ref3;
    this.lazy = lazy;
    this.queue = [];
  }

  bind(el, binding, vnode) {
    var container = new LazyContainer({
      el,
      binding,
      vnode,
      lazy: this.lazy
    });
    this.queue.push(container);
  }

  update(el, binding, vnode) {
    var container = this.queue.find(item => item.el === el);
    if (!container) return;
    container.update({
      el,
      binding,
      vnode
    });
  }

  unbind(el) {
    var container = this.queue.find(item => item.el === el);
    if (!container) return;
    container.clear();
    (0, _util.remove)(this.queue, container);
  }

}

exports.default = LazyContainerManager;