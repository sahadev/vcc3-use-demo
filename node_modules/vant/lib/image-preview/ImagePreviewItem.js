"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _useTouch = require("../composables/use-touch");

var _image = require("../image");

var _loading = require("../loading");

var _swipeItem = require("../swipe-item");

// Utils
// Composables
// Components
var getDistance = touches => Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));

var bem = (0, _utils.createNamespace)('image-preview')[1];

var _default = (0, _vue.defineComponent)({
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: (0, _utils.makeRequiredProp)(_utils.numericProp),
    maxZoom: (0, _utils.makeRequiredProp)(_utils.numericProp),
    rootWidth: (0, _utils.makeRequiredProp)(Number),
    rootHeight: (0, _utils.makeRequiredProp)(Number)
  },
  emits: ['scale', 'close'],

  setup(props, _ref) {
    var {
      emit
    } = _ref;
    var state = (0, _vue.reactive)({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    });
    var touch = (0, _useTouch.useTouch)();
    var vertical = (0, _vue.computed)(() => {
      var {
        rootWidth,
        rootHeight
      } = props;
      var rootRatio = rootHeight / rootWidth;
      return state.imageRatio > rootRatio;
    });
    var imageStyle = (0, _vue.computed)(() => {
      var {
        scale,
        moveX,
        moveY,
        moving,
        zooming
      } = state;
      var style = {
        transitionDuration: zooming || moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        var offsetX = moveX / scale;
        var offsetY = moveY / scale;
        style.transform = "scale(" + scale + ", " + scale + ") translate(" + offsetX + "px, " + offsetY + "px)";
      }

      return style;
    });
    var maxMoveX = (0, _vue.computed)(() => {
      if (state.imageRatio) {
        var {
          rootWidth,
          rootHeight
        } = props;
        var displayWidth = vertical.value ? rootHeight / state.imageRatio : rootWidth;
        return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
      }

      return 0;
    });
    var maxMoveY = (0, _vue.computed)(() => {
      if (state.imageRatio) {
        var {
          rootWidth,
          rootHeight
        } = props;
        var displayHeight = vertical.value ? rootHeight : rootWidth * state.imageRatio;
        return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
      }

      return 0;
    });

    var setScale = scale => {
      scale = (0, _utils.clamp)(scale, +props.minZoom, +props.maxZoom);

      if (scale !== state.scale) {
        state.scale = scale;
        emit('scale', {
          scale,
          index: props.active
        });
      }
    };

    var resetScale = () => {
      setScale(1);
      state.moveX = 0;
      state.moveY = 0;
    };

    var toggleScale = () => {
      var scale = state.scale > 1 ? 1 : 2;
      setScale(scale);
      state.moveX = 0;
      state.moveY = 0;
    };

    var startMoveX;
    var startMoveY;
    var startScale;
    var startDistance;
    var doubleTapTimer;
    var touchStartTime;

    var onTouchStart = event => {
      var {
        touches
      } = event;
      var {
        offsetX
      } = touch;
      touch.start(event);
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = Date.now();
      state.moving = touches.length === 1 && state.scale !== 1;
      state.zooming = touches.length === 2 && !offsetX.value;

      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };

    var onTouchMove = event => {
      var {
        touches
      } = event;
      touch.move(event);

      if (state.moving || state.zooming) {
        (0, _utils.preventDefault)(event, true);
      }

      if (state.moving) {
        var {
          deltaX,
          deltaY
        } = touch;
        var moveX = deltaX.value + startMoveX;
        var moveY = deltaY.value + startMoveY;
        state.moveX = (0, _utils.clamp)(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = (0, _utils.clamp)(moveY, -maxMoveY.value, maxMoveY.value);
      }

      if (state.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = startScale * distance / startDistance;
        setScale(scale);
      }
    };

    var checkTap = () => {
      var {
        offsetX,
        offsetY
      } = touch;
      var deltaTime = Date.now() - touchStartTime;
      var TAP_TIME = 250;
      var TAP_OFFSET = 10;

      if (offsetX.value < TAP_OFFSET && offsetY.value < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (doubleTapTimer) {
          clearTimeout(doubleTapTimer);
          doubleTapTimer = null;
          toggleScale();
        } else {
          doubleTapTimer = setTimeout(() => {
            emit('close');
            doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    };

    var onTouchEnd = event => {
      var stopPropagation = false;
      /* istanbul ignore else */

      if (state.moving || state.zooming) {
        stopPropagation = true;

        if (state.moving && startMoveX === state.moveX && startMoveY === state.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = (0, _utils.clamp)(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = (0, _utils.clamp)(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }

          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;

          if (state.scale < 1) {
            resetScale();
          }
        }
      } // eliminate tap delay on safari


      (0, _utils.preventDefault)(event, stopPropagation);
      checkTap();
      touch.reset();
    };

    var onLoad = event => {
      var {
        naturalWidth,
        naturalHeight
      } = event.target;
      state.imageRatio = naturalHeight / naturalWidth;
    };

    (0, _vue.watch)(() => props.active, resetScale);
    (0, _vue.watch)(() => props.show, value => {
      if (!value) {
        resetScale();
      }
    });
    return () => {
      var imageSlots = {
        loading: () => (0, _vue.createVNode)(_loading.Loading, {
          "type": "spinner"
        }, null)
      };
      return (0, _vue.createVNode)(_swipeItem.SwipeItem, {
        "class": bem('swipe-item'),
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, {
        default: () => [(0, _vue.createVNode)(_image.Image, {
          "src": props.src,
          "fit": "contain",
          "class": bem('image', {
            vertical: vertical.value
          }),
          "style": imageStyle.value,
          "onLoad": onLoad
        }, imageSlots)]
      });
    };
  }

});

exports.default = _default;