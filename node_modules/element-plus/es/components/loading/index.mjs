import { Loading } from './src/service.mjs';
import { vLoading } from './src/directive.mjs';
import './src/types.mjs';

const ElLoading = {
  install(app) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading
};
const ElLoadingDirective = vLoading;
const ElLoadingService = Loading;

export { ElLoading, ElLoadingDirective, ElLoadingService, ElLoading as default };
//# sourceMappingURL=index.mjs.map
