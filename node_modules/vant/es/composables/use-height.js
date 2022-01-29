import { useRect } from '@vant/use';
import { ref, onMounted, nextTick } from 'vue';
export var useHeight = element => {
  var height = ref();
  onMounted(() => nextTick(() => {
    height.value = useRect(element).height;
  }));
  return height;
};