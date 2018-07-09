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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 350);
/******/ })
/************************************************************************/
/******/ ({

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(352);

var _wholeaccord = __webpack_require__(353);

var itemsList = [{
    title: 'Collapsible item #1',
    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
}, {
    title: 'Collapsible item #2',
    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
}, {
    title: 'Collapsible item #3',
    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
}, {
    title: 'Collapsible item #4',
    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
}, {
    title: 'Collapsible item #5',
    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
}];

var target = document.querySelector('.accordion');

for (var i = 0; i < itemsList.length; i++) {
    (0, _wholeaccord.fullAccordion)(target, itemsList[i]);
}

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve '../../assets/hw_11/fonts/iconfont/MaterialIcons-Regular.ttf' in '/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/src/hw_12'\n    at factoryCallback (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/webpack/lib/Compilation.js:282:40)\n    at factory (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/webpack/lib/NormalModuleFactory.js:237:20)\n    at resolver (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/webpack/lib/NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/webpack/lib/NormalModuleFactory.js:127:20)\n    at /Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/async/dist/async.js:3888:9\n    at /Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/async/dist/async.js:473:16\n    at iteratorCallback (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/async/dist/async.js:1062:13)\n    at /Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/async/dist/async.js:969:16\n    at /Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/async/dist/async.js:3885:13\n    at resolvers.normal.resolve (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/webpack/lib/NormalModuleFactory.js:119:22)\n    at onError (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/Resolver.js:65:10)\n    at loggingCallbackWrapper (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/tapable/lib/Tapable.js:252:11)\n    at /Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/tapable/lib/Tapable.js:252:11)\n    at innerCallback (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/Resolver.js:144:11)\n    at loggingCallbackWrapper (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/tapable/lib/Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/Resolver.js:168:10)\n    at loggingCallbackWrapper (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/jusfanio/WebstormProjects/wa_hw_AJAX_AlesiaDarsht/client/node_modules/tapable/lib/Tapable.js:252:11)");

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fullAccordion = fullAccordion;
function fullAccordion(target, items) {
    var section = document.createElement('section');
    var header = document.createElement('div');
    var content = document.createElement('div');
    var text = document.createElement('span');
    var triangleOpen = 'triangle__open';
    var triangleClose = 'triangle__close';
    var active = 'accordion__content_active';
    var activeAcordion = void 0;
    var activingAcordion = void 0;
    var activeHeader = void 0;

    section.classList.add('accordion__section');
    target.appendChild(section);

    header.classList.add('accordion__header', 'triangle__close');
    header.innerHTML = items.title;
    header.addEventListener('click', function () {
        activeAcordion = target.querySelector('.accordion__content_active');
        activeHeader = target.querySelector('.triangle__open');
        activingAcordion = content;
        if (activeAcordion === activingAcordion) {
            header.classList.remove(triangleOpen);
            header.classList.add(triangleClose);
            activingAcordion.classList.remove(active);
        } else if (activeAcordion === null) {
            header.classList.remove(triangleClose);
            header.classList.add(triangleOpen);
            activingAcordion.classList.add(active);
        } else {
            activeAcordion.classList.remove(active);
            activeHeader.classList.remove(triangleOpen);
            activeHeader.classList.add(triangleClose);
            header.classList.add(triangleOpen);
            activingAcordion.classList.add(active);
        }
    });
    section.appendChild(header);

    content.classList.add('accordion__content');
    section.appendChild(content);

    text.classList.add('accordion__content_text');
    text.innerHTML = items.text;
    content.appendChild(text);
}

/***/ })

/******/ });