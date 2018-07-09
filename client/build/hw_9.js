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
/******/ 	return __webpack_require__(__webpack_require__.s = 357);
/******/ })
/************************************************************************/
/******/ ({

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(359);

__webpack_require__(360);

var _calc = __webpack_require__(361);

var _getMaxOfArray = __webpack_require__(362);

// Task number 4

var myEmployeeList = {
    'John': '400',
    'Jack': 20000,
    'test': 'asdasdasd'
};

console.log('Task #4: total amount of salaries:', (0, _calc.calc)(myEmployeeList));

// Task number 5


var salaries = {
    'Jonathan Doe': 'j100',
    'Emiliano Francesco': 'd500',
    'Matteo Siberian': 10000,
    'John Snow': 290,
    'Cat': '120',
    'Rebecca Doe': 1500
};

console.log('Task #5: the richest man is:', (0, _getMaxOfArray.getMaxOfArray)(salaries));

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var user = {
    name: 'Alesia',
    age: '26',
    title: 'Hello'
};

function isEmpty(someObject) {
    var counter = 0;

    for (var key in someObject) {
        counter = counter + 1;
        // console.log('KEY:', key)
        // console.log('VALUE:', user[key])
    }

    // if(counter > 0) {
    //     console.log('Object is not empty');
    // } else {
    //     console.log('Object is empty');
    // }

    return counter === 0;
}

// isEmpty(user);
// isEmpty({title: 'Hello'});
// isEmpty({});

var empty = isEmpty({});
console.log(empty);
// const name = prompt('Enter your name', '');
// console.log('name');

if (empty) {
    console.error('Hey! Object is empty!');
}

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calc = calc;
// const salaries = {
//     'John Doe': 10000,
//     'Jonathan Doe': 100,
//     'Celine Adams': 500,
// }

function calc(employeeList) {
    var total = 0;

    for (var key in employeeList) {
        // const salaryAmount = parseFloat(employeeList[key]);
        var salaryAmount = Number(employeeList[key]);

        if (!isNaN(salaryAmount)) {
            total = total + salaryAmount;
        } else {
            console.warn('Salary amount is NaN', employeeList[key]);
        }
    }

    return total;
}

// console.log(calc(salaries));

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMaxOfArray = getMaxOfArray;
function getMaxOfArray(numArray) {
    var max = 0;

    for (var key in numArray) {
        var maxAmount = Number(numArray[key]);

        if (!isNaN(maxAmount)) {
            max = Math.max.apply(Math, maxAmount[key]);
            return max;
        } else {
            console.warn('Нет зарплаты:', maxAmount);
        }
    }
}

/***/ })

/******/ });