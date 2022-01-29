"use strict";

exports.__esModule = true;
exports.useLockScroll = useLockScroll;

var _vue = require("vue");

var _use = require("@vant/use");

var _useTouch = require("./use-touch");

var _utils = require("../utils");

var totalLockCount = 0;
var BODY_LOCK_CLASS = 'van-overflow-hidden';

function useLockScroll(rootRef, shouldLock) {
  var touch = (0, _useTouch.useTouch)();

  var onTouchMove = event => {
    touch.move(event);
    var direction = touch.deltaY.value > 0 ? '10' : '01';
    var el = (0, _use.getScrollParent)(event.target, rootRef.value);
    var {
      scrollHeight,
      offsetHeight,
      scrollTop
    } = el;
    var status = '11';

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = '10';
    }

    if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      (0, _utils.preventDefault)(event, true);
    }
  };

  var lock = () => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener('touchmove', onTouchMove, {
      passive: false
    });

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }

    totalLockCount++;
  };

  var unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);
      totalLockCount--;

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };

  var init = () => shouldLock() && lock();

  var destroy = () => shouldLock() && unlock();

  (0, _use.onMountedOrActivated)(init);
  (0, _vue.onDeactivated)(destroy);
  (0, _vue.onBeforeUnmount)(destroy);
  (0, _vue.watch)(shouldLock, value => {
    value ? lock() : unlock();
  });
}