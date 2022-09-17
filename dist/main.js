/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extinguish-view.js":
/*!********************************!*\
  !*** ./src/extinguish-view.js ***!
  \********************************/
/***/ (function(module) {

eval("// export class View\nclass View {\n  constructor(htmlEl) {\n    // this.board = board\n    this.htmlEl = htmlEl;\n    this.setUpBoard(htmlEl);\n  }\n\n  setUpBoard(htmlEl) {\n    const ul = document.createElement('ul');\n\n    for (let i = 0; i < 5; i++) {\n      for (let j = 0; j < 5; j++) {\n        let pos = [i, j];\n        let li = document.createElement('li');\n        li.dataset.id = `${JSON.stringify(pos)}`;\n        li.className = 'boardpositions';\n        li.innerText = `${pos} hopefully there are 25 but will settle for 5`;\n        ul.append(li);\n      }\n    }\n\n    ul.dataset.id = \"game-grid\";\n    htmlEl.append(ul);\n  }\n\n}\n\nmodule.exports = View;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXh0aW5ndWlzaC12aWV3LmpzLmpzIiwibmFtZXMiOlsiVmlldyIsImNvbnN0cnVjdG9yIiwiaHRtbEVsIiwic2V0VXBCb2FyZCIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsImoiLCJwb3MiLCJsaSIsImRhdGFzZXQiLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGFzc05hbWUiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRpbmd1aXNoLy4vc3JjL2V4dGluZ3Vpc2gtdmlldy5qcz8xMmQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBjbGFzcyBWaWV3XG5cbmNsYXNzIFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGh0bWxFbCl7XG4gICAgICAgIC8vIHRoaXMuYm9hcmQgPSBib2FyZFxuICAgICAgICB0aGlzLmh0bWxFbCA9IGh0bWxFbFxuICBcbiAgICAgICAgdGhpcy5zZXRVcEJvYXJkKGh0bWxFbClcblxuICAgICAgICBcbiAgICB9XG4gICAgc2V0VXBCb2FyZChodG1sRWwpIHtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBbaSwgal1cbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpLmRhdGFzZXQuaWQgPSBgJHtKU09OLnN0cmluZ2lmeShwb3MpfWBcbiAgICAgICAgICAgICAgICBsaS5jbGFzc05hbWUgPSAnYm9hcmRwb3NpdGlvbnMnXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7cG9zfSBob3BlZnVsbHkgdGhlcmUgYXJlIDI1IGJ1dCB3aWxsIHNldHRsZSBmb3IgNWBcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWwuZGF0YXNldC5pZCA9IFwiZ2FtZS1ncmlkXCJcbiAgICAgICAgaHRtbEVsLmFwcGVuZCh1bCkgICAgICAgICBcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsSUFBTixDQUFXO0VBQ1BDLFdBQVcsQ0FBQ0MsTUFBRCxFQUFRO0lBQ2Y7SUFDQSxLQUFLQSxNQUFMLEdBQWNBLE1BQWQ7SUFFQSxLQUFLQyxVQUFMLENBQWdCRCxNQUFoQjtFQUdIOztFQUNEQyxVQUFVLENBQUNELE1BQUQsRUFBUztJQUNmLE1BQU1FLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO01BQ3hCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QixJQUFJQyxHQUFHLEdBQUcsQ0FBQ0YsQ0FBRCxFQUFJQyxDQUFKLENBQVY7UUFDQSxJQUFJRSxFQUFFLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFUO1FBQ0FJLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXQyxFQUFYLEdBQWlCLEdBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxHQUFmLENBQW9CLEVBQXZDO1FBQ0FDLEVBQUUsQ0FBQ0ssU0FBSCxHQUFlLGdCQUFmO1FBQ0FMLEVBQUUsQ0FBQ00sU0FBSCxHQUFnQixHQUFFUCxHQUFJLCtDQUF0QjtRQUNBTCxFQUFFLENBQUNhLE1BQUgsQ0FBVVAsRUFBVjtNQUNIO0lBQ0o7O0lBQ0ROLEVBQUUsQ0FBQ08sT0FBSCxDQUFXQyxFQUFYLEdBQWdCLFdBQWhCO0lBQ0FWLE1BQU0sQ0FBQ2UsTUFBUCxDQUFjYixFQUFkO0VBRUg7O0FBeEJNOztBQTJCWGMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsSUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/extinguish-view.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./extinguish-view.js */ \"./src/extinguish-view.js\");\n\nconst Board = __webpack_require__(/*! ../src/scripts/board.js */ \"./src/scripts/board.js\");\n\nwindow.View = View;\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('gameboard');\n  new View(main); // console.log(\"HELP\")\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXBCOztBQUNBLE1BQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyx1REFBRCxDQUFyQjs7QUFDQUUsTUFBTSxDQUFDSCxJQUFQLEdBQWNBLElBQWQ7QUFDQUksUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixXQUF4QixDQUFiO0VBQ0EsSUFBSVAsSUFBSixDQUFTTSxJQUFULEVBRmdELENBSWhEO0FBQ0gsQ0FMRCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGluZ3Vpc2gvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBWaWV3ID0gcmVxdWlyZShcIi4vZXh0aW5ndWlzaC12aWV3LmpzXCIpXG5jb25zdCBCb2FyZCA9IHJlcXVpcmUoXCIuLi9zcmMvc2NyaXB0cy9ib2FyZC5qc1wiKVxud2luZG93LlZpZXcgPSBWaWV3O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZCcpXG4gICAgbmV3IFZpZXcobWFpbik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkhFTFBcIilcbn0pIl0sIm5hbWVzIjpbIlZpZXciLCJyZXF1aXJlIiwiQm9hcmQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module) {

eval("class Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 5; i++) {\n      // grid.push([]);\n      let row = [];\n\n      for (let j = 0; j < 5; j++) {\n        row.push(false);\n      }\n    }\n\n    return grid;\n  }\n\n}\n\nmodule.exports = Board; //not sure if this will reain static down the line, may allow variation on grid size//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm5hbWVzIjpbIkJvYXJkIiwiY29uc3RydWN0b3IiLCJncmlkIiwibWFrZUdyaWQiLCJpIiwicm93IiwiaiIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRpbmd1aXNoLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IEJvYXJkLm1ha2VHcmlkKCk7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbWFrZUdyaWQoKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgLy8gZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7XG5cblxuLy9ub3Qgc3VyZSBpZiB0aGlzIHdpbGwgcmVhaW4gc3RhdGljIGRvd24gdGhlIGxpbmUsIG1heSBhbGxvdyB2YXJpYXRpb24gb24gZ3JpZCBzaXplXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQU4sQ0FBWTtFQUNSQyxXQUFXLEdBQUc7SUFDVixLQUFLQyxJQUFMLEdBQVlGLEtBQUssQ0FBQ0csUUFBTixFQUFaO0VBQ0g7O0VBR2MsT0FBUkEsUUFBUSxHQUFHO0lBQ2QsTUFBTUQsSUFBSSxHQUFHLEVBQWI7O0lBRUEsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO01BQ3hCO01BQ0EsSUFBSUMsR0FBRyxHQUFHLEVBQVY7O01BQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO1FBQ3hCRCxHQUFHLENBQUNFLElBQUosQ0FBUyxLQUFUO01BQ0g7SUFDSjs7SUFFRCxPQUFPTCxJQUFQO0VBQ0g7O0FBbEJPOztBQXFCWk0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxLQUFqQixDLENBR0EifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRpbmd1aXNoLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;