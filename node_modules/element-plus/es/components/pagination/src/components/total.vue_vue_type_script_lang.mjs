import { defineComponent } from 'vue';
import '../../../../hooks/index.mjs';
import { useLocale } from '../../../../hooks/use-locale/index.mjs';

const paginationTotalProps = {
  total: {
    type: Number,
    default: 1e3
  }
};
var script = defineComponent({
  name: "ElPaginationTotal",
  props: paginationTotalProps,
  setup() {
    const { t } = useLocale();
    return {
      t
    };
  }
});

export { script as default };
//# sourceMappingURL=total.vue_vue_type_script_lang.mjs.map
