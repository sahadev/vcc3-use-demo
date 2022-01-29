import { defineComponent, ref, computed } from 'vue';
import { Close } from '@element-plus/icons-vue';
import { ElOverlay } from '../../overlay/index.mjs';
import '../../dialog/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../directives/index.mjs';
import { drawerProps, drawerEmits } from './drawer.mjs';
import TrapFocus from '../../../directives/trap-focus/index.mjs';
import { useDialog } from '../../dialog/src/use-dialog.mjs';

var script = defineComponent({
  name: "ElDrawer",
  components: {
    ElOverlay,
    ElIcon,
    Close
  },
  directives: {
    TrapFocus
  },
  props: drawerProps,
  emits: drawerEmits,
  setup(props, ctx) {
    const drawerRef = ref();
    const isHorizontal = computed(() => props.direction === "rtl" || props.direction === "ltr");
    const drawerSize = computed(() => typeof props.size === "number" ? `${props.size}px` : props.size);
    return {
      ...useDialog(props, ctx, drawerRef),
      drawerRef,
      isHorizontal,
      drawerSize
    };
  }
});

export { script as default };
//# sourceMappingURL=drawer.vue_vue_type_script_lang.mjs.map
