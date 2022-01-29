import { createVNode as _createVNode } from "vue";
import { watch, computed, defineComponent } from 'vue';
import { raf, cancelRaf } from '@vant/use';
import { isObject, truthProp, numericProp, getSizeStyle, makeStringProp, makeNumberProp, makeNumericProp, createNamespace } from '../utils';
var [name, bem] = createNamespace('circle');
var uid = 0;

var format = rate => Math.min(Math.max(+rate, 0), 100);

function getPath(clockwise, viewBoxSize) {
  var sweepFlag = clockwise ? 1 : 0;
  return "M " + viewBoxSize / 2 + " " + viewBoxSize / 2 + " m 0, -500 a 500, 500 0 1, " + sweepFlag + " 0, 1000 a 500, 500 0 1, " + sweepFlag + " 0, -1000";
}

var circleProps = {
  text: String,
  size: numericProp,
  fill: makeStringProp('none'),
  rate: makeNumericProp(100),
  speed: makeNumericProp(0),
  color: [String, Object],
  clockwise: truthProp,
  layerColor: String,
  currentRate: makeNumberProp(0),
  strokeWidth: makeNumericProp(40),
  strokeLinecap: String,
  startPosition: makeStringProp('top')
};
export default defineComponent({
  name,
  props: circleProps,
  emits: ['update:currentRate'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var id = "van-circle-" + uid++;
    var viewBoxSize = computed(() => +props.strokeWidth + 1000);
    var path = computed(() => getPath(props.clockwise, viewBoxSize.value));
    var svgStyle = computed(() => {
      var ROTATE_ANGLE_MAP = {
        top: 0,
        right: 90,
        bottom: 180,
        left: 270
      };
      var angleValue = ROTATE_ANGLE_MAP[props.startPosition];

      if (angleValue) {
        return {
          transform: "rotate(" + angleValue + "deg)"
        };
      }
    });
    watch(() => props.rate, rate => {
      var rafId;
      var startTime = Date.now();
      var startRate = props.currentRate;
      var endRate = format(rate);
      var duration = Math.abs((startRate - endRate) * 1000 / +props.speed);

      var animate = () => {
        var now = Date.now();
        var progress = Math.min((now - startTime) / duration, 1);
        var rate = progress * (endRate - startRate) + startRate;
        emit('update:currentRate', format(parseFloat(rate.toFixed(1))));

        if (endRate > startRate ? rate < endRate : rate > endRate) {
          rafId = raf(animate);
        }
      };

      if (props.speed) {
        if (rafId) {
          cancelRaf(rafId);
        }

        rafId = raf(animate);
      } else {
        emit('update:currentRate', endRate);
      }
    }, {
      immediate: true
    });

    var renderHover = () => {
      var PERIMETER = 3140;
      var {
        strokeWidth,
        currentRate,
        strokeLinecap
      } = props;
      var offset = PERIMETER * currentRate / 100;
      var color = isObject(props.color) ? "url(#" + id + ")" : props.color;
      var style = {
        stroke: color,
        strokeWidth: +strokeWidth + 1 + "px",
        strokeLinecap,
        strokeDasharray: offset + "px " + PERIMETER + "px"
      };
      return _createVNode("path", {
        "d": path.value,
        "style": style,
        "class": bem('hover'),
        "stroke": color
      }, null);
    };

    var renderLayer = () => {
      var style = {
        fill: props.fill,
        stroke: props.layerColor,
        strokeWidth: props.strokeWidth + "px"
      };
      return _createVNode("path", {
        "class": bem('layer'),
        "style": style,
        "d": path.value
      }, null);
    };

    var renderGradient = () => {
      var {
        color
      } = props;

      if (!isObject(color)) {
        return;
      }

      var Stops = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b)).map((key, index) => _createVNode("stop", {
        "key": index,
        "offset": key,
        "stop-color": color[key]
      }, null));
      return _createVNode("defs", null, [_createVNode("linearGradient", {
        "id": id,
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Stops])]);
    };

    var renderText = () => {
      if (slots.default) {
        return slots.default();
      }

      if (props.text) {
        return _createVNode("div", {
          "class": bem('text')
        }, [props.text]);
      }
    };

    return () => _createVNode("div", {
      "class": bem(),
      "style": getSizeStyle(props.size)
    }, [_createVNode("svg", {
      "viewBox": "0 0 " + viewBoxSize.value + " " + viewBoxSize.value,
      "style": svgStyle.value
    }, [renderGradient(), renderLayer(), renderHover()]), renderText()]);
  }

});