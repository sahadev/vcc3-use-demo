"use strict";

exports.__esModule = true;
exports.useTouch = useTouch;

var _vue = require("vue");

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

function useTouch() {
  var startX = (0, _vue.ref)(0);
  var startY = (0, _vue.ref)(0);
  var deltaX = (0, _vue.ref)(0);
  var deltaY = (0, _vue.ref)(0);
  var offsetX = (0, _vue.ref)(0);
  var offsetY = (0, _vue.ref)(0);
  var direction = (0, _vue.ref)('');

  var isVertical = () => direction.value === 'vertical';

  var isHorizontal = () => direction.value === 'horizontal';

  var reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = '';
  };

  var start = event => {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };

  var move = event => {
    var touch = event.touches[0]; // Fix: Safari back will set clientX to negative number

    deltaX.value = touch.clientX < 0 ? 0 : touch.clientX - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);

    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal
  };
}