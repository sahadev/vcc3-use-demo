import { createApp, reactive } from 'vue';
import { extend } from '../utils';
import { useExpose } from '../composables/use-expose';
export function usePopupState() {
  var state = reactive({
    show: false
  });

  var toggle = show => {
    state.show = show;
  };

  var open = props => {
    extend(state, props, {
      transitionAppear: true
    });
    toggle(true);
  };

  var close = () => toggle(false);

  useExpose({
    open,
    close,
    toggle
  });
  return {
    open,
    close,
    state,
    toggle
  };
}
export function mountComponent(RootComponent) {
  var app = createApp(RootComponent);
  var root = document.createElement('div');
  document.body.appendChild(root);
  return {
    instance: app.mount(root),

    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }

  };
}