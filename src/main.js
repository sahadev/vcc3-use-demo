// 引入支持运行时编译的Vue版本
import * as $Vue from "vue/dist/vue.esm-bundler.js";

// VCC加载执行过程中依赖于Vue本身
self.Vue = $Vue;

// 加载VCC
const loadVCC = document.createElement("script");
loadVCC.src = "http://localhost:3000/src/vcc/vcc3.umd.js"
document.body.appendChild(loadVCC);

// VCC的主界面是用ElementUI实现的，所以需要提前加载
import ElementPlus from "element-plus";

// 这些是VCC依赖的ElementUI图标
import {
  QuestionFilled,
  CirclePlus,
  DocumentCopy,
  Delete,
  Refresh,
  Minus,
} from "@element-plus/icons-vue";

// 引入ElementUI样式
import "element-plus/dist/index.css";

// 加载非首屏组件
import loadCompontents from "./UIComponentInit.js";

// 创建应用实例的基础方法，支持同步创建与异步创建
function loadTemplate(renderComponent, loadFinished = () => {}) {
  const app = $Vue.createApp(renderComponent);
  app.use(ElementPlus);
  // 通过闭包的方式异步加载其它非首屏组件
  loadCompontents().then((modules) => {
    for (let index = 0; index < modules.length; index++) {
      const module = modules[index];
      app.use(module);
      loadFinished(app);
    }
  });
  return app;
}

// 同步创建Vue实例。给应用宿主使用
function createBaseAppSync(renderComponent = {}) {
  return loadTemplate(renderComponent);
}

// 异步创建Vue实例。给VCC渲染引擎使用
function createBaseAppAsync(renderComponent = {}) {
  return new Promise((resolve, reject) => {
    loadTemplate(renderComponent, (app) => {
      resolve(app);
    });
  });
}

// 创建宿主实例
const app = createBaseAppSync({
  template: `<home></home>`,
  components: {
    // 这里写异步实现是因为需要等待Vcc加载完成才能渲染
    home: $Vue.defineAsyncComponent(() => import("./Home.vue")),
  },
});

// 注册VCC需要的图标组件
app.component("question-filled", QuestionFilled);
app.component("circle-plus", CirclePlus);
app.component("l-refresh", Refresh);
app.component("l-delete", Delete);
app.component("document-copy", DocumentCopy);
app.component("l-minus", Minus);

app.mount("#app");

// 内部需要同样配置的全局Vue
self.createBaseAppAsync = createBaseAppAsync;
