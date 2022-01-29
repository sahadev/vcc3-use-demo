import { inBrowser } from '../utils';
import { onDeactivated, onBeforeUnmount } from 'vue';
import { onMountedOrActivated } from '@vant/use'; // @Experimental

export function useVisibilityChange(target, onChange) {
  // compatibility: https://caniuse.com/#feat=intersectionobserver
  if (!inBrowser || !window.IntersectionObserver) {
    return;
  }

  var observer = new IntersectionObserver(entries => {
    // visibility changed
    onChange(entries[0].intersectionRatio > 0);
  }, {
    root: document.body
  });

  var observe = () => {
    if (target.value) {
      observer.observe(target.value);
    }
  };

  var unobserve = () => {
    if (target.value) {
      observer.unobserve(target.value);
    }
  };

  onDeactivated(unobserve);
  onBeforeUnmount(unobserve);
  onMountedOrActivated(observe);
}