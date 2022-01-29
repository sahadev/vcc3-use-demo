'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/drawer2.js');
var drawer = require('./src/drawer.js');
var drawer_vue_vue_type_script_lang = require('./src/drawer.vue_vue_type_script_lang.js');

const ElDrawer = withInstall.withInstall(drawer_vue_vue_type_script_lang["default"]);

exports.drawerEmits = drawer.drawerEmits;
exports.drawerProps = drawer.drawerProps;
exports.ElDrawer = ElDrawer;
exports["default"] = ElDrawer;
//# sourceMappingURL=index.js.map
