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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst Hapi = __webpack_require__(/*! hapi */ \"hapi\");\nconst server = Hapi.server({\n    port : 8989,\n    host:'localhost'\n});\n\nconst init = async()=> {\n    await server.register(__webpack_require__(/*! inert */ \"inert\"));\n\n    server.route({\n        method:'GET',\n        path:'/css/{file*}',\n        handler:{\n            directory:{\n                path:'./public/css'\n            }\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/viewHtml',\n        handler:(request,h)=> {\n            return h.file('./public/viewHtml.html');\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/exercise',\n        handler:(request,h)=> {\n            return h.file('./public/exercise.html');\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/ajaxSync',\n        handler:(request,h)=> {\n            return h.file('./public/ajaxSync.html');\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/ajaxCallback',\n        handler:(request,h)=> {\n            return h.file('./public/ajaxCallback.html');\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/ajaxFetch',\n        handler:(request,h)=> {\n            return h.file('./public/ajaxFetch.html');\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/ajaxAwaitAsync',\n        handler:(request,h)=> {\n            return h.file('./public/ajaxAwaitAsync.html');\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/js/{file*}',\n        handler:{\n            directory:{\n                path:'./public/js'\n            }\n        }\n    });\n\n    server.route({\n        method:'GET',\n        path:'/ajaxStep{step?}',\n        handler:(request,h)=> {\n            const step=encodeURIComponent(request.params.step);\n            return h.file('./public/ajaxStep'+step+'.html');\n        }\n    });\n\n    \n    \n    server.route({\n        method:'GET',\n        path:'/',\n        handler:(request,h)=> {\n            return 'hello, world';\n        }\n    });\n    \n    server.route({\n        method:'GET',\n        path:'/result/all',\n        handler:(request,h)=> {\n            var retJson= {\n                \"items\":\n                [\n                    {\n                        \"menuName\":\"javascript\"\n                    },\n                    {\n                        \"menuName\":\"react\"\n                    },\n                    {\n                        \"menuName\":\"vue\"\n                    },\n                    {\n                        \"menuName\":\"angular\"\n                    }\n                ]\n            };\n            return retJson;\n        }\n    });\n\n    await server.start();\n    console.log(`Server running at: ${server.info.uri}`);\n};\n\nprocess.on('unhandleRejection',(err)=>{\n    console.log(err);\n    process.exit(1);\n});\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "hapi":
/*!***********************!*\
  !*** external "hapi" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hapi\");\n\n//# sourceURL=webpack:///external_%22hapi%22?");

/***/ }),

/***/ "inert":
/*!************************!*\
  !*** external "inert" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inert\");\n\n//# sourceURL=webpack:///external_%22inert%22?");

/***/ })

/******/ });