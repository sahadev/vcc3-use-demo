import { ref, reactive } from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';
var lang = ref('zh-CN');
var messages = reactive({
  'zh-CN': defaultMessages
});
export var Locale = {
  messages() {
    return messages[lang.value];
  },

  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({
      [newLang]: newMessages
    });
  },

  add(newMessages) {
    if (newMessages === void 0) {
      newMessages = {};
    }

    deepAssign(messages, newMessages);
  }

};
export default Locale;