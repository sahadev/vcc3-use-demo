import { inject, watch } from 'vue'; // eslint-disable-next-line

export var POPUP_TOGGLE_KEY = Symbol();
export function onPopupReopen(callback) {
  var popupToggleStatus = inject(POPUP_TOGGLE_KEY, null);

  if (popupToggleStatus) {
    watch(popupToggleStatus, show => {
      if (show) {
        callback();
      }
    });
  }
}