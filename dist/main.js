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

eval("// export class View\nconst Board = __webpack_require__(/*! ../src/scripts/board.js */ \"./src/scripts/board.js\");\n\nclass View {\n  constructor(htmlEl, board) {\n    this.board = new board();\n    this.htmlEl = htmlEl;\n    this.setUpBoard(htmlEl);\n  }\n\n  setUpBoard(htmlEl) {\n    const ul = document.createElement('ul');\n    this.board.grid.forEach((row, rIdx) => {\n      row.forEach((tile, cIdx) => {\n        let state = tile;\n        let pos = [rIdx, cIdx];\n        let li = document.createElement('li');\n        li.dataset.id = `${JSON.stringify(pos)}`; // li.className = `${state}`\n\n        li.classList.add(`${state}`, 'boardpositions');\n\n        if (li.classList.contains('false')) {\n          li.innerText = `${state}`;\n        } else {\n          li.innerText = `${Board.marks[1]}`;\n        }\n\n        ul.append(li);\n      });\n    });\n    ul.dataset.id = \"game-grid\";\n    htmlEl.append(ul);\n  }\n\n  clickTile() {\n    // const tile = this.grid[pos[0]][pos[1]]   \n    this.htmlEl.addEventListener('click', e => {\n      console.log('click');\n      changeState(e);\n    });\n  }\n\n}\n\nmodule.exports = View; // console.log(row)\n// let pos = col\n// // let pos = [row, col]\n// // debugger\n// let li = document.createElement('li');\n// li.dataset.id = `${JSON.stringify([row, col])}`\n// li.dataset.id = `${JSON.stringify((pos[0],pos[1]))}`\n// li.className = 'boardpositions'\n// li.innerText = `${pos}`\n// ul.append(li) \n// for (let i = 0; i < 5; i++) {\n//     for (let j = 0; j < 5; j++) {\n//         let pos = [i, j]\n//         let li = document.createElement('li');\n//         li.dataset.id = `${JSON.stringify(pos)}`\n//         li.className = 'boardpositions'\n//         li.innerText = `${pos}` //hopefully there are 25 but will settle for 5`\n//         ul.append(li)\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXh0aW5ndWlzaC12aWV3LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHVEQUFELENBQXJCOztBQUVBLE1BQU1DLElBQU4sQ0FBVztFQUNQQyxXQUFXLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFlO0lBQ3RCLEtBQUtBLEtBQUwsR0FBYSxJQUFJQSxLQUFKLEVBQWI7SUFDQSxLQUFLRCxNQUFMLEdBQWNBLE1BQWQ7SUFFQSxLQUFLRSxVQUFMLENBQWdCRixNQUFoQjtFQUdIOztFQUNERSxVQUFVLENBQUNGLE1BQUQsRUFBUztJQUNmLE1BQU1HLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7SUFDQSxLQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0JDLE9BQWhCLENBQXlCLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlO01BQ3BDRCxHQUFHLENBQUNELE9BQUosQ0FBWSxDQUFDRyxJQUFELEVBQU9DLElBQVAsS0FBZ0I7UUFDeEIsSUFBSUMsS0FBSyxHQUFHRixJQUFaO1FBQ0EsSUFBSUcsR0FBRyxHQUFHLENBQUNKLElBQUQsRUFBT0UsSUFBUCxDQUFWO1FBQ0EsSUFBSUcsRUFBRSxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtRQUNBUyxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsRUFBWCxHQUFpQixHQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsR0FBZixDQUFvQixFQUF2QyxDQUp3QixDQUt4Qjs7UUFDQUMsRUFBRSxDQUFDSyxTQUFILENBQWFDLEdBQWIsQ0FBa0IsR0FBRVIsS0FBTSxFQUExQixFQUE2QixnQkFBN0I7O1FBQ0EsSUFBSUUsRUFBRSxDQUFDSyxTQUFILENBQWFFLFFBQWIsQ0FBc0IsT0FBdEIsQ0FBSixFQUFtQztVQUMvQlAsRUFBRSxDQUFDUSxTQUFILEdBQWdCLEdBQUVWLEtBQU0sRUFBeEI7UUFDSCxDQUZELE1BRU87VUFDSEUsRUFBRSxDQUFDUSxTQUFILEdBQWdCLEdBQUUxQixLQUFLLENBQUMyQixLQUFOLENBQVksQ0FBWixDQUFlLEVBQWpDO1FBQ0g7O1FBQ0RwQixFQUFFLENBQUNxQixNQUFILENBQVVWLEVBQVY7TUFDSCxDQWJEO0lBY0gsQ0FmRDtJQWdCQVgsRUFBRSxDQUFDWSxPQUFILENBQVdDLEVBQVgsR0FBZ0IsV0FBaEI7SUFDQWhCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBY3JCLEVBQWQ7RUFFSDs7RUFHRHNCLFNBQVMsR0FBRztJQUNSO0lBRUEsS0FBS3pCLE1BQUwsQ0FBWTBCLGdCQUFaLENBQTZCLE9BQTdCLEVBQXVDQyxDQUFELElBQU87TUFDekNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7TUFDQUMsV0FBVyxDQUFDSCxDQUFELENBQVg7SUFDSCxDQUhEO0VBSUg7O0FBeENNOztBQThDWEksTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEMsSUFBakIsQyxDQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRpbmd1aXNoLy4vc3JjL2V4dGluZ3Vpc2gtdmlldy5qcz8xMmQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBjbGFzcyBWaWV3XG5jb25zdCBCb2FyZCA9IHJlcXVpcmUoXCIuLi9zcmMvc2NyaXB0cy9ib2FyZC5qc1wiKVxuXG5jbGFzcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihodG1sRWwsIGJvYXJkKXtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBib2FyZCgpXG4gICAgICAgIHRoaXMuaHRtbEVsID0gaHRtbEVsXG4gIFxuICAgICAgICB0aGlzLnNldFVwQm9hcmQoaHRtbEVsKVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBzZXRVcEJvYXJkKGh0bWxFbCkge1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgdGhpcy5ib2FyZC5ncmlkLmZvckVhY2ggKChyb3csIHJJZHgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKCh0aWxlLCBjSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdGlsZVxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBbcklkeCwgY0lkeF1cbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpLmRhdGFzZXQuaWQgPSBgJHtKU09OLnN0cmluZ2lmeShwb3MpfWBcbiAgICAgICAgICAgICAgICAvLyBsaS5jbGFzc05hbWUgPSBgJHtzdGF0ZX1gXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChgJHtzdGF0ZX1gLCAnYm9hcmRwb3NpdGlvbnMnKVxuICAgICAgICAgICAgICAgIGlmIChsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhbHNlJykpe1xuICAgICAgICAgICAgICAgICAgICBsaS5pbm5lclRleHQgPSBgJHtzdGF0ZX1gXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7Qm9hcmQubWFya3NbMV19YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB1bC5kYXRhc2V0LmlkID0gXCJnYW1lLWdyaWRcIlxuICAgICAgICBodG1sRWwuYXBwZW5kKHVsKSAgICAgICAgIFxuXG4gICAgfVxuXG5cbiAgICBjbGlja1RpbGUoKSB7XG4gICAgICAgIC8vIGNvbnN0IHRpbGUgPSB0aGlzLmdyaWRbcG9zWzBdXVtwb3NbMV1dICAgXG5cbiAgICAgICAgdGhpcy5odG1sRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJylcbiAgICAgICAgICAgIGNoYW5nZVN0YXRlKGUpXG4gICAgICAgIH0pXG4gICAgfSBcblxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuXG4vLyBjb25zb2xlLmxvZyhyb3cpXG4vLyBsZXQgcG9zID0gY29sXG5cbi8vIC8vIGxldCBwb3MgPSBbcm93LCBjb2xdXG4vLyAvLyBkZWJ1Z2dlclxuLy8gbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbi8vIGxpLmRhdGFzZXQuaWQgPSBgJHtKU09OLnN0cmluZ2lmeShbcm93LCBjb2xdKX1gXG4vLyBsaS5kYXRhc2V0LmlkID0gYCR7SlNPTi5zdHJpbmdpZnkoKHBvc1swXSxwb3NbMV0pKX1gXG5cbi8vIGxpLmNsYXNzTmFtZSA9ICdib2FyZHBvc2l0aW9ucydcbi8vIGxpLmlubmVyVGV4dCA9IGAke3Bvc31gXG4vLyB1bC5hcHBlbmQobGkpIFxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgcG9zID0gW2ksIGpdXG4gICAgICAgIC8vICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgLy8gICAgICAgICBsaS5kYXRhc2V0LmlkID0gYCR7SlNPTi5zdHJpbmdpZnkocG9zKX1gXG4gICAgICAgIC8vICAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2JvYXJkcG9zaXRpb25zJ1xuICAgICAgICAvLyAgICAgICAgIGxpLmlubmVyVGV4dCA9IGAke3Bvc31gIC8vaG9wZWZ1bGx5IHRoZXJlIGFyZSAyNSBidXQgd2lsbCBzZXR0bGUgZm9yIDVgXG4gICAgICAgIC8vICAgICAgICAgdWwuYXBwZW5kKGxpKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9Il0sIm5hbWVzIjpbIkJvYXJkIiwicmVxdWlyZSIsIlZpZXciLCJjb25zdHJ1Y3RvciIsImh0bWxFbCIsImJvYXJkIiwic2V0VXBCb2FyZCIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ3JpZCIsImZvckVhY2giLCJyb3ciLCJySWR4IiwidGlsZSIsImNJZHgiLCJzdGF0ZSIsInBvcyIsImxpIiwiZGF0YXNldCIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5zIiwiaW5uZXJUZXh0IiwibWFya3MiLCJhcHBlbmQiLCJjbGlja1RpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VTdGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/extinguish-view.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./extinguish-view.js */ \"./src/extinguish-view.js\");\n\nconst Game = __webpack_require__(/*! ../src/scripts/game.js */ \"./src/scripts/game.js\");\n\nconst Board = __webpack_require__(/*! ../src/scripts/board.js */ \"./src/scripts/board.js\");\n\nwindow.View = View;\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('gameboard'); // new View(main, Game);\n\n  new View(main, Board);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXBCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxxREFBRCxDQUFwQjs7QUFDQSxNQUFNRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsdURBQUQsQ0FBckI7O0FBQ0FHLE1BQU0sQ0FBQ0osSUFBUCxHQUFjQSxJQUFkO0FBQ0FLLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07RUFDaEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYixDQURnRCxDQUVoRDs7RUFFQSxJQUFJUixJQUFKLENBQVNPLElBQVQsRUFBZUosS0FBZjtBQUNILENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRpbmd1aXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVmlldyA9IHJlcXVpcmUoXCIuL2V4dGluZ3Vpc2gtdmlldy5qc1wiKVxuY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuLi9zcmMvc2NyaXB0cy9nYW1lLmpzXCIpXG5jb25zdCBCb2FyZCA9IHJlcXVpcmUoXCIuLi9zcmMvc2NyaXB0cy9ib2FyZC5qc1wiKVxud2luZG93LlZpZXcgPSBWaWV3O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZCcpXG4gICAgLy8gbmV3IFZpZXcobWFpbiwgR2FtZSk7XG5cbiAgICBuZXcgVmlldyhtYWluLCBCb2FyZCk7XG59KSJdLCJuYW1lcyI6WyJWaWV3IiwicmVxdWlyZSIsIkdhbWUiLCJCb2FyZCIsIndpbmRvdyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module) {

eval("class Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n    console.log(this.winRound());\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 5; i++) {\n      let posValue = false;\n      let row = [];\n\n      for (let j = 0; j < 5; j++) {\n        if (i % 2 === 0) posValue = true;\n        row.push(posValue);\n      }\n\n      grid.push(row);\n    }\n\n    return grid;\n  }\n\n  winRound() {\n    for (let i = 0; i < this.grid.length; i++) {\n      let row = this.grid[i];\n\n      for (let col = 0; col < row.length; col++) {\n        if (row[col] === true) return false;\n      }\n    }\n\n    return true;\n  }\n\n  changeState(tile) {\n    if (tile === false) {\n      tile = true;\n    } else {\n      tile = false;\n    }\n  }\n\n}\n\nBoard.marks = ['', '🔥'];\nmodule.exports = Board; //not sure if this will reain static down the line, may allow variation on grid size//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm5hbWVzIjpbIkJvYXJkIiwiY29uc3RydWN0b3IiLCJncmlkIiwibWFrZUdyaWQiLCJjb25zb2xlIiwibG9nIiwid2luUm91bmQiLCJpIiwicG9zVmFsdWUiLCJyb3ciLCJqIiwicHVzaCIsImxlbmd0aCIsImNvbCIsImNoYW5nZVN0YXRlIiwidGlsZSIsIm1hcmtzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0aW5ndWlzaC8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBCb2FyZC5tYWtlR3JpZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpblJvdW5kKCkpXG5cbiAgICB9XG5cblxuICAgIHN0YXRpYyBtYWtlR3JpZCgpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvc1ZhbHVlID0gZmFsc2VcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHBvc1ZhbHVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKHBvc1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cblxuICAgIHdpblJvdW5kKCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMuZ3JpZFtpXVxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcm93Lmxlbmd0aDsgY29sKyspe1xuICAgICAgICAgICAgICAgIGlmIChyb3dbY29sXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIFxuICAgIGNoYW5nZVN0YXRlKHRpbGUpe1xuICAgICAgICBpZiAodGlsZSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGlsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbGUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbkJvYXJkLm1hcmtzID0gWycnLCAn8J+UpSddXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7XG5cblxuLy9ub3Qgc3VyZSBpZiB0aGlzIHdpbGwgcmVhaW4gc3RhdGljIGRvd24gdGhlIGxpbmUsIG1heSBhbGxvdyB2YXJpYXRpb24gb24gZ3JpZCBzaXplXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQU4sQ0FBWTtFQUNSQyxXQUFXLEdBQUc7SUFDVixLQUFLQyxJQUFMLEdBQVlGLEtBQUssQ0FBQ0csUUFBTixFQUFaO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFFBQUwsRUFBWjtFQUVIOztFQUdjLE9BQVJILFFBQVEsR0FBRztJQUNkLE1BQU1ELElBQUksR0FBRyxFQUFiOztJQUNBLEtBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtNQUN4QixJQUFJQyxRQUFRLEdBQUcsS0FBZjtNQUNBLElBQUlDLEdBQUcsR0FBRyxFQUFWOztNQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QixJQUFJSCxDQUFDLEdBQUcsQ0FBSixLQUFVLENBQWQsRUFBaUJDLFFBQVEsR0FBRyxJQUFYO1FBQ2pCQyxHQUFHLENBQUNFLElBQUosQ0FBU0gsUUFBVDtNQUNIOztNQUNETixJQUFJLENBQUNTLElBQUwsQ0FBVUYsR0FBVjtJQUNIOztJQUNELE9BQU9QLElBQVA7RUFDSDs7RUFFREksUUFBUSxHQUFFO0lBQ04sS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS0wsSUFBTCxDQUFVVSxNQUE3QixFQUFxQ0wsQ0FBQyxFQUF0QyxFQUF5QztNQUNyQyxJQUFJRSxHQUFHLEdBQUcsS0FBS1AsSUFBTCxDQUFVSyxDQUFWLENBQVY7O01BQ0EsS0FBSyxJQUFJTSxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHSixHQUFHLENBQUNHLE1BQTVCLEVBQW9DQyxHQUFHLEVBQXZDLEVBQTBDO1FBQ3RDLElBQUlKLEdBQUcsQ0FBQ0ksR0FBRCxDQUFILEtBQWEsSUFBakIsRUFBdUIsT0FBTyxLQUFQO01BQzFCO0lBQ0o7O0lBQ0QsT0FBTyxJQUFQO0VBQ0g7O0VBRURDLFdBQVcsQ0FBQ0MsSUFBRCxFQUFNO0lBQ2IsSUFBSUEsSUFBSSxLQUFLLEtBQWIsRUFBbUI7TUFDZkEsSUFBSSxHQUFHLElBQVA7SUFDSCxDQUZELE1BRU87TUFDSEEsSUFBSSxHQUFHLEtBQVA7SUFDSDtFQUNKOztBQXRDTzs7QUEwQ1pmLEtBQUssQ0FBQ2dCLEtBQU4sR0FBYyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBQWQ7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsS0FBakIsQyxDQUdBIn0=\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n\nclass Game {\n  constructor() {\n    this.grid = new Board();\n    console.log(this.grid); // console.log(winRound)\n  }\n\n}\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFyQjs7QUFFQSxNQUFNQyxJQUFOLENBQVc7RUFDUEMsV0FBVyxHQUFHO0lBQ1YsS0FBS0MsSUFBTCxHQUFZLElBQUlKLEtBQUosRUFBWjtJQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLRixJQUFqQixFQUZVLENBR1Y7RUFFSDs7QUFOTTs7QUFVWEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixJQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGluZ3Vpc2gvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9ib2FyZFwiKVxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEJvYXJkKClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aW5Sb3VuZClcblxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iXSwibmFtZXMiOlsiQm9hcmQiLCJyZXF1aXJlIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiZ3JpZCIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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