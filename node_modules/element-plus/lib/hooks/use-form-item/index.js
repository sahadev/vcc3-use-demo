'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../tokens/index.js');
var form = require('../../tokens/form.js');

const useFormItem = () => {
  const form$1 = vue.inject(form.elFormKey, void 0);
  const formItem = vue.inject(form.elFormItemKey, void 0);
  return {
    form: form$1,
    formItem
  };
};

exports.useFormItem = useFormItem;
//# sourceMappingURL=index.js.map
