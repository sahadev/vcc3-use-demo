import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue'; // Utils

import { BORDER, createNamespace } from '../utils';
import { STEPS_KEY } from '../steps/Steps'; // Composables

import { useParent } from '@vant/use'; // Components

import { Icon } from '../icon';
var [name, bem] = createNamespace('step');
export default defineComponent({
  name,

  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var {
      parent,
      index
    } = useParent(STEPS_KEY);

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <Step> must be a child component of <Steps>.');
      }

      return;
    }

    var parentProps = parent.props;

    var getStatus = () => {
      var active = +parentProps.active;

      if (index.value < active) {
        return 'finish';
      }

      return index.value === active ? 'process' : 'waiting';
    };

    var isActive = () => getStatus() === 'process';

    var lineStyle = computed(() => ({
      background: getStatus() === 'finish' ? parentProps.activeColor : parentProps.inactiveColor
    }));
    var titleStyle = computed(() => {
      if (isActive()) {
        return {
          color: parentProps.activeColor
        };
      }

      if (!getStatus()) {
        return {
          color: parentProps.inactiveColor
        };
      }
    });

    var onClickStep = () => parent.onClickStep(index.value);

    var renderCircle = () => {
      var {
        iconPrefix,
        finishIcon,
        activeIcon,
        activeColor,
        inactiveIcon
      } = parentProps;

      if (isActive()) {
        if (slots['active-icon']) {
          return slots['active-icon']();
        }

        return _createVNode(Icon, {
          "class": bem('icon', 'active'),
          "name": activeIcon,
          "color": activeColor,
          "classPrefix": iconPrefix
        }, null);
      }

      if (getStatus() === 'finish' && (finishIcon || slots['finish-icon'])) {
        if (slots['finish-icon']) {
          return slots['finish-icon']();
        }

        return _createVNode(Icon, {
          "class": bem('icon', 'finish'),
          "name": finishIcon,
          "color": activeColor,
          "classPrefix": iconPrefix
        }, null);
      }

      if (slots['inactive-icon']) {
        return slots['inactive-icon']();
      }

      if (inactiveIcon) {
        return _createVNode(Icon, {
          "class": bem('icon'),
          "name": inactiveIcon,
          "classPrefix": iconPrefix
        }, null);
      }

      return _createVNode("i", {
        "class": bem('circle'),
        "style": lineStyle.value
      }, null);
    };

    return () => {
      var status = getStatus();
      return _createVNode("div", {
        "class": [BORDER, bem([parentProps.direction, {
          [status]: status
        }])]
      }, [_createVNode("div", {
        "class": bem('title', {
          active: isActive()
        }),
        "style": titleStyle.value,
        "onClick": onClickStep
      }, [slots.default == null ? void 0 : slots.default()]), _createVNode("div", {
        "class": bem('circle-container'),
        "onClick": onClickStep
      }, [renderCircle()]), _createVNode("div", {
        "class": bem('line'),
        "style": lineStyle.value
      }, null)]);
    };
  }

});