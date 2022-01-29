import { ref, onBeforeUpdate } from 'vue';
export function useRefs() {
  var refs = ref([]);
  onBeforeUpdate(() => {
    refs.value = [];
  });

  var setRefs = index => el => {
    refs.value[index] = el;
  };

  return [refs, setRefs];
}