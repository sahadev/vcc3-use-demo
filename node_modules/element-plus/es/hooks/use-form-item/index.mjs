import { inject } from 'vue';
import '../../tokens/index.mjs';
import { elFormKey, elFormItemKey } from '../../tokens/form.mjs';

const useFormItem = () => {
  const form = inject(elFormKey, void 0);
  const formItem = inject(elFormItemKey, void 0);
  return {
    form,
    formItem
  };
};

export { useFormItem };
//# sourceMappingURL=index.mjs.map
