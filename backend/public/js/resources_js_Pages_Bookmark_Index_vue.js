(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Bookmark_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Bookmark/Index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Bookmark/Index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//import Layout from '@/Pages/Layout'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /*
  ↓この部分を削除
  components: {
      Layout,
  },
  */
  //この部分を追加
  //layout: Layout,
  props: {
    bookmarks: {
      type: Array
    }
  },
  mounted: function mounted() {
    document.title = "ブックマーク一覧";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Bookmark/Index.vue?vue&type=template&id=bbebb7fc":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Bookmark/Index.vue?vue&type=template&id=bbebb7fc ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-lg border-b p-1"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ブックマーク一覧 ");

var _hoisted_3 = {
  "class": "list-disc list-inside p-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('bookmark.index'),
    "class": "text-blue-700 underline"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.bookmarks, function (bookmark) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
      href: bookmark.url,
      target: "_blank",
      "class": "text-blue-700"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(bookmark.title), 9
    /* TEXT, PROPS */
    , ["href"])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./resources/js/Pages/Bookmark/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Bookmark/Index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_bbebb7fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=bbebb7fc */ "./resources/js/Pages/Bookmark/Index.vue?vue&type=template&id=bbebb7fc");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Bookmark/Index.vue?vue&type=script&lang=js");



_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Index_vue_vue_type_template_id_bbebb7fc__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Bookmark/Index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Bookmark/Index.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Bookmark/Index.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Bookmark/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Bookmark/Index.vue?vue&type=template&id=bbebb7fc":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Bookmark/Index.vue?vue&type=template&id=bbebb7fc ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_bbebb7fc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_bbebb7fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=bbebb7fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Bookmark/Index.vue?vue&type=template&id=bbebb7fc");


/***/ })

}]);