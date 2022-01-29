import { ref, watch } from 'vue';
export function useLazyRender(show) {
  var inited = ref(false);
  watch(show, value => {
    if (value) {
      inited.value = value;
    }
  }, {
    immediate: true
  });
  return render => () => inited.value ? render() : null;
}