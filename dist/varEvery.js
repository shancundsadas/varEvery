/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _system_domOperation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system/domOperation.js */ \"./src/system/domOperation.js\");\n\r\n\r\nwindow.VarEvery = _main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n//# sourceURL=webpack://var-every/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _system_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system/common.js */ \"./src/system/common.js\");\n/* harmony import */ var _system_domOperation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system/domOperation */ \"./src/system/domOperation.js\");\n/* harmony import */ var _system_dataOperation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system/dataOperation */ \"./src/system/dataOperation.js\");\n/* harmony import */ var _system_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system/action */ \"./src/system/action.js\");\n\r\n\r\n\r\n\r\nconst apiObj = {\r\n  ..._system_domOperation__WEBPACK_IMPORTED_MODULE_1__.domOperation,\r\n  ..._system_dataOperation__WEBPACK_IMPORTED_MODULE_2__.dataOperation,\r\n  ..._system_action__WEBPACK_IMPORTED_MODULE_3__.action\r\n}\r\n\r\nclass VarEvery {\r\n\tconstructor(options = {}) {\r\n\t\t\r\n\t\t// 挂载公共方法\r\n\t\tthis.sleep = _system_common_js__WEBPACK_IMPORTED_MODULE_0__.sleep\r\n\t\t\r\n\t\t// 挂载 data 数据\r\n\t\tthis.$data = options.data;\r\n\t\tfor (let key in this.$data) {\r\n\t\t\teval('this.' + key + '=  this.$data .' + key);\r\n\t\t}\r\n\t\t// 挂载方法\r\n\t\tthis.$methods = options.methods\r\n\t\tfor (let key in this.$methods) {\r\n\t\t\teval('this.' + key + '= this.$methods.' + key);\r\n\t\t}\r\n\t\t// 立即执行函数\r\n\t\tthis.$mounted = options.mounted\r\n\t\tlet onLoad = () => {\r\n\t\t\tif (this.$mounted) {\r\n\t\t\t\tthis.$mounted()\r\n\t\t\t}\r\n\t\t}\r\n\t\tonLoad()\r\n\t}\r\n\t\r\n}\r\nObject.assign(VarEvery.prototype, apiObj)\r\nconsole.log(new VarEvery())\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VarEvery);\n\n//# sourceURL=webpack://var-every/./src/main.js?");

/***/ }),

/***/ "./src/system/VM.js":
/*!**************************!*\
  !*** ./src/system/VM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"observer\": () => (/* binding */ observer)\n/* harmony export */ });\nfunction observer(_object,_key, _dom, _template) {\r\n\t\r\n\tconst handler = {\r\n\t\tget: function(target, key) {\r\n\t\t\treturn target[key];\r\n\t\t},\r\n\t\tset: function(target, _myKey, value) {\r\n\t\t\tif (_myKey && value) {\r\n\t\t\t\t// target[key] = value\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tlet _domTemplate = _template.replace(/{{(.+?)}}/g, (match, key) => {\r\n\t\t\t\t\t\t// 说明是改变的数据量\r\n\t\t\t\t\t\tif(_key.replace(/\\s+/g, \"\") == key.replace(/\\s+/g, \"\")){\r\n\t\t\t\t\t\t\t// 判断是否为 object 类型\r\n\t\t\t\t\t\t\tif(value instanceof Object){\r\n\t\t\t\t\t\t\t\treturn value.value\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\treturn value\r\n\t\t\t\t\t\t}else{\r\n\t\t\t\t\t\t\tif(_object[key.replace(/\\s+/g, \"\")] instanceof Object){\r\n\t\t\t\t\t\t\t\treturn _object[key.replace(/\\s+/g, \"\")].value\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\treturn _object[key.replace(/\\s+/g, \"\")]\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t})\r\n\t\t\t\t\t_dom.innerHTML = _domTemplate\r\n\t\t\t\t})\r\n\t\t\t\tif(value instanceof Object){\r\n\t\t\t\t\treturn (target[_myKey] = value.value);\r\n\t\t\t\t}\r\n\t\t\t\treturn (target[_myKey] = value);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tconst inputProxy = new Proxy({}, handler);\r\n\tinputProxy.value = _object[_key]\r\n\treturn inputProxy\r\n}\n\n\n//# sourceURL=webpack://var-every/./src/system/VM.js?");

/***/ }),

/***/ "./src/system/action.js":
/*!******************************!*\
  !*** ./src/system/action.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"action\": () => (/* binding */ action)\n/* harmony export */ });\n/* harmony import */ var _domOperation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domOperation */ \"./src/system/domOperation.js\");\n\r\n// 动作操作  （点击 滑动 等）模块\r\nconst action = {\r\n\t// 滑动到dom最底部 同步\r\n\tslideDomDownSync(dom){\r\n\t\treturn new Promise(resolve => {\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\t_domOperation__WEBPACK_IMPORTED_MODULE_0__.domOperation.ifExistSync(dom).then((r) => {\r\n\t\t\t\t\tdocument.documentElement.scrollTop = r.clientHeight\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tresolve()\r\n\t\t\t\t\t}, 100)\r\n\t\t\t\t})\r\n\t\t\t}, 100)\r\n\t\t})\r\n\t},\r\n\t// 异步 滑动到底部\r\n\tslideDomDown(object){\r\n\t\treturn new Promise(resolve => {\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\t_domOperation__WEBPACK_IMPORTED_MODULE_0__.domOperation.ifExistSync(object.el).then((r) => {\r\n\t\t\t\t\tdocument.documentElement.scrollTop = r.clientHeight\r\n\t\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\t\tresolve(success())\r\n\t\t\t\t\t}, 100)\r\n\t\t\t\t})\r\n\t\t\t}, 100)\r\n\t\t})\r\n\t},\r\n\t// 滑动到底部检测 是否还有新数据  有继续加载 没有新数据则返回\r\n}\n\n//# sourceURL=webpack://var-every/./src/system/action.js?");

/***/ }),

/***/ "./src/system/common.js":
/*!******************************!*\
  !*** ./src/system/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sleep\": () => (/* binding */ sleep)\n/* harmony export */ });\nlet sleep = (time) => {\r\n\treturn new Promise(resolve => {\r\n\t\tsetTimeout(() => {\r\n\t\t\tresolve()\r\n\t\t}, time)\r\n\t})\r\n}\n\n//# sourceURL=webpack://var-every/./src/system/common.js?");

/***/ }),

/***/ "./src/system/dataOperation.js":
/*!*************************************!*\
  !*** ./src/system/dataOperation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataOperation\": () => (/* binding */ dataOperation)\n/* harmony export */ });\n// 数据操作 模块\r\nconst dataOperation = {\r\n\t// 数据保存 异步存储\r\n\tsetStorage(object = {}){\r\n\t\treturn new Promise(resolve => {\r\n\t\t\tobject.data = JSON.stringify(object.data)\r\n\t\t\tlocalStorage.setItem(object.key, object.data);\r\n\t\t\tresolve(object.success(this.$(object.el)))\r\n\t\t})\r\n\t},\r\n\t// 数据存储 同步存储\r\n\tsetStorageSync(key, data){\r\n\t\tdata = JSON.stringify(data)\r\n\t\tlocalStorage.setItem(key, data);\r\n\t},\r\n\t/* \r\n\t 循环存储到同一对象\r\n\t */\r\n\t/* \r\n\t  写入本地\r\n\t */\r\n\t/* \r\n\t\t移除数据\r\n\t */\r\n\t\r\n}\n\n//# sourceURL=webpack://var-every/./src/system/dataOperation.js?");

/***/ }),

/***/ "./src/system/domOperation.js":
/*!************************************!*\
  !*** ./src/system/domOperation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domOperation\": () => (/* binding */ domOperation)\n/* harmony export */ });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/system/common.js\");\n/* harmony import */ var _VM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VM.js */ \"./src/system/VM.js\");\n\r\n\r\nconst domOperation = {\r\n\t// 获取元素\r\n\t$(el){\r\n\t\tif (document.querySelectorAll(el).length > 1) {\r\n\t\t\treturn document.querySelectorAll(el);\r\n\t\t}\r\n\t\treturn document.querySelector(el);\r\n\t},\r\n\tifExist(object) {\r\n\t\treturn new Promise(resolve => {\r\n\t\t\tif (object.time === undefined) {\r\n\t\t\t\tobject.time = 0\r\n\t\t\t}\r\n\t\t\tlet appfun = () => {\r\n\t\t\t\tif (this.$(object.el) == null) {\r\n\t\t\t\t\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.sleep)(800).then(() => {\r\n\t\t\t\t\t\tappfun()\r\n\t\t\t\t\t})\r\n\t\t\t\t} else {\r\n\t\t\t\t\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.sleep)(object.time).then(() => {\r\n\t\t\t\t\t\tresolve(object.success(this.$(object.el)))\r\n\t\t\t\t\t})\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tappfun()\r\n\t\t})\r\n\t},\r\n\tifExistSync(el, time) {\r\n\t\treturn new Promise(resolve => {\r\n\t\t\tif (time === undefined) {\r\n\t\t\t\ttime = 0\r\n\t\t\t}\r\n\t\t\tlet appfun = () => {\r\n\t\t\t\tif (this.$(el) == null) {\r\n\t\t\t\t\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.sleep)(800).then(() => {\r\n\t\t\t\t\t\tappfun()\r\n\t\t\t\t\t})\r\n\t\t\t\t} else {\r\n\t\t\t\t\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.sleep)(time).then(() => {\r\n\t\t\t\t\t\tresolve(this.$(el))\r\n\t\t\t\t\t})\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tappfun()\r\n\t\t})\r\n\t},\r\n\t// 生成dom\r\n\tgenerateDOM(option = {}) {\r\n\t\t// 推送style\r\n\t\tif(option.style){\r\n\t\t\tlet _BFStyle = document.createElement(\"style\")\r\n\t\t\t_BFStyle.innerHTML = option.style\r\n\t\t\tdocument.head.appendChild(_BFStyle)\r\n\t\t}\r\n\t\t// 生成 dom 并实现双向绑定\r\n\t\tvar _bfDom = document.createElement(\"div\")\r\n\t\t_bfDom.id = option.id || ''\r\n\t\tvar newTemplate = option.template.replace(/{{(.+?)}}/g, (match, key) => {\r\n\t\t\t// 设置为响应数据\r\n\t\t\tthis[key.replace(/\\s+/g, \"\")] = (0,_VM_js__WEBPACK_IMPORTED_MODULE_1__.observer)(this,key.replace(/\\s+/g, \"\"),_bfDom,option.template)\r\n\t\t})\r\n\t\tdocument.body.appendChild(_bfDom)\r\n\t}\r\n}\n\n\n//# sourceURL=webpack://var-every/./src/system/domOperation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;