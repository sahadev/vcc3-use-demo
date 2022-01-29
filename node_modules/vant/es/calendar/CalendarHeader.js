import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import { createNamespace } from '../utils';
import { t, bem } from './utils';
var [name] = createNamespace('calendar-header');
export default defineComponent({
  name,
  props: {
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number
  },
  emits: ['click-subtitle'],

  setup(props, _ref) {
    var {
      slots,
      emit
    } = _ref;

    var renderTitle = () => {
      if (props.showTitle) {
        var text = props.title || t('title');
        var title = slots.title ? slots.title() : text;
        return _createVNode("div", {
          "class": bem('header-title')
        }, [title]);
      }
    };

    var onClickSubtitle = event => emit('click-subtitle', event);

    var renderSubtitle = () => {
      if (props.showSubtitle) {
        var title = slots.subtitle ? slots.subtitle() : props.subtitle;
        return _createVNode("div", {
          "class": bem('header-subtitle'),
          "onClick": onClickSubtitle
        }, [title]);
      }
    };

    var renderWeekDays = () => {
      var {
        firstDayOfWeek
      } = props;
      var weekdays = t('weekdays');
      var renderWeekDays = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];
      return _createVNode("div", {
        "class": bem('weekdays')
      }, [renderWeekDays.map(text => _createVNode("span", {
        "class": bem('weekday')
      }, [text]))]);
    };

    return () => _createVNode("div", {
      "class": bem('header')
    }, [renderTitle(), renderSubtitle(), renderWeekDays()]);
  }

});