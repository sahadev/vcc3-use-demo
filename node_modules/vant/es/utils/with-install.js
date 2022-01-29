import { camelize } from './format'; // https://github.com/youzan/vant/issues/8302

export function withInstall(options) {
  options.install = app => {
    var {
      name
    } = options;
    app.component(name, options);
    app.component(camelize("-" + name), options);
  };

  return options;
}