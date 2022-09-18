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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// export class View\nconst Board = __webpack_require__(/*! ../src/scripts/board.js */ \"./src/scripts/board.js\");\n\nclass View {\n  constructor(htmlEl, board) {\n    this.board = new board();\n    this.htmlEl = htmlEl;\n    this.setUpBoard(htmlEl);\n  }\n\n  setUpBoard(htmlEl) {\n    const ul = document.createElement('ul');\n    this.board.grid.forEach((row, rIdx) => {\n      row.forEach((tile, cIdx) => {\n        let state = tile;\n        let pos = [rIdx, cIdx];\n        let li = document.createElement('li');\n        li.dataset.id = `${JSON.stringify(pos)}`; // li.className = `${state}`\n\n        li.classList.add(`${state}`, 'boardpositions');\n\n        if (li.classList.contains('false')) {\n          li.innerText = `${state}`;\n        } else {\n          li.innerText = `${Board.marks[1]}`;\n        }\n\n        ul.append(li);\n      });\n    });\n    ul.dataset.id = \"game-grid\";\n    htmlEl.append(ul);\n  }\n\n  userClick(e) {\n    let tile = e.target;\n\n    if (tile.status === false) {\n      tile.status = true;\n    } else {\n      tile.status = false;\n    }\n  } // toggleTile()\n\n\n}\n\nmodule.exports = View; // console.log(row)\n// let pos = col\n// // let pos = [row, col]\n// // debugger\n// let li = document.createElement('li');\n// li.dataset.id = `${JSON.stringify([row, col])}`\n// li.dataset.id = `${JSON.stringify((pos[0],pos[1]))}`\n// li.className = 'boardpositions'\n// li.innerText = `${pos}`\n// ul.append(li) \n// for (let i = 0; i < 5; i++) {\n//     for (let j = 0; j < 5; j++) {\n//         let pos = [i, j]\n//         let li = document.createElement('li');\n//         li.dataset.id = `${JSON.stringify(pos)}`\n//         li.className = 'boardpositions'\n//         li.innerText = `${pos}` //hopefully there are 25 but will settle for 5`\n//         ul.append(li)\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXh0aW5ndWlzaC12aWV3LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHVEQUFELENBQXJCOztBQUVBLE1BQU1DLElBQU4sQ0FBVztFQUNQQyxXQUFXLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFlO0lBQ3RCLEtBQUtBLEtBQUwsR0FBYSxJQUFJQSxLQUFKLEVBQWI7SUFDQSxLQUFLRCxNQUFMLEdBQWNBLE1BQWQ7SUFFQSxLQUFLRSxVQUFMLENBQWdCRixNQUFoQjtFQUdIOztFQUdERSxVQUFVLENBQUNGLE1BQUQsRUFBUztJQUNmLE1BQU1HLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7SUFDQSxLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0JDLE9BQWhCLENBQXlCLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlO01BQ3BDRCxHQUFHLENBQUNELE9BQUosQ0FBWSxDQUFDRyxJQUFELEVBQU9DLElBQVAsS0FBZ0I7UUFDeEIsSUFBSUMsS0FBSyxHQUFHRixJQUFaO1FBQ0EsSUFBSUcsR0FBRyxHQUFHLENBQUNKLElBQUQsRUFBT0UsSUFBUCxDQUFWO1FBQ0EsSUFBSUcsRUFBRSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtRQUNBUyxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsRUFBWCxHQUFpQixHQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsR0FBZixDQUFvQixFQUF2QyxDQUp3QixDQUt4Qjs7UUFDQUMsRUFBRSxDQUFDSyxTQUFILENBQWFDLEdBQWIsQ0FBa0IsR0FBRVIsS0FBTSxFQUExQixFQUE2QixnQkFBN0I7O1FBQ0EsSUFBSUUsRUFBRSxDQUFDSyxTQUFILENBQWFFLFFBQWIsQ0FBc0IsT0FBdEIsQ0FBSixFQUFtQztVQUMvQlAsRUFBRSxDQUFDUSxTQUFILEdBQWdCLEdBQUVWLEtBQU0sRUFBeEI7UUFDSCxDQUZELE1BRU87VUFDSEUsRUFBRSxDQUFDUSxTQUFILEdBQWdCLEdBQUUxQixLQUFLLENBQUMyQixLQUFOLENBQVksQ0FBWixDQUFlLEVBQWpDO1FBQ0g7O1FBQ0RwQixFQUFFLENBQUNxQixNQUFILENBQVVWLEVBQVY7TUFDSCxDQWJEO0lBY0gsQ0FmRDtJQWdCQVgsRUFBRSxDQUFDWSxPQUFILENBQVdDLEVBQVgsR0FBZ0IsV0FBaEI7SUFDQWhCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBY3JCLEVBQWQ7RUFFSDs7RUFHRHNCLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFHO0lBQ1IsSUFBSWhCLElBQUksR0FBR2dCLENBQUMsQ0FBQ0MsTUFBYjs7SUFDQSxJQUFJakIsSUFBSSxDQUFDa0IsTUFBTCxLQUFnQixLQUFwQixFQUEwQjtNQUN0QmxCLElBQUksQ0FBQ2tCLE1BQUwsR0FBYyxJQUFkO0lBQ0gsQ0FGRCxNQUVPO01BQ0hsQixJQUFJLENBQUNrQixNQUFMLEdBQWMsS0FBZDtJQUNIO0VBQ0osQ0ExQ00sQ0E0Q1A7OztBQTVDTzs7QUFpRFhDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhDLElBQWpCLEMsQ0FFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0aW5ndWlzaC8uL3NyYy9leHRpbmd1aXNoLXZpZXcuanM/MTJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY2xhc3MgVmlld1xuY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi4vc3JjL3NjcmlwdHMvYm9hcmQuanNcIilcblxuY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoaHRtbEVsLCBib2FyZCl7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgYm9hcmQoKVxuICAgICAgICB0aGlzLmh0bWxFbCA9IGh0bWxFbFxuICBcbiAgICAgICAgdGhpcy5zZXRVcEJvYXJkKGh0bWxFbClcblxuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICBzZXRVcEJvYXJkKGh0bWxFbCkge1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgdGhpcy5ib2FyZC5ncmlkLmZvckVhY2ggKChyb3csIHJJZHgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh0aWxlLCBjSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdGlsZVxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBbcklkeCwgY0lkeF1cbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpLmRhdGFzZXQuaWQgPSBgJHtKU09OLnN0cmluZ2lmeShwb3MpfWBcbiAgICAgICAgICAgICAgICAvLyBsaS5jbGFzc05hbWUgPSBgJHtzdGF0ZX1gXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChgJHtzdGF0ZX1gLCAnYm9hcmRwb3NpdGlvbnMnKVxuICAgICAgICAgICAgICAgIGlmIChsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhbHNlJykpe1xuICAgICAgICAgICAgICAgICAgICBsaS5pbm5lclRleHQgPSBgJHtzdGF0ZX1gXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7Qm9hcmQubWFya3NbMV19YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB1bC5kYXRhc2V0LmlkID0gXCJnYW1lLWdyaWRcIlxuICAgICAgICBodG1sRWwuYXBwZW5kKHVsKSAgICAgICAgIFxuXG4gICAgfVxuXG4gICAgXG4gICAgdXNlckNsaWNrKGUpe1xuICAgICAgICBsZXQgdGlsZSA9IGUudGFyZ2V0XG4gICAgICAgIGlmICh0aWxlLnN0YXR1cyA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGlsZS5zdGF0dXMgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aWxlLnN0YXR1cyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgLy8gdG9nZ2xlVGlsZSgpXG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG5cbi8vIGNvbnNvbGUubG9nKHJvdylcbi8vIGxldCBwb3MgPSBjb2xcblxuLy8gLy8gbGV0IHBvcyA9IFtyb3csIGNvbF1cbi8vIC8vIGRlYnVnZ2VyXG4vLyBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuLy8gbGkuZGF0YXNldC5pZCA9IGAke0pTT04uc3RyaW5naWZ5KFtyb3csIGNvbF0pfWBcbi8vIGxpLmRhdGFzZXQuaWQgPSBgJHtKU09OLnN0cmluZ2lmeSgocG9zWzBdLHBvc1sxXSkpfWBcblxuLy8gbGkuY2xhc3NOYW1lID0gJ2JvYXJkcG9zaXRpb25zJ1xuLy8gbGkuaW5uZXJUZXh0ID0gYCR7cG9zfWBcbi8vIHVsLmFwcGVuZChsaSkgXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xuICAgICAgICAvLyAgICAgICAgIGxldCBwb3MgPSBbaSwgal1cbiAgICAgICAgLy8gICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAvLyAgICAgICAgIGxpLmRhdGFzZXQuaWQgPSBgJHtKU09OLnN0cmluZ2lmeShwb3MpfWBcbiAgICAgICAgLy8gICAgICAgICBsaS5jbGFzc05hbWUgPSAnYm9hcmRwb3NpdGlvbnMnXG4gICAgICAgIC8vICAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7cG9zfWAgLy9ob3BlZnVsbHkgdGhlcmUgYXJlIDI1IGJ1dCB3aWxsIHNldHRsZSBmb3IgNWBcbiAgICAgICAgLy8gICAgICAgICB1bC5hcHBlbmQobGkpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0iXSwibmFtZXMiOlsiQm9hcmQiLCJyZXF1aXJlIiwiVmlldyIsImNvbnN0cnVjdG9yIiwiaHRtbEVsIiwiYm9hcmQiLCJzZXRVcEJvYXJkIiwidWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJncmlkIiwiZm9yRWFjaCIsInJvdyIsInJJZHgiLCJ0aWxlIiwiY0lkeCIsInN0YXRlIiwicG9zIiwibGkiLCJkYXRhc2V0IiwiaWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJpbm5lclRleHQiLCJtYXJrcyIsImFwcGVuZCIsInVzZXJDbGljayIsImUiLCJ0YXJnZXQiLCJzdGF0dXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/extinguish-view.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./extinguish-view.js */ \"./src/extinguish-view.js\");\n\nconst Board = __webpack_require__(/*! ../src/scripts/board.js */ \"./src/scripts/board.js\");\n\nwindow.View = View;\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('gameboard');\n  new View(main, Board);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXBCOztBQUNBLE1BQU1DLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyx1REFBRCxDQUFyQjs7QUFDQUUsTUFBTSxDQUFDSCxJQUFQLEdBQWNBLElBQWQ7QUFDQUksUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixXQUF4QixDQUFiO0VBRUEsSUFBSVAsSUFBSixDQUFTTSxJQUFULEVBQWVKLEtBQWY7QUFDSCxDQUpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0aW5ndWlzaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFZpZXcgPSByZXF1aXJlKFwiLi9leHRpbmd1aXNoLXZpZXcuanNcIilcbmNvbnN0IEJvYXJkID0gcmVxdWlyZShcIi4uL3NyYy9zY3JpcHRzL2JvYXJkLmpzXCIpXG53aW5kb3cuVmlldyA9IFZpZXc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkJylcbiAgICBcbiAgICBuZXcgVmlldyhtYWluLCBCb2FyZCk7XG59KSJdLCJuYW1lcyI6WyJWaWV3IiwicmVxdWlyZSIsIkJvYXJkIiwid2luZG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module) {

eval("class Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n    console.log(this.winRound());\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 5; i++) {\n      let posValue = false;\n      let row = [];\n\n      for (let j = 0; j < 5; j++) {\n        if (i % 2 === 0) posValue = true;\n        row.push(posValue);\n      }\n\n      grid.push(row);\n    }\n\n    return grid;\n  }\n\n  winRound() {\n    for (let i = 0; i < this.grid.length; i++) {\n      let row = this.grid[i];\n      console.log(row);\n\n      for (let col = 0; col < row.length; col++) {\n        // console.log(row[col])\n        if (row[col] === true) return false;\n      }\n    }\n\n    return true;\n  } //     forEach((row => {\n  //         console.log(row)\n  //         row.forEach((col) => col === true)\n  //             // console.log(col)\n  //  //return false\n  //     }))\n\n\n}\n\nBoard.marks = ['', '🔥'];\nmodule.exports = Board; //not sure if this will reain static down the line, may allow variation on grid size//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm5hbWVzIjpbIkJvYXJkIiwiY29uc3RydWN0b3IiLCJncmlkIiwibWFrZUdyaWQiLCJjb25zb2xlIiwibG9nIiwid2luUm91bmQiLCJpIiwicG9zVmFsdWUiLCJyb3ciLCJqIiwicHVzaCIsImxlbmd0aCIsImNvbCIsIm1hcmtzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0aW5ndWlzaC8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBCb2FyZC5tYWtlR3JpZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpblJvdW5kKCkpXG5cbiAgICB9XG5cblxuICAgIHN0YXRpYyBtYWtlR3JpZCgpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvc1ZhbHVlID0gZmFsc2VcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHBvc1ZhbHVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKHBvc1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cblxuICAgIHdpblJvdW5kKCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMuZ3JpZFtpXVxuICAgICAgICAgICAgY29uc29sZS5sb2cocm93KVxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcm93Lmxlbmd0aDsgY29sKyspe1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJvd1tjb2xdKVxuICAgICAgICAgICAgICAgIGlmIChyb3dbY29sXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vICAgICBmb3JFYWNoKChyb3cgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocm93KVxuICAgIC8vICAgICAgICAgcm93LmZvckVhY2goKGNvbCkgPT4gY29sID09PSB0cnVlKVxuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbClcbiAgICAvLyAgLy9yZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgLy8gICAgIH0pKVxufVxuXG5Cb2FyZC5tYXJrcyA9IFsnJywgJ/CflKUnXVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkO1xuXG5cbi8vbm90IHN1cmUgaWYgdGhpcyB3aWxsIHJlYWluIHN0YXRpYyBkb3duIHRoZSBsaW5lLCBtYXkgYWxsb3cgdmFyaWF0aW9uIG9uIGdyaWQgc2l6ZVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxLQUFOLENBQVk7RUFDUkMsV0FBVyxHQUFHO0lBQ1YsS0FBS0MsSUFBTCxHQUFZRixLQUFLLENBQUNHLFFBQU4sRUFBWjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxRQUFMLEVBQVo7RUFFSDs7RUFHYyxPQUFSSCxRQUFRLEdBQUc7SUFDZCxNQUFNRCxJQUFJLEdBQUcsRUFBYjs7SUFDQSxLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7TUFDeEIsSUFBSUMsUUFBUSxHQUFHLEtBQWY7TUFDQSxJQUFJQyxHQUFHLEdBQUcsRUFBVjs7TUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7UUFDeEIsSUFBSUgsQ0FBQyxHQUFHLENBQUosS0FBVSxDQUFkLEVBQWlCQyxRQUFRLEdBQUcsSUFBWDtRQUNqQkMsR0FBRyxDQUFDRSxJQUFKLENBQVNILFFBQVQ7TUFDSDs7TUFDRE4sSUFBSSxDQUFDUyxJQUFMLENBQVVGLEdBQVY7SUFDSDs7SUFDRCxPQUFPUCxJQUFQO0VBQ0g7O0VBRURJLFFBQVEsR0FBRTtJQUNOLEtBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEtBQUtMLElBQUwsQ0FBVVUsTUFBN0IsRUFBcUNMLENBQUMsRUFBdEMsRUFBeUM7TUFDckMsSUFBSUUsR0FBRyxHQUFHLEtBQUtQLElBQUwsQ0FBVUssQ0FBVixDQUFWO01BQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaOztNQUNBLEtBQUssSUFBSUksR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0osR0FBRyxDQUFDRyxNQUE1QixFQUFvQ0MsR0FBRyxFQUF2QyxFQUEwQztRQUN0QztRQUNBLElBQUlKLEdBQUcsQ0FBQ0ksR0FBRCxDQUFILEtBQWEsSUFBakIsRUFBdUIsT0FBTyxLQUFQO01BQzFCO0lBQ0o7O0lBQ0QsT0FBTyxJQUFQO0VBQ0gsQ0FoQ08sQ0FpQ1I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUdBOzs7QUF4Q1E7O0FBMkNaYixLQUFLLENBQUNjLEtBQU4sR0FBYyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBQWQ7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsS0FBakIsQyxDQUdBIn0=\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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