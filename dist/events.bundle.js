/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/events.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createEl(htmlString, attrs, ...children) {\n  if (typeof htmlString !== \"string\") {\n    throw Error(\"Argument 'htmlString' is required and must be a string\");\n  }\n\n  const el = document.createElement(htmlString);\n\n  if (typeof attrs === \"object\") {\n    for (let key in attrs) {\n      if (key.substring(0, 2) === \"on\") {\n        el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);\n      } else if (key === \"style\") {\n        for (let rule in attrs[key]) {\n          el.style[rule] = attrs[key][rule];\n        }\n      } else {\n        el.setAttribute(key, attrs[key]);\n      }\n    }\n  }\n\n  children.forEach(function(child) {\n    let node;\n\n    if (child.constructor.name.includes(\"Element\")) {\n      node = child;\n    } else {\n      node = document.createTextNode(child);\n    }\n\n    el.appendChild(node);\n  });\n\n  return el;\n}\n\nmodule.exports = createEl;\n\n//# sourceURL=webpack:///./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/events.js":
/*!*****************************!*\
  !*** ./assets/js/events.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst createEl = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\n\nif (window.location.href.indexOf(\"event\") > -1) {\n  const currentEvent = JSON.parse(localStorage.getItem(\"currentEvent\")) || {\n      title: \"Title Placeholder\",\n      subtitle: \"\",\n      description: \"\"\n  };\n\n  const pageEl = document.querySelector(\"#page\");\n  \n  const containerEl = createEl(\"div\", {class: \"container\"},\n    createEl(\"div\", {class: \"card mb-3\"}, \n      createEl(\"img\", {class: \"card-img-top\", style: \"width: 5px\", src: currentEvent.image || \"https://via.placeholder.com/350x150\"}),\n      createEl(\"div\", {class: \"card-body\"}, \n        createEl(\"h1\", {class: \"card-title\"}, currentEvent.title || \"\"),\n        createEl(\"h2\", {class: \"text-muted\"}, currentEvent.subtitle || \"\"),\n        createEl(\"p\", {class: \"card-text mt-3\"}, currentEvent.description || createLoremIpsum(100)),\n        createEl(\"a\", {class: \"btn btn-primary\", href: \"tickets.html\"}, \"Buy Tickets\")\n      )\n    ),\n    \n  )\n  pageEl.appendChild(containerEl)\n}\n\n//# sourceURL=webpack:///./assets/js/events.js?");

/***/ })

/******/ });