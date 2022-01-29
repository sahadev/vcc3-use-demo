((typeof self !== 'undefined' ? self : this)["webpackJsonpvcc3"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvcc3"] || []).push([[10],{

/***/ "2e2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/RawComponents.vue?vue&type=template&id=f2d0cfa6&scoped=true&lc_id=OpUzJauqXb


const _withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-f2d0cfa6"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const _hoisted_1 = {
  lc_id: "wL/ZpJzwjh",
  class: "container"
};
const _hoisted_2 = {
  style: {
    "display": "flex"
  }
};
const _hoisted_3 = ["index", "onClick"];
const _hoisted_4 = ["src"];
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  class: "bottom-toolbar"
};

const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "main-title"
}, " Low Code Generator ", -1));

const _hoisted_8 = {
  class: "el-dropdown-link"
};

const _hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("LCG平台");

const _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("说明文档");

const _hoisted_11 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("在线沟通");

const _hoisted_12 = {
  key: 0
};
const _hoisted_13 = {
  style: {
    "margin-bottom": "10px",
    "text-align": "center"
  }
};

const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  style: {
    "padding": "5px",
    "font-size": "12px",
    "color": "grey"
  }
}, "快速查找需要的", -1));

const _hoisted_15 = {
  class: "dismiss-scroll"
};
const _hoisted_16 = ["onClick"];
const _hoisted_17 = {
  style: {
    "weight": "600",
    "font-size": "16px"
  }
};
const _hoisted_18 = {
  style: {
    "font-size": "12px",
    "color": "grey"
  }
};
const _hoisted_19 = {
  style: {
    "overflow": "scroll",
    "padding": "0 10px"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-tooltip");

  const _component_question_filled = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("question-filled");

  const _component_el_icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-icon");

  const _component_el_dropdown_item = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-dropdown-item");

  const _component_el_dropdown_menu = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-dropdown-menu");

  const _component_el_dropdown = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-dropdown");

  const _component_el_autocomplete = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("el-autocomplete");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("nav", _hoisted_2, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($data.iconArray, (item, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      index: index + '',
      onClick: $event => $options.onSelectElement(index),
      key: item.icon,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        'active': $data.currentIndex === index
      }, "main-icon-container"])
    }, [item.enable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
      key: 0,
      src: item.icon,
      class: "l-icon"
    }, null, 8, _hoisted_4)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_el_tooltip, {
      key: 1,
      class: "item",
      effect: "dark",
      content: "暂未开放，敬请期待",
      placement: "right"
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("img", {
        src: item.icon,
        class: "icon",
        style: {
          "width": "34px",
          "height": "34px"
        }
      }, null, 8, _hoisted_5)]),
      _: 2
    }, 1024))], 10, _hoisted_3);
  }), 128)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_dropdown, {
    onCommand: $options.handleCommand
  }, {
    dropdown: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_dropdown_menu, null, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_dropdown_item, null, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("基础组件数: " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.componentUnitNum), 1)]),
        _: 1
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_dropdown_item, {
        command: "lcg"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [_hoisted_9]),
        _: 1
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_dropdown_item, {
        command: "help"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [_hoisted_10]),
        _: 1
      }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_dropdown_item, {
        command: "chat"
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [_hoisted_11]),
        _: 1
      })]),
      _: 1
    })]),
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_icon, {
      style: {
        "font-size": "22px",
        "color": "#4dba87"
      }
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_question_filled)]),
      _: 1
    })])]),
    _: 1
  }, 8, ["onCommand"])])])]), $options.currentSelectBrand.titleArray && $options.currentSelectBrand.titleArray.length > 0 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("nav", _hoisted_12, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_13, [_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_el_autocomplete, {
    class: "inline-input",
    modelValue: $data.componentSearch,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.componentSearch = $event),
    "fetch-suggestions": $options.querySearch,
    size: "small",
    placeholder: "请输入...",
    onSelect: $options.handleSelect
  }, null, 8, ["modelValue", "fetch-suggestions", "onSelect"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_15, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.currentSelectBrand.titleArray, (item, index) => {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: item.title,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["second-nav", {
        'active': $options.currentSelectBrand.selectIndex === index
      }]),
      onClick: $event => $options.selectSubnav($options.currentSelectBrand, index)
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.titleChinese), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item.titleEnglish), 1)], 10, _hoisted_16);
  }), 128))])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_19, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["KeepAlive"], null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])($options.currentSelectBrand.componentName), {
    onMounted: _cache[1] || (_cache[1] = $event => $options.onMouted($data.currentIndex))
  }))], 1024))])]);
}
// CONCATENATED MODULE: ./src/components/RawComponents.vue?vue&type=template&id=f2d0cfa6&scoped=true&lc_id=OpUzJauqXb

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/rawComponents/raw/index.vue?vue&type=template&id=e69d2f74&scoped=true&lc_id=vSeYn6dQcE


const rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_withScopeId = n => (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-e69d2f74"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n);

const rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_hoisted_1 = {
  lc_id: "NahfEKxF68",
  class: "demonstration-raw"
};

const rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_hoisted_2 = /*#__PURE__*/rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_withScopeId(() => /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", {
  border: "0",
  lc_id: "RDLbKPIVyp"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
  lc_id: "riqra/6H1d"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "RhfgQCKISj"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "title",
  lc_id: "OnWMPOSYwo"
}, "div:")]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "ZOFUAuegZ7"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  lc_id: "jayChQGWVD",
  "div-lc-mark": "",
  "lc-mark": ""
})])]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
  lc_id: "i+v/R6TP05"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "wLL4oua+v6"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "title",
  lc_id: "ySJLvpCtUj"
}, "span:")]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "Wg/gdfZ1hC"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  lc_id: "m+Oy7pHzNT",
  "lc-mark": ""
}, "Span Element")])]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
  lc_id: "Ejan36KyM/"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "ke9QDthYso"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "title",
  lc_id: "V2t1JzpJnA"
}, "a（超链接）:")]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "SUPSw5gtWC"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
  "lc-mark": "",
  lc_id: "MjGtLkly03"
}, "W3School")])]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
  lc_id: "bgvuIIHVqY"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "h0nRibffcF"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "title",
  lc_id: "MxMSt/pxUC"
}, "abbr（标记缩写）:")]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "lX0P4NPEIk"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("abbr", {
  "lc-mark": "",
  title: "People's Republic of China",
  lc_id: "oFoyJEu70y"
}, "PRC")])]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
  lc_id: "inCzutb68I"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "mh8/q4jJAC"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "title",
  lc_id: "Kl4zl6s4bN"
}, "article:")]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "ylNI9kdThf"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("article", {
  lc_id: "p6pMF5D2hP"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h1", {
  "lc-mark": "",
  lc_id: "GcMEfj/r8i"
}, "Internet Explorer 9"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
  "lc-mark": "",
  lc_id: "odzwtRzLYd"
}, "Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....")])])]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
  lc_id: "sQR/stqYia"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "cw8+279Hwb"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "title",
  lc_id: "NpMarePQQF"
}, "aside:")]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "/RsZDrC6KZ"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("aside", {
  "lc-mark": "",
  lc_id: "65Oo0WGvvy"
}, "The Epcot Center is a theme park in Disney World, Florida."), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h4", {
  lc_id: "oSbd1PW0Nw",
  "lc-mark": ""
}, "Epcot Center")])]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
  lc_id: "YpolLNtaim"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "0L0kRmNEHS"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
  class: "title",
  lc_id: "lLb2wnV7cj"
}, "p:")]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
  lc_id: "E3Kwwe8iVC"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
  "lc-mark": "",
  lc_id: "t5axePjnHi"
}, "这是普通文本"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("b", {
  "lc-mark": "",
  lc_id: "MKNiVzEnZC"
}, "这是粗体文本")])])], -1));

const rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_hoisted_3 = [rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_hoisted_2];
function rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_hoisted_1, rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_hoisted_3);
}
// CONCATENATED MODULE: ./src/rawComponents/raw/index.vue?vue&type=template&id=e69d2f74&scoped=true&lc_id=vSeYn6dQcE

// EXTERNAL MODULE: ./src/utils/initRawComponent.js
var initRawComponent = __webpack_require__("aa1e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/rawComponents/raw/index.vue?vue&type=script&lang=js

/* harmony default export */ var rawvue_type_script_lang_js = ({
  data() {
    return {};
  },

  mounted() {
    this.$emit('mounted'); // 对所有拥有lc-mark的元素进行初始化

    let countComponentCount = 0;
    Object(initRawComponent["a" /* deepLCEle */])(document.querySelector('.demonstration-raw'), () => {
      countComponentCount++;
    });
  },

  methods: {}
});
// CONCATENATED MODULE: ./src/rawComponents/raw/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/rawComponents/raw/index.vue?vue&type=style&index=0&id=e69d2f74&scoped=true&lang=css
var rawvue_type_style_index_0_id_e69d2f74_scoped_true_lang_css = __webpack_require__("cb13");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/rawComponents/raw/index.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(rawvue_type_script_lang_js, [['render',rawvue_type_template_id_e69d2f74_scoped_true_lc_id_vSeYn6dQcE_render],['__scopeId',"data-v-e69d2f74"]])

/* harmony default export */ var raw = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/RawComponents.vue?vue&type=script&lang=js
// import iview from "../rawComponents/iview";
// import quasar from "../rawComponents/quasar";


/* harmony default export */ var RawComponentsvue_type_script_lang_js = ({
  data() {
    return {
      activeName: "0",
      componentSearch: '',
      iconArray: [{
        icon: 'https://static.imonkey.xueersi.com/download/vcc-resource/logo/html-n.png',
        clickCallback: this.onSelectElement,
        className: "demonstration-raw",
        enable: true,
        componentName: 'raw',
        titleArray: []
      }, {
        icon: 'https://static.imonkey.xueersi.com/download/vcc-resource/logo/element-n.png',
        clickCallback: this.onSelectElement,
        className: "demonstration-element",
        selectIndex: 0,
        componentName: 'ele',
        enable: true,
        titleArray: []
      }, {
        icon: 'https://static.imonkey.xueersi.com/download/vcc-resource/logo/vant-n.png',
        clickCallback: this.onSelectElement,
        className: "demonstration-vant",
        selectIndex: 0,
        componentName: 'vant',
        enable: true,
        titleArray: [],
        enable: true
      }, {
        icon: 'https://static.imonkey.xueersi.com/download/vcc-resource/logo/iview-n.png',
        enable: false
      }, {
        icon: 'https://static.imonkey.xueersi.com/download/vcc-resource/logo/quasar-n.png',
        enable: false
      }, {
        icon: 'https://static.imonkey.xueersi.com/download/vcc-resource/logo/antd-n.svg',
        // 组件库导航图标
        clickCallback: this.onSelectElement,
        // 图标点击回调
        className: "demonstration-antd",
        // 组件索引标题class。用来搜集标题供快速导航
        selectIndex: 0,
        // 默认选中基础组件索引
        componentName: 'antd',
        // 动态组件名称
        enable: true,
        // 是否可用
        titleArray: [] // 快速索引标题，默认为空，VCC会自动按照className搜集快速索引标题。

      }],
      currentIndex: 0
    };
  },

  methods: {
    querySearch(queryString, cb) {
      const result = queryString ? this.currentSelectBrand.titleArray.filter(item => {
        return item.titleChinese.indexOf(queryString) >= 0 || item.titleEnglish && item.titleEnglish.toLowerCase().indexOf(queryString.toLowerCase()) >= 0;
      }) : this.currentSelectBrand.titleArray;
      cb(result.map(item => {
        return {
          value: item.titleChinese + ' ' + item.titleEnglish,
          element: item.element
        };
      }));
    },

    scrollTo(item) {
      item.element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    },

    handleSelect(item) {
      this.scrollTo(item);
    },

    handleCommand(command) {
      if (command === 'help') {
        window.open('/doc');
      } else if (command === 'chat') {
        window.open('https://gitter.im/low_code_generator/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link');
      } else if (command == 'lcg') {
        window.open('https://lcg.sahadev.tech');
      }
    },

    onSelectElement(index) {
      if (this.iconArray[index].enable) {
        this.currentIndex = index;
      }
    },

    onMouted(index) {
      this.initOnly(this.iconArray[index]);
    },

    selectSubnav(obj, index) {
      obj.selectIndex = index;
      this.scrollTo(obj.titleArray[index]);
    },

    init() {
      this.initOnly(this.iconArray[0]);
    },

    /**
     * 初始化组件导航栏，只有2个及以上的组件类才会出现
     */
    initOnly(mountedObject) {
      const titles = document.getElementsByClassName(mountedObject.className);

      if (titles.length > 1) {
        for (let i = 0; i < titles.length; i++) {
          const element = titles[i];
          const arr = element.textContent.split(' ');
          mountedObject.titleArray.push({
            titleChinese: arr.length === 2 ? arr[1] : arr[0],
            titleEnglish: arr.length === 1 ? null : arr[0],
            element: element
          });
        }
      } else if (titles.length === 1) {
        mountedObject.onlyTitle = {
          element: titles[0]
        };
      }
    }

  },

  created() {},

  mounted() {
    this.init();
  },

  computed: {
    currentSelectBrand() {
      return this.iconArray[this.currentIndex];
    },

    componentUnitNum() {
      return 0;
    }

  },
  watch: {
    currentIndex() {
      // 对没有二级菜单的选项来说
      if (this.currentSelectBrand.onlyTitle) {
        this.scrollTo(this.currentSelectBrand.onlyTitle);
      }
    }

  },
  components: {
    raw: raw,
    vant: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineAsyncComponent"])(() => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "2f53"))),
    // iview,
    // quasar,
    ele: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineAsyncComponent"])(() => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "4a71"))),
    antd: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineAsyncComponent"])(() => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "24bd")))
  }
});
// CONCATENATED MODULE: ./src/components/RawComponents.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/RawComponents.vue?vue&type=style&index=0&id=f2d0cfa6&scoped=true&lang=scss
var RawComponentsvue_type_style_index_0_id_f2d0cfa6_scoped_true_lang_scss = __webpack_require__("f943");

// CONCATENATED MODULE: ./src/components/RawComponents.vue







const RawComponents_exports_ = /*#__PURE__*/exportHelper_default()(RawComponentsvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-f2d0cfa6"]])

/* harmony default export */ var RawComponents = __webpack_exports__["default"] = (RawComponents_exports_);

/***/ }),

/***/ "4d83":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dbce");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2e5da8ce", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "51da":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title[data-v-e69d2f74]{width:120px}.demonstration-raw[data-v-e69d2f74]{padding:10px 0}[div-lc-mark][data-v-e69d2f74]{border:1px dashed grey;min-height:1rem;border-radius:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "aa1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepLCEle; });
/* unused harmony export initElement */
/* harmony import */ var _forCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d762");
 // 遍历DOM树，初始化lc-mark标记的元素

function deepLCEle(rootElement, onCountIncrease = () => {}) {
  // 对dragParent下所有含有lc-mark属性的Element实现可拖拽能力
  function deep(ele) {
    if (ele.attributes["lc-mark"]) {
      // 统计标记组件数量
      onCountIncrease();
      initElement(ele);
    }

    if (ele.children.length > 0) {
      const length = ele.children.length;

      for (let i = 0; i < length; i++) {
        deep(ele.children.item(i));
      }
    }
  }

  deep(rootElement);
} // 对组件初始化，使组件可以拖拽

function initElement(element) {
  element.draggable = true; // 给每个组件添加拖拽事件

  element.addEventListener("dragstart", function (event) {
    event.dataTransfer.effectAllowed = "copy";
    const raw = Object(_forCode__WEBPACK_IMPORTED_MODULE_0__[/* generateRawInfo */ "c"])(element);
    const str = `${element.localName}${Object(_forCode__WEBPACK_IMPORTED_MODULE_0__[/* getSplitTag */ "d"])()}${element.innerText}${Object(_forCode__WEBPACK_IMPORTED_MODULE_0__[/* getSplitTag */ "d"])()}${0}${Object(_forCode__WEBPACK_IMPORTED_MODULE_0__[/* getSplitTag */ "d"])()}${element.style.cssText}${Object(_forCode__WEBPACK_IMPORTED_MODULE_0__[/* getSplitTag */ "d"])()}${JSON.stringify(raw)}`;
    event.dataTransfer.setData("text/plain", str);
    event.stopPropagation();
  }); // 处理组件标记

  element.addEventListener("mouseenter", event => {
    const parentClassList = element.parentElement.classList;

    if (parentClassList && parentClassList.contains("mark-element-unit")) {
      parentClassList.remove("mark-element-unit");
      element.isRemoveParentStyle = true;
    }

    element.classList.add("mark-element-unit");
    event.stopPropagation();
  });
  element.addEventListener("mouseleave", event => {
    element.classList.remove("mark-element-unit");

    if (element.isRemoveParentStyle) {
      element.parentElement.classList.add("mark-element-unit");
    }

    event.stopPropagation();
  });
}

/***/ }),

/***/ "b81b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("51da");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ff908e82", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "cb13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_e69d2f74_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b81b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_e69d2f74_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_e69d2f74_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dbce":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-f2d0cfa6],nav[data-v-f2d0cfa6]{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}nav[data-v-f2d0cfa6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-right:1px solid #f0f0f0}.second-nav[data-v-f2d0cfa6]{padding:10px 15px;width:130px}.second-nav[data-v-f2d0cfa6]:hover{background-color:#ecf5ff;border-radius:5px;color:#409eff}.l-icon[data-v-f2d0cfa6]{width:34px;height:34px;border-radius:5px}.main-icon-container[data-v-f2d0cfa6]{padding:10px;line-height:0}.main-icon-container[data-v-f2d0cfa6]:hover{background:#ecf5ff;border-radius:5px}.active[data-v-f2d0cfa6]{border-right:3px solid #13ce66;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}[data-v-f2d0cfa6]:v-deep(.el-submenu__title){padding:0 15px!important}.dismiss-scroll[data-v-f2d0cfa6]{overflow:scroll}[data-v-f2d0cfa6]::-webkit-scrollbar{display:none}.main-title[data-v-f2d0cfa6]{font-size:32px;font-weight:700;color:#4dba87;-webkit-transform:rotate(-90deg) translateY(29px);transform:rotate(-90deg) translateY(29px);white-space:nowrap;position:absolute;left:0;height:80px;line-height:80px;-webkit-transform-origin:0 50%;transform-origin:0 50%}.subtitle[data-v-f2d0cfa6]{font-size:14px;font-weight:700;margin-left:20px}.bottom-toolbar[data-v-f2d0cfa6]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;padding:20px 0}@-webkit-keyframes twinkling-f2d0cfa6{0%{opacity:0}to{opacity:1}}.el-icon-question[data-v-f2d0cfa6]{-webkit-animation:twinkling-f2d0cfa6 1s ease-in-out infinite alternate}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f943":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_RawComponents_vue_vue_type_style_index_0_id_f2d0cfa6_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4d83");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_RawComponents_vue_vue_type_style_index_0_id_f2d0cfa6_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_RawComponents_vue_vue_type_style_index_0_id_f2d0cfa6_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);