'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/progress2.js');
var progress = require('./src/progress.js');
var progress_vue_vue_type_script_lang = require('./src/progress.vue_vue_type_script_lang.js');

const ElProgress = withInstall.withInstall(progress_vue_vue_type_script_lang["default"]);

exports.progressProps = progress.progressProps;
exports.ElProgress = ElProgress;
exports["default"] = ElProgress;
//# sourceMappingURL=index.js.map
