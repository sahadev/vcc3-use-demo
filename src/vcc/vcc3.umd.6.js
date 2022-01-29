((typeof self !== 'undefined' ? self : this)["webpackJsonpvcc3"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvcc3"] || []).push([[6],{

/***/ "09ba":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-4383f823]:v-deep(.el-dialog__body){padding:0 30px!important}.round-icon[data-v-4383f823]{background:#4dba87;width:40px;height:40px;border-radius:20px;padding:10px;margin-left:10px;-webkit-box-sizing:border-box;box-sizing:border-box}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1afb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".CodeMirror{min-height:50vh}.CodeMirror,.vue-codemirror{height:100%!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1cf6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Code.vue?vue&type=template&id=4383f823&scoped=true


const _withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-4383f823"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  style: {
    "color": "#666",
    "font-size": "12px",
    "text-align": "center",
    "margin": "5px"
  }
}, "使用代码前请确认相应的组件库已集成至项目", -1));

const _hoisted_2 = {
  style: {
    "text-align": "center"
  }
};

const _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" 输出形式： ");

const _hoisted_4 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Vue");

const _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("单页Html");

const _hoisted_6 = ["src"];
const _hoisted_7 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CodeEditor = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CodeEditor");

  const _component_el_radio = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-radio");

  const _component_el_radio_group = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-radio-group");

  const _component_el_col = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-col");

  const _component_el_tooltip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-tooltip");

  const _component_el_row = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-row");

  const _component_el_dialog = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-dialog");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_el_dialog, {
    title: "代码预览",
    modelValue: $props.codeDialogVisible,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $props.codeDialogVisible = $event),
    width: "70%",
    top: "10vh",
    "before-close": $options.handleClose,
    center: true
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [$props.codeDialogVisible ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_CodeEditor, {
      key: 0,
      style: {
        "max-height": "65vh"
      },
      ref: "codeEditor",
      initCode: $options.outputCode,
      mode: "text/html"
    }, null, 8, ["initCode"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_row, null, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_col, {
        span: 12
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_radio_group, {
          modelValue: $data.outputMode,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.outputMode = $event)
        }, {
          default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_radio, {
            label: "vue"
          }, {
            default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [_hoisted_4]),
            _: 1
          }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_radio, {
            label: "html"
          }, {
            default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [_hoisted_5]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_col, {
        span: 12
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_tooltip, {
          effect: "dark",
          content: "拷贝",
          placement: "left"
        }, {
          default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
            class: "round-icon",
            src: $data.iconCopy,
            alt: "",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.copyCheck && $options.copyCheck(...args))
          }, null, 8, _hoisted_6)]),
          _: 1
        }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_tooltip, {
          effect: "dark",
          content: "下载",
          placement: "right"
        }, {
          default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
            class: "round-icon",
            src: $data.iconDownload,
            alt: "",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.download && $options.download(...args))
          }, null, 8, _hoisted_7)]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })])]),
    _: 1
  }, 8, ["modelValue", "before-close"]);
}
// CONCATENATED MODULE: ./src/components/Code.vue?vue&type=template&id=4383f823&scoped=true

// EXTERNAL MODULE: ./src/components/prism.css
var prism = __webpack_require__("81c5");

// EXTERNAL MODULE: ./node_modules/prettier/standalone.js
var standalone = __webpack_require__("325b");
var standalone_default = /*#__PURE__*/__webpack_require__.n(standalone);

// EXTERNAL MODULE: ./node_modules/prettier/parser-html.js
var parser_html = __webpack_require__("9a5d");
var parser_html_default = /*#__PURE__*/__webpack_require__.n(parser_html);

// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__("f904");
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);

// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__("21a6");

// EXTERNAL MODULE: ./src/components/CodeEditor.vue + 4 modules
var CodeEditor = __webpack_require__("864f");

// EXTERNAL MODULE: ./node_modules/vue-template-compiler/browser.js
var browser = __webpack_require__("5ce8");

// CONCATENATED MODULE: ./src/libs/singleIndexOutput.js

const outputVue2Template = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>VCC预览</title>
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <style stype="text/css">#styleTemplate</style>
</head>
<body>
  <div id="app">
    #templateHolder
  </div>
</body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script>
    new Vue(#logicHolder).$mount("#app");
  </script>
</html>`;
/* harmony default export */ var singleIndexOutput = (function (vueCode) {
  const {
    template,
    script,
    styles,
    customBlocks
  } = Object(browser["parseComponent"])(vueCode);
  let newScript = script.content.replace(/\s*export default\s*/, "");
  let output = outputVue2Template;
  output = output.replace("#templateHolder", template.content);
  output = output.replace("#logicHolder", newScript);
  output = output.replace("#styleTemplate", styles[0].content);
  return output;
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Code.vue?vue&type=script&lang=js







/* harmony default export */ var Codevue_type_script_lang_js = ({
  props: ['rawCode', 'codeDialogVisible'],
  components: {
    CodeEditor: CodeEditor["a" /* default */]
  },

  data() {
    return {
      // 在此自动生成
      outputMode: "vue",
      iconCopy: "https://static.imonkey.xueersi.com/download/vcc-resource/icon/copy-outline.svg",
      iconDownload: "https://static.imonkey.xueersi.com/download/vcc-resource/icon/code-download-outline.svg"
    };
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  destoryed() {},

  methods: {
    // 在此自动生成
    request() {// 网络请求，可选
    },

    handleClose() {
      this.$emit("update:codeDialogVisible", false);
    },

    copyCheck() {
      this.copy();
    },

    copy() {
      if (copy_to_clipboard_default()(this.outputCode)) {
        this.$message.success("代码已复制到剪贴板");
      } else {
        this.$message.error("代码复制有点问题?");
      }
    },

    download() {
      let blob = new Blob([this.outputCode], {
        type: "text/plain;charset=utf-8"
      });

      if (this.isVueMode) {
        Object(FileSaver_min["saveAs"])(blob, "VueComponent.vue");
      } else {
        Object(FileSaver_min["saveAs"])(blob, "vcc.html");
      }
    }

  },
  watch: {
    codeDialogVisible(newValue) {
      if (newValue) {} else {}
    }

  },
  computed: {
    isVueMode() {
      return this.outputMode === 'vue';
    },

    outputCode() {
      return this.isVueMode ? this.prettyCode : this.singleIndex;
    },

    prettyCode() {
      try {
        return standalone_default.a.format(this.rawCode, {
          parser: "html",
          plugins: [parser_html_default.a],
          vueIndentScriptAndStyle: true
        });
      } catch (error) {
        return this.rawCode;
      }
    },

    singleIndex() {
      const htmlCode = singleIndexOutput(this.rawCode);

      try {
        return standalone_default.a.format(htmlCode, {
          parser: "html",
          plugins: [parser_html_default.a],
          vueIndentScriptAndStyle: true
        });
      } catch (error) {
        return htmlCode;
      }
    }

  },
  fillter: {}
});
// CONCATENATED MODULE: ./src/components/Code.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/Code.vue?vue&type=style&index=0&id=4383f823&scoped=true&lang=css
var Codevue_type_style_index_0_id_4383f823_scoped_true_lang_css = __webpack_require__("2f91");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/Code.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(Codevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-4383f823"]])

/* harmony default export */ var Code = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "259b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1afb");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3204fb48", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "288d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CodeEditor_vue_vue_type_style_index_1_id_3d215b04_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("259b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CodeEditor_vue_vue_type_style_index_1_id_3d215b04_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CodeEditor_vue_vue_type_style_index_1_id_3d215b04_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2f91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Code_vue_vue_type_style_index_0_id_4383f823_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8193");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Code_vue_vue_type_style_index_0_id_4383f823_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_Code_vue_vue_type_style_index_0_id_4383f823_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5fb3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "code,pre{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}pre{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code,pre{background:#272822}:not(pre)>code{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#f8f8f2}.token.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8193":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("09ba");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4f9deb42", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "81c5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5fb3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2252d9dc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "864f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/CodeEditor.vue?vue&type=template&id=3d215b04&scoped=true


const _withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-3d215b04"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const _hoisted_1 = {
  class: "codemirror"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_codemirror = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("codemirror");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_codemirror, {
    value: $options.code,
    "onUpdate:value": _cache[0] || (_cache[0] = $event => $options.code = $event),
    options: $data.cmOption,
    onCursorActivity: $options.onCmCursorActivity,
    onReady: $options.onCmReady,
    onFocus: $options.onCmFocus,
    onBlur: $options.onCmBlur
  }, null, 8, ["value", "options", "onCursorActivity", "onReady", "onFocus", "onBlur"])]);
}
// CONCATENATED MODULE: ./src/components/CodeEditor.vue?vue&type=template&id=3d215b04&scoped=true

// EXTERNAL MODULE: ./node_modules/codemirror-editor-vue3/dist/codemirror-editor-vue3.es.js
var codemirror_editor_vue3_es = __webpack_require__("a29d");

// EXTERNAL MODULE: ./node_modules/codemirror/lib/codemirror.css
var codemirror = __webpack_require__("a7be");

// EXTERNAL MODULE: ./node_modules/codemirror/theme/monokai.css
var monokai = __webpack_require__("7a7a");

// EXTERNAL MODULE: ./node_modules/codemirror/mode/vue/vue.js
var vue = __webpack_require__("693d");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/selection/active-line.js
var active_line = __webpack_require__("31c5");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/selection/mark-selection.js
var mark_selection = __webpack_require__("9948");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/search/searchcursor.js
var searchcursor = __webpack_require__("b933");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/scroll/annotatescrollbar.js
var annotatescrollbar = __webpack_require__("9c7b");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/search/matchesonscrollbar.js
var matchesonscrollbar = __webpack_require__("715d");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/search/match-highlighter.js
var match_highlighter = __webpack_require__("23de");

// EXTERNAL MODULE: ./node_modules/codemirror/mode/clike/clike.js
var clike = __webpack_require__("4ba6");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/edit/matchbrackets.js
var matchbrackets = __webpack_require__("8c33");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/comment/comment.js
var comment = __webpack_require__("7289");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/dialog/dialog.js
var dialog = __webpack_require__("2aed");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/dialog/dialog.css
var dialog_dialog = __webpack_require__("d72f");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/search/search.js
var search = __webpack_require__("0b6c");

// EXTERNAL MODULE: ./node_modules/codemirror/keymap/sublime.js
var sublime = __webpack_require__("9a48");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/foldgutter.css
var foldgutter = __webpack_require__("697e");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/brace-fold.js
var brace_fold = __webpack_require__("aedd");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/comment-fold.js
var comment_fold = __webpack_require__("164b");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/foldcode.js
var foldcode = __webpack_require__("4895");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/foldgutter.js
var fold_foldgutter = __webpack_require__("cbc8");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/indent-fold.js
var indent_fold = __webpack_require__("8d70");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/markdown-fold.js
var markdown_fold = __webpack_require__("9f09");

// EXTERNAL MODULE: ./node_modules/codemirror/addon/fold/xml-fold.js
var xml_fold = __webpack_require__("a2c1");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/CodeEditor.vue?vue&type=script&lang=js
 // base style

 // theme css

 // language

 // active-line.js

 // styleSelectedText


 // highlightSelectionMatches




 // keyMap








 // foldGutter










/* harmony default export */ var CodeEditorvue_type_script_lang_js = ({
  props: ['initCode', 'mode'],
  name: 'code-editor',
  title: 'Mode: text/x-vue & Theme: monokai',
  components: {
    Codemirror: codemirror_editor_vue3_es["a" /* default */]
  },

  created() {
    self.axios = axios_default.a.create({
      baseURL: '',
      timeout: 1000
    });
  },

  computed: {
    code: {
      get() {
        return this.codeStore;
      },

      set(newVal) {
        this.codeStore = newVal;
      }

    }
  },
  watch: {
    initCode() {
      this.codeStore = this.initCode;
    }

  },

  data() {
    return {
      codeStore: this.initCode,
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: "sublime",
        mode: this.mode,
        theme: 'monokai',
        extraKeys: {
          'F11'(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },

          'Esc'(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }

        }
      }
    };
  },

  methods: {
    onCmCursorActivity(codemirror) {},

    onCmReady(codemirror) {},

    onCmFocus(codemirror) {},

    onCmBlur(codemirror) {},

    getEditorCode() {
      return this.codeStore;
    }

  }
});
// CONCATENATED MODULE: ./src/components/CodeEditor.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/CodeEditor.vue?vue&type=style&index=0&id=3d215b04&lang=scss&scoped=true
var CodeEditorvue_type_style_index_0_id_3d215b04_lang_scss_scoped_true = __webpack_require__("c65b");

// EXTERNAL MODULE: ./src/components/CodeEditor.vue?vue&type=style&index=1&id=3d215b04&lang=css
var CodeEditorvue_type_style_index_1_id_3d215b04_lang_css = __webpack_require__("288d");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/CodeEditor.vue








const __exports__ = /*#__PURE__*/exportHelper_default()(CodeEditorvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-3d215b04"]])

/* harmony default export */ var CodeEditor = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "b2f6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".codemirror[data-v-3d215b04],.pre[data-v-3d215b04]{height:100%;margin:0;overflow:auto}.pre[data-v-3d215b04]{display:block;padding:1rem;font-size:14px;line-height:1.6;word-break:break-all;word-wrap:break-word}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c264":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b2f6");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("991ba712", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c65b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CodeEditor_vue_vue_type_style_index_0_id_3d215b04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c264");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CodeEditor_vue_vue_type_style_index_0_id_3d215b04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_CodeEditor_vue_vue_type_style_index_0_id_3d215b04_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);