import { inBrowser } from '@vant/use';
export var hasIntersectionObserver = inBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
export var modeType = {
  event: 'event',
  observer: 'observer'
};
export function remove(arr, item) {
  if (!arr.length) return;
  var index = arr.indexOf(item);
  if (index > -1) return arr.splice(index, 1);
}
export function getBestSelectionFromSrcset(el, scale) {
  if (el.tagName !== 'IMG' || !el.getAttribute('data-srcset')) return;
  var options = el.getAttribute('data-srcset');
  var container = el.parentNode;
  var containerWidth = container.offsetWidth * scale;
  var spaceIndex;
  var tmpSrc;
  var tmpWidth;
  options = options.trim().split(',');
  var result = options.map(item => {
    item = item.trim();
    spaceIndex = item.lastIndexOf(' ');

    if (spaceIndex === -1) {
      tmpSrc = item;
      tmpWidth = 999998;
    } else {
      tmpSrc = item.substr(0, spaceIndex);
      tmpWidth = parseInt(item.substr(spaceIndex + 1, item.length - spaceIndex - 2), 10);
    }

    return [tmpWidth, tmpSrc];
  });
  result.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    }

    if (a[0] > b[0]) {
      return -1;
    }

    if (a[0] === b[0]) {
      if (b[1].indexOf('.webp', b[1].length - 5) !== -1) {
        return 1;
      }

      if (a[1].indexOf('.webp', a[1].length - 5) !== -1) {
        return -1;
      }
    }

    return 0;
  });
  var bestSelectedSrc = '';
  var tmpOption;

  for (var i = 0; i < result.length; i++) {
    tmpOption = result[i];
    bestSelectedSrc = tmpOption[1];
    var next = result[i + 1];

    if (next && next[0] < containerWidth) {
      bestSelectedSrc = tmpOption[1];
      break;
    } else if (!next) {
      bestSelectedSrc = tmpOption[1];
      break;
    }
  }

  return bestSelectedSrc;
}
export var getDPR = function (scale) {
  if (scale === void 0) {
    scale = 1;
  }

  return inBrowser ? window.devicePixelRatio || scale : scale;
};
export function supportWebp() {
  if (!inBrowser) return false;
  var support = true;

  try {
    var elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
  } catch (err) {
    support = false;
  }

  return support;
}
export function throttle(action, delay) {
  var timeout = null;
  var lastRun = 0;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeout) {
      return;
    }

    var elapsed = Date.now() - lastRun;

    var runCallback = () => {
      lastRun = Date.now();
      timeout = false;
      action.apply(this, args);
    };

    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}
export function on(el, type, func) {
  el.addEventListener(type, func, {
    capture: false,
    passive: true
  });
}
export function off(el, type, func) {
  el.removeEventListener(type, func, false);
}
export var loadImageAsync = (item, resolve, reject) => {
  var image = new Image();

  if (!item || !item.src) {
    return reject(new Error('image src is required'));
  }

  image.src = item.src;

  if (item.cors) {
    image.crossOrigin = item.cors;
  }

  image.onload = () => resolve({
    naturalHeight: image.naturalHeight,
    naturalWidth: image.naturalWidth,
    src: image.src
  });

  image.onerror = e => reject(e);
};
export class ImageCache {
  constructor(_ref) {
    var {
      max
    } = _ref;
    this.options = {
      max: max || 100
    };
    this.caches = [];
  }

  has(key) {
    return this.caches.indexOf(key) > -1;
  }

  add(key) {
    if (this.has(key)) return;
    this.caches.push(key);

    if (this.caches.length > this.options.max) {
      this.free();
    }
  }

  free() {
    this.caches.shift();
  }

}