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

/***/ "./src/components/elements/header/index.js":
/*!*************************************************!*\
  !*** ./src/components/elements/header/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader)\n/* harmony export */ });\n/* harmony import */ var _core_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/h */ \"./src/core/h.js\");\n\nfunction renderNavBar(items) {\n  return items.map(_ref => {\n    let {\n      name,\n      href,\n      src,\n      alt\n    } = _ref;\n    return (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('li', {\n      class: 'nav-item'\n    }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('a', {\n      href,\n      class: 'nav-link'\n    }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {\n      class: 'd-flex flex-row align-items-center gap-2'\n    }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('img', {\n      src,\n      alt\n    }, []), (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {}, name)])])]);\n  });\n}\nconst items = [{\n  name: 'Map',\n  href: '#map',\n  src: './assets/icons/location.svg',\n  alt: 'map'\n}, {\n  name: 'Resume',\n  href: '#resume',\n  src: './assets/icons/menu.svg',\n  alt: 'resume'\n}, {\n  name: 'Time',\n  href: '#time',\n  src: './assets/icons/time.svg',\n  alt: 'time'\n}, {\n  name: 'Activity',\n  href: '#activity',\n  src: './assets/icons/menu.svg',\n  alt: 'activity'\n}];\nfunction renderHeader() {\n  const navbar = renderNavBar(items);\n  return (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('nav', {\n    class: 'container'\n  }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('ul', {\n    class: 'nav nav-pills mb-3'\n  }, navbar)]);\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/components/elements/header/index.js?");

/***/ }),

/***/ "./src/components/pages/activity/index.js":
/*!************************************************!*\
  !*** ./src/components/pages/activity/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderActivity: () => (/* binding */ renderActivity)\n/* harmony export */ });\n/* harmony import */ var _core_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/h */ \"./src/core/h.js\");\n\nfunction renderActivity() {\n  return (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {\n    class: 'container'\n  }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('p', {}, 'activity')]);\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/components/pages/activity/index.js?");

/***/ }),

/***/ "./src/components/pages/map/index.js":
/*!*******************************************!*\
  !*** ./src/components/pages/map/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMap: () => (/* binding */ renderMap)\n/* harmony export */ });\n/* harmony import */ var _core_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/h */ \"./src/core/h.js\");\n\nfunction renderMap(map) {\n  console.log(map);\n  return (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {\n    class: 'container'\n  }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('details', {}, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('summary', {}, 'Basic map'), (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {\n    id: 'map',\n    style: 'width: 600px; height: 300px'\n  }, [])])]);\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/components/pages/map/index.js?");

/***/ }),

/***/ "./src/components/pages/resume/index.js":
/*!**********************************************!*\
  !*** ./src/components/pages/resume/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderResume: () => (/* binding */ renderResume)\n/* harmony export */ });\n/* harmony import */ var _core_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/h */ \"./src/core/h.js\");\n\nfunction renderResume() {\n  return (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {\n    class: 'container'\n  }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {}, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('img', {\n    src: 'assets/images/photo.png',\n    alt: 'photo'\n  }, []), (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {}, 'Contacts:', [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('ul', {}, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('li', {}, '<EMAIL>'), (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('li', {}, '<EMAIL>'), (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('li', {}, '<EMAIL>')])]), (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {}, 'Skils:', [])])]);\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/components/pages/resume/index.js?");

/***/ }),

/***/ "./src/components/pages/time/index.js":
/*!********************************************!*\
  !*** ./src/components/pages/time/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTime: () => (/* binding */ renderTime)\n/* harmony export */ });\n/* harmony import */ var _core_h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/h */ \"./src/core/h.js\");\n\nfunction renderTime(time) {\n  return (0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {\n    class: 'container'\n  }, [(0,_core_h__WEBPACK_IMPORTED_MODULE_0__.h)('div', {\n    class: 'nav-link'\n  }, time.toString())]);\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/components/pages/time/index.js?");

/***/ }),

/***/ "./src/core/h.js":
/*!***********************!*\
  !*** ./src/core/h.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   h: () => (/* binding */ h)\n/* harmony export */ });\nfunction h(tag, props, children) {\n  return {\n    tag,\n    props,\n    children\n  };\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/core/h.js?");

/***/ }),

/***/ "./src/core/mount.js":
/*!***************************!*\
  !*** ./src/core/mount.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mount: () => (/* binding */ mount)\n/* harmony export */ });\nfunction mount(vnode, container) {\n  const el = document.createElement(vnode.tag);\n  for (const prop in vnode.props) {\n    el.setAttribute(prop, vnode.props[prop]);\n  }\n  if (typeof vnode.children === 'string') {\n    el.textContent = vnode.children;\n  } else if (typeof vnode.children === 'object') {\n    vnode.children.forEach(child => {\n      mount(child, el);\n    });\n  }\n  container.appendChild(el);\n  vnode.$el = el;\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/core/mount.js?");

/***/ }),

/***/ "./src/core/reactive.js":
/*!******************************!*\
  !*** ./src/core/reactive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reactive: () => (/* binding */ reactive),\n/* harmony export */   watchEffect: () => (/* binding */ watchEffect)\n/* harmony export */ });\nlet activeEffect;\nfunction watchEffect(fn) {\n  activeEffect = fn;\n  fn();\n  activeEffect = null;\n}\nclass Dependency {\n  constructor() {\n    this.subscribers = new Set();\n  }\n  depend() {\n    if (activeEffect) {\n      this.subscribers.add(activeEffect);\n    }\n  }\n  notify() {\n    this.subscribers.forEach(subscriber => subscriber());\n  }\n}\nfunction reactive(obj) {\n  Object.keys(obj).forEach(key => {\n    const dep = new Dependency();\n    let value = obj[key];\n    Object.defineProperty(obj, key, {\n      get() {\n        dep.depend();\n        return value;\n      },\n      set(newValue) {\n        if (newValue !== value) {\n          value = newValue;\n          dep.notify();\n        }\n      }\n    });\n  });\n  return obj;\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/core/reactive.js?");

/***/ }),

/***/ "./src/core/unmount.js":
/*!*****************************!*\
  !*** ./src/core/unmount.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unmount: () => (/* binding */ unmount)\n/* harmony export */ });\nfunction unmount(vnode) {\n  vnode.$el?.parentNode?.removeChild(vnode.$el);\n}\n\n//# sourceURL=webpack://single-page-application-user-page/./src/core/unmount.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_pages_resume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/resume */ \"./src/components/pages/resume/index.js\");\n/* harmony import */ var _components_pages_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/map */ \"./src/components/pages/map/index.js\");\n/* harmony import */ var _components_pages_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/time */ \"./src/components/pages/time/index.js\");\n/* harmony import */ var _core_mount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mount */ \"./src/core/mount.js\");\n/* harmony import */ var _core_unmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/unmount */ \"./src/core/unmount.js\");\n/* harmony import */ var _core_reactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/reactive */ \"./src/core/reactive.js\");\n/* harmony import */ var _components_pages_activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/activity */ \"./src/components/pages/activity/index.js\");\n/* harmony import */ var _components_elements_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/elements/header */ \"./src/components/elements/header/index.js\");\n/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ymaps */ \"./node_modules/ymaps/dist/ymaps.esm.js\");\n\n\n\n\n\n\n\n\n\nlet currentNode = (0,_components_pages_resume__WEBPACK_IMPORTED_MODULE_0__.renderResume)();\nconst header = (0,_components_elements_header__WEBPACK_IMPORTED_MODULE_7__.renderHeader)();\n(0,_core_mount__WEBPACK_IMPORTED_MODULE_3__.mount)(header, document.getElementById('header'));\n(0,_core_mount__WEBPACK_IMPORTED_MODULE_3__.mount)(currentNode, document.getElementById('main'));\nconst state = (0,_core_reactive__WEBPACK_IMPORTED_MODULE_5__.reactive)({\n  time: '0 : 0',\n  map: null\n});\nconsole.log(state.map);\nymaps__WEBPACK_IMPORTED_MODULE_8__[\"default\"].load('https://api-maps.yandex.ru/2.1/?apikey=de11de8b-11e4-432c-8abf-61be2bca4547&lang=ru_RU').then(maps => {\n  if (document.getElementById('map')) {\n    console.log(1);\n    const map = new maps.Map('map', {\n      center: [-8.369326, 115.166023],\n      zoom: 7\n    });\n    state.map = map;\n  }\n}).catch(error => console.log('Failed to load Yandex Maps', error));\nfunction getTime() {\n  const minutes = Math.floor((new Date() - new Date(sessionStorage.getItem('startTime'))) / 1000 / 60);\n  const seconds = Math.floor((new Date() - new Date(sessionStorage.getItem('startTime'))) / 1000 % 60);\n  state.time = `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;\n}\nif (sessionStorage.getItem('startTime')) {\n  getTime();\n} else {\n  const startTime = new Date();\n  sessionStorage.setItem('startTime', startTime);\n}\nfunction setTimer() {\n  return setInterval(function () {\n    getTime();\n  }, 1000);\n}\nconst timerId = setTimer();\n(0,_core_reactive__WEBPACK_IMPORTED_MODULE_5__.watchEffect)(() => {\n  const idPage = window.location.hash.replace('#', '');\n  if (idPage === 'time') {\n    (0,_core_unmount__WEBPACK_IMPORTED_MODULE_4__.unmount)(currentNode);\n    currentNode = (0,_components_pages_time__WEBPACK_IMPORTED_MODULE_2__.renderTime)(state.time);\n    (0,_core_mount__WEBPACK_IMPORTED_MODULE_3__.mount)(currentNode, document.getElementById('main'));\n  }\n});\n(0,_core_reactive__WEBPACK_IMPORTED_MODULE_5__.watchEffect)(() => {\n  console.log(11);\n  (0,_core_unmount__WEBPACK_IMPORTED_MODULE_4__.unmount)(currentNode);\n  currentNode = (0,_components_pages_map__WEBPACK_IMPORTED_MODULE_1__.renderMap)(state.map);\n  console.log(currentNode);\n  (0,_core_mount__WEBPACK_IMPORTED_MODULE_3__.mount)(currentNode, document.getElementById('main'));\n});\nwindow.addEventListener('beforeunload ', function () {\n  sessionStorage.removeItem('startTime');\n  clearInterval(timerId);\n});\nconst render = render => {\n  const newNode = render();\n  (0,_core_mount__WEBPACK_IMPORTED_MODULE_3__.mount)(newNode, document.getElementById('main'));\n  currentNode = newNode;\n};\nconst hashChange = e => {\n  const idPage = window.location.hash.replace('#', '');\n  if (currentNode) {\n    (0,_core_unmount__WEBPACK_IMPORTED_MODULE_4__.unmount)(currentNode);\n    if (idPage === 'resume') {\n      render(_components_pages_resume__WEBPACK_IMPORTED_MODULE_0__.renderResume);\n    } else if (idPage === 'map') {\n      render(() => (0,_components_pages_map__WEBPACK_IMPORTED_MODULE_1__.renderMap)(state.map));\n    } else if (idPage === 'time') {\n      render(() => (0,_components_pages_time__WEBPACK_IMPORTED_MODULE_2__.renderTime)(state.time));\n    } else if (idPage === 'activity') {\n      render(() => (0,_components_pages_activity__WEBPACK_IMPORTED_MODULE_6__.renderActivity)(state.time));\n    }\n  }\n};\nwindow.addEventListener('hashchange', hashChange);\n\n//# sourceURL=webpack://single-page-application-user-page/./src/index.js?");

/***/ }),

/***/ "./node_modules/ymaps/dist/ymaps.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/ymaps/dist/ymaps.esm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ymaps$1 = {\n  load: function load() {\n    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '//api-maps.yandex.ru/2.1/?lang=en_RU';\n\n    var getNsParamValue = function getNsParamValue() {\n      var results = src.match(/[\\\\?&]ns=([^&#]*)/);\n      return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));\n    };\n\n    if (!this.promise) {\n      this.promise = new Promise(function (resolve, reject) {\n        var scriptElement = document.createElement('script');\n        scriptElement.onload = resolve;\n        scriptElement.onerror = reject;\n        scriptElement.type = 'text/javascript';\n        scriptElement.src = src;\n        document.body.appendChild(scriptElement);\n      }).then(function () {\n        var ns = getNsParamValue();\n\n        if (ns && ns !== 'ymaps') {\n          (0, eval)(\"var ymaps = \".concat(ns, \";\"));\n        }\n\n        return new Promise(function (resolve) {\n          return ymaps.ready(resolve);\n        });\n      });\n    }\n\n    return this.promise;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ymaps$1);\n\n\n//# sourceURL=webpack://single-page-application-user-page/./node_modules/ymaps/dist/ymaps.esm.js?");

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