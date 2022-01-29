import { ref } from 'vue';
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

export function useTouch() {
  var startX = ref(0);
  var startY = ref(0);
  var deltaX = ref(0);
  var deltaY = ref(0);
  var offsetX = ref(0);
  var offsetY = ref(0);
  var direction = ref('');

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