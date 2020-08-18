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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_load_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/load_image */ "./src/scripts/load_image.js");
/* harmony import */ var _scripts_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sprite */ "./src/scripts/sprite.js");
/* harmony import */ var _scripts_sprite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_sprite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_levels_level_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/levels/level-draw */ "./src/scripts/levels/level-draw.js");





document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementsByTagName("canvas")[0];
  var ctx = canvas.getContext("2d");
  Object(_scripts_load_image__WEBPACK_IMPORTED_MODULE_1__["loadImage"])("src/images/jungle_tileset.png").then(function (jungleImg) {
    var jungleTiles = new _scripts_sprite__WEBPACK_IMPORTED_MODULE_2___default.a(jungleImg);
    jungleTiles.create("flatGround", 0, 0);
    Object(_scripts_load_image__WEBPACK_IMPORTED_MODULE_1__["loadLevel"])("level-1").then(function (level) {
      level.backgrounds.forEach(function (bg) {
        Object(_scripts_levels_level_draw__WEBPACK_IMPORTED_MODULE_3__["drawLevel"])(bg, ctx, jungleTiles);
      });
    });
  });
});

/***/ }),

/***/ "./src/scripts/levels/level-draw.js":
/*!******************************************!*\
  !*** ./src/scripts/levels/level-draw.js ***!
  \******************************************/
/*! exports provided: drawLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLevel", function() { return drawLevel; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function drawLevel(background, context, sprites) {
  background.ranges.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
        x1 = _ref2[0],
        x2 = _ref2[1],
        y1 = _ref2[2],
        y2 = _ref2[3];

    for (var x = x1; x < x2; x++) {
      for (var y = y1; y < y2; y++) {
        sprites.draw(background.tile, context, x, y);
      }
    }
  });
}

/***/ }),

/***/ "./src/scripts/load_image.js":
/*!***********************************!*\
  !*** ./src/scripts/load_image.js ***!
  \***********************************/
/*! exports provided: loadImage, loadLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLevel", function() { return loadLevel; });
function loadImage(url) {
  /*
   * We are going to return a Promise which, when we .then
   * will give us an Image that should be fully loaded
   */
  return new Promise(function (resolve) {
    /*
     * Create the image that we are going to use to
     * to hold the resource
     */
    var image = new Image();
    /*
     * The Image API deals in even listeners and callbacks
     * we attach a listener for the "load" event which fires
     * when the Image has finished the network request and
     * populated the Image with data
     */

    image.addEventListener("load", function () {
      /*
       * You have to manually tell the Promise that you are
       * done dealing with asynchronous stuff and you are ready
       * for it to give anything that attached a callback
       * through .then a realized value.  We do that by calling
       * resolve and passing it the realized value
       */
      resolve(image);
    });
    /*
     * Setting the Image.src is what starts the networking process
     * to populate an image.  After you set it, the browser fires
     * a request to get the resource.  We attached a load listener
     * which will be called once the request finishes and we have
     * image data
     */

    image.src = url;
  });
}
function loadLevel(level) {
  return fetch("/levels/".concat(level, ".json")).then(function (response) {
    return response.json();
  });
}

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = /*#__PURE__*/function () {
  function Sprite(image, width, height) {
    _classCallCheck(this, Sprite);

    this.image = image;
    this.width = width;
    this.height = height; // this.tiles store all created sprites

    this.tiles = new Map();
  }

  _createClass(Sprite, [{
    key: "create",
    value: function create(name, x, y) {
      var ele = document.createElement('canvas');
      ele.height = this.height;
      ele.width = this.width;
      ele.getContext('2d').drawImage(this.image, this.width * x, this.height * y, this.width, this.height, 0, 0, this.width, this.height);
      this.tiles.set(name, ele);
    }
  }, {
    key: "draw",
    value: function draw(name, context, x, y) {
      var ele = this.maps.get(name);
      context.drawImage(ele, x, y);
    }
  }]);

  return Sprite;
}();

module.exports = Sprite;

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xldmVscy9sZXZlbC1kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xvYWRfaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImN0eCIsImdldENvbnRleHQiLCJsb2FkSW1hZ2UiLCJ0aGVuIiwianVuZ2xlSW1nIiwianVuZ2xlVGlsZXMiLCJTcHJpdGUiLCJjcmVhdGUiLCJsb2FkTGV2ZWwiLCJsZXZlbCIsImJhY2tncm91bmRzIiwiZm9yRWFjaCIsImJnIiwiZHJhd0xldmVsIiwiYmFja2dyb3VuZCIsImNvbnRleHQiLCJzcHJpdGVzIiwicmFuZ2VzIiwieDEiLCJ4MiIsInkxIiwieTIiLCJ4IiwieSIsImRyYXciLCJ0aWxlIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJ3aWR0aCIsImhlaWdodCIsInRpbGVzIiwiTWFwIiwibmFtZSIsImVsZSIsImNyZWF0ZUVsZW1lbnQiLCJkcmF3SW1hZ2UiLCJzZXQiLCJtYXBzIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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RixHQUFsQixFQUF1QmxCLENBQXZCLEVBQTBCQyxDQUExQjtBQUVIOzs7Ozs7QUFHTHVCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpDLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDakNBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCAnLi9zY3JpcHRzL2xvYWRfaW1hZ2UnO1xuaW1wb3J0IFNwcml0ZSBmcm9tICcuL3NjcmlwdHMvc3ByaXRlJztcbmltcG9ydCB7IGxvYWRJbWFnZSwgbG9hZExldmVsIH0gZnJvbSBcIi4vc2NyaXB0cy9sb2FkX2ltYWdlXCI7XG5pbXBvcnQge2RyYXdMZXZlbH0gZnJvbSAnLi9zY3JpcHRzL2xldmVscy9sZXZlbC1kcmF3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcblxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBsb2FkSW1hZ2UoXCJzcmMvaW1hZ2VzL2p1bmdsZV90aWxlc2V0LnBuZ1wiKS50aGVuKChqdW5nbGVJbWcpID0+IHtcbiAgICBjb25zdCBqdW5nbGVUaWxlcyA9IG5ldyBTcHJpdGUoanVuZ2xlSW1nKTtcbiAgICBqdW5nbGVUaWxlcy5jcmVhdGUoXCJmbGF0R3JvdW5kXCIsIDAsIDApO1xuXG4gICAgbG9hZExldmVsKFwibGV2ZWwtMVwiKS50aGVuKChsZXZlbCkgPT4ge1xuICAgICAgbGV2ZWwuYmFja2dyb3VuZHMuZm9yRWFjaCgoYmcpID0+IHtcbiAgICAgICAgZHJhd0xldmVsKGJnLCBjdHgsIGp1bmdsZVRpbGVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pOyIsImV4cG9ydCBmdW5jdGlvbiBkcmF3TGV2ZWwoYmFja2dyb3VuZCwgY29udGV4dCwgc3ByaXRlcykge1xuICBiYWNrZ3JvdW5kLnJhbmdlcy5mb3JFYWNoKChbeDEsIHgyLCB5MSwgeTJdKSA9PiB7XG4gICAgZm9yIChsZXQgeCA9IHgxOyB4IDwgeDI7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IHkxOyB5IDwgeTI7IHkrKykge1xuICAgICAgICBzcHJpdGVzLmRyYXcoYmFja2dyb3VuZC50aWxlLCBjb250ZXh0LCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwpIHtcbiAgLypcbiAgICogV2UgYXJlIGdvaW5nIHRvIHJldHVybiBhIFByb21pc2Ugd2hpY2gsIHdoZW4gd2UgLnRoZW5cbiAgICogd2lsbCBnaXZlIHVzIGFuIEltYWdlIHRoYXQgc2hvdWxkIGJlIGZ1bGx5IGxvYWRlZFxuICAgKi9cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLypcbiAgICAgKiBDcmVhdGUgdGhlIGltYWdlIHRoYXQgd2UgYXJlIGdvaW5nIHRvIHVzZSB0b1xuICAgICAqIHRvIGhvbGQgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAvKlxuICAgICAqIFRoZSBJbWFnZSBBUEkgZGVhbHMgaW4gZXZlbiBsaXN0ZW5lcnMgYW5kIGNhbGxiYWNrc1xuICAgICAqIHdlIGF0dGFjaCBhIGxpc3RlbmVyIGZvciB0aGUgXCJsb2FkXCIgZXZlbnQgd2hpY2ggZmlyZXNcbiAgICAgKiB3aGVuIHRoZSBJbWFnZSBoYXMgZmluaXNoZWQgdGhlIG5ldHdvcmsgcmVxdWVzdCBhbmRcbiAgICAgKiBwb3B1bGF0ZWQgdGhlIEltYWdlIHdpdGggZGF0YVxuICAgICAqL1xuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIC8qXG4gICAgICAgKiBZb3UgaGF2ZSB0byBtYW51YWxseSB0ZWxsIHRoZSBQcm9taXNlIHRoYXQgeW91IGFyZVxuICAgICAgICogZG9uZSBkZWFsaW5nIHdpdGggYXN5bmNocm9ub3VzIHN0dWZmIGFuZCB5b3UgYXJlIHJlYWR5XG4gICAgICAgKiBmb3IgaXQgdG8gZ2l2ZSBhbnl0aGluZyB0aGF0IGF0dGFjaGVkIGEgY2FsbGJhY2tcbiAgICAgICAqIHRocm91Z2ggLnRoZW4gYSByZWFsaXplZCB2YWx1ZS4gIFdlIGRvIHRoYXQgYnkgY2FsbGluZ1xuICAgICAgICogcmVzb2x2ZSBhbmQgcGFzc2luZyBpdCB0aGUgcmVhbGl6ZWQgdmFsdWVcbiAgICAgICAqL1xuICAgICAgcmVzb2x2ZShpbWFnZSk7XG4gICAgfSk7XG4gICAgLypcbiAgICAgKiBTZXR0aW5nIHRoZSBJbWFnZS5zcmMgaXMgd2hhdCBzdGFydHMgdGhlIG5ldHdvcmtpbmcgcHJvY2Vzc1xuICAgICAqIHRvIHBvcHVsYXRlIGFuIGltYWdlLiAgQWZ0ZXIgeW91IHNldCBpdCwgdGhlIGJyb3dzZXIgZmlyZXNcbiAgICAgKiBhIHJlcXVlc3QgdG8gZ2V0IHRoZSByZXNvdXJjZS4gIFdlIGF0dGFjaGVkIGEgbG9hZCBsaXN0ZW5lclxuICAgICAqIHdoaWNoIHdpbGwgYmUgY2FsbGVkIG9uY2UgdGhlIHJlcXVlc3QgZmluaXNoZXMgYW5kIHdlIGhhdmVcbiAgICAgKiBpbWFnZSBkYXRhXG4gICAgICovXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMZXZlbChsZXZlbCkge1xuICByZXR1cm4gZmV0Y2goYC9sZXZlbHMvJHtsZXZlbH0uanNvbmApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xufVxuIiwiY2xhc3MgU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIC8vIHRoaXMudGlsZXMgc3RvcmUgYWxsIGNyZWF0ZWQgc3ByaXRlc1xuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZShuYW1lLCB4LCB5KXtcbiAgICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGVsZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgZWxlLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgZWxlLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIHRoaXMud2lkdGggKiB4LFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgKiB5LFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudGlsZXMuc2V0KG5hbWUsIGVsZSlcbiAgICB9XG5cbiAgICBkcmF3KG5hbWUsIGNvbnRleHQsIHgsIHkpe1xuICAgICAgICBjb25zdCBlbGUgPSB0aGlzLm1hcHMuZ2V0KG5hbWUpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShlbGUsIHgsIHkpXG4gICAgICAgIFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==