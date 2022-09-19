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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ../src/scripts/extinguish-view.js */ \"./src/scripts/extinguish-view.js\");\n\nconst Game = __webpack_require__(/*! ../src/scripts/game.js */ \"./src/scripts/game.js\");\n\nconst Board = __webpack_require__(/*! ../src/scripts/board.js */ \"./src/scripts/board.js\");\n\nconst Splash = __webpack_require__(/*! ../src/scripts/splash.js */ \"./src/scripts/splash.js\");\n\nwindow.View = View;\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('gameboard'); // new View(main, Game);\n\n  const splashScreen = document.getElementById(\"splash\");\n  new View(main, Board);\n  new Splash(splashScreen);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDJFQUFELENBQXBCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsbUJBQU8sQ0FBQyxxREFBRCxDQUFwQjs7QUFDQSxNQUFNRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsdURBQUQsQ0FBckI7O0FBQ0EsTUFBTUcsTUFBTSxHQUFHSCxtQkFBTyxDQUFDLHlEQUFELENBQXRCOztBQUNBSSxNQUFNLENBQUNMLElBQVAsR0FBY0EsSUFBZDtBQUNBTSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFdBQXhCLENBQWIsQ0FEZ0QsQ0FFaEQ7O0VBQ0EsTUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBckI7RUFDQSxJQUFJVCxJQUFKLENBQVNRLElBQVQsRUFBZUwsS0FBZjtFQUNBLElBQUlDLE1BQUosQ0FBV00sWUFBWDtBQUVILENBUEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRpbmd1aXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVmlldyA9IHJlcXVpcmUoXCIuLi9zcmMvc2NyaXB0cy9leHRpbmd1aXNoLXZpZXcuanNcIilcbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi4vc3JjL3NjcmlwdHMvZ2FtZS5qc1wiKVxuY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi4vc3JjL3NjcmlwdHMvYm9hcmQuanNcIilcbmNvbnN0IFNwbGFzaCA9IHJlcXVpcmUoXCIuLi9zcmMvc2NyaXB0cy9zcGxhc2guanNcIilcbndpbmRvdy5WaWV3ID0gVmlldztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQnKVxuICAgIC8vIG5ldyBWaWV3KG1haW4sIEdhbWUpO1xuICAgIGNvbnN0IHNwbGFzaFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpIFxuICAgIG5ldyBWaWV3KG1haW4sIEJvYXJkKTtcbiAgICBuZXcgU3BsYXNoKHNwbGFzaFNjcmVlbilcbiAgICBcbn0pIl0sIm5hbWVzIjpbIlZpZXciLCJyZXF1aXJlIiwiR2FtZSIsIkJvYXJkIiwiU3BsYXNoIiwid2luZG93IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwic3BsYXNoU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module) {

eval("class Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n    console.log(this.winRound());\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 5; i++) {\n      let posValue = false;\n      let row = [];\n\n      for (let j = 0; j < 5; j++) {\n        if (i % 2 === 0) posValue = true;\n        row.push(posValue);\n      }\n\n      grid.push(row);\n    }\n\n    return grid;\n  }\n\n  winRound() {\n    for (let i = 0; i < this.grid.length; i++) {\n      let row = this.grid[i];\n\n      for (let col = 0; col < row.length; col++) {\n        if (row[col] === true) return false;\n      }\n    }\n\n    return true;\n  }\n\n  changeState() {\n    if (tile === false) {\n      tile = true;\n    } else {\n      tile = false;\n    }\n  }\n\n}\n\nBoard.marks = ['', '🔥'];\nmodule.exports = Board; //not sure if this will reain static down the line, may allow variation on grid size//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm5hbWVzIjpbIkJvYXJkIiwiY29uc3RydWN0b3IiLCJncmlkIiwibWFrZUdyaWQiLCJjb25zb2xlIiwibG9nIiwid2luUm91bmQiLCJpIiwicG9zVmFsdWUiLCJyb3ciLCJqIiwicHVzaCIsImxlbmd0aCIsImNvbCIsImNoYW5nZVN0YXRlIiwidGlsZSIsIm1hcmtzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0aW5ndWlzaC8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzP2JjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBCb2FyZC5tYWtlR3JpZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpblJvdW5kKCkpXG5cbiAgICB9XG5cblxuICAgIHN0YXRpYyBtYWtlR3JpZCgpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvc1ZhbHVlID0gZmFsc2VcbiAgICAgICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHBvc1ZhbHVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKHBvc1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cblxuICAgIHdpblJvdW5kKCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHJvdyA9IHRoaXMuZ3JpZFtpXVxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcm93Lmxlbmd0aDsgY29sKyspe1xuICAgICAgICAgICAgICAgIGlmIChyb3dbY29sXSA9PT0gdHJ1ZSkgcmV0dXJuIGZhbHNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIFxuICAgIGNoYW5nZVN0YXRlKCl7XG4gICAgICAgIGlmICh0aWxlID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aWxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlsZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuQm9hcmQubWFya3MgPSBbJycsICfwn5SlJ11cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcblxuXG4vL25vdCBzdXJlIGlmIHRoaXMgd2lsbCByZWFpbiBzdGF0aWMgZG93biB0aGUgbGluZSwgbWF5IGFsbG93IHZhcmlhdGlvbiBvbiBncmlkIHNpemVcbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsS0FBTixDQUFZO0VBQ1JDLFdBQVcsR0FBRztJQUNWLEtBQUtDLElBQUwsR0FBWUYsS0FBSyxDQUFDRyxRQUFOLEVBQVo7SUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsUUFBTCxFQUFaO0VBRUg7O0VBR2MsT0FBUkgsUUFBUSxHQUFHO0lBQ2QsTUFBTUQsSUFBSSxHQUFHLEVBQWI7O0lBQ0EsS0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO01BQ3hCLElBQUlDLFFBQVEsR0FBRyxLQUFmO01BQ0EsSUFBSUMsR0FBRyxHQUFHLEVBQVY7O01BQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO1FBQ3hCLElBQUlILENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBZCxFQUFpQkMsUUFBUSxHQUFHLElBQVg7UUFDakJDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTSCxRQUFUO01BQ0g7O01BQ0ROLElBQUksQ0FBQ1MsSUFBTCxDQUFVRixHQUFWO0lBQ0g7O0lBQ0QsT0FBT1AsSUFBUDtFQUNIOztFQUVESSxRQUFRLEdBQUU7SUFDTixLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLTCxJQUFMLENBQVVVLE1BQTdCLEVBQXFDTCxDQUFDLEVBQXRDLEVBQXlDO01BQ3JDLElBQUlFLEdBQUcsR0FBRyxLQUFLUCxJQUFMLENBQVVLLENBQVYsQ0FBVjs7TUFDQSxLQUFLLElBQUlNLEdBQUcsR0FBRyxDQUFmLEVBQWtCQSxHQUFHLEdBQUdKLEdBQUcsQ0FBQ0csTUFBNUIsRUFBb0NDLEdBQUcsRUFBdkMsRUFBMEM7UUFDdEMsSUFBSUosR0FBRyxDQUFDSSxHQUFELENBQUgsS0FBYSxJQUFqQixFQUF1QixPQUFPLEtBQVA7TUFDMUI7SUFDSjs7SUFDRCxPQUFPLElBQVA7RUFDSDs7RUFFREMsV0FBVyxHQUFFO0lBQ1QsSUFBSUMsSUFBSSxLQUFLLEtBQWIsRUFBbUI7TUFDZkEsSUFBSSxHQUFHLElBQVA7SUFDSCxDQUZELE1BRU87TUFDSEEsSUFBSSxHQUFHLEtBQVA7SUFDSDtFQUNKOztBQXRDTzs7QUEwQ1pmLEtBQUssQ0FBQ2dCLEtBQU4sR0FBYyxDQUFDLEVBQUQsRUFBSyxJQUFMLENBQWQ7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsS0FBakIsQyxDQUdBIn0=\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/extinguish-view.js":
/*!****************************************!*\
  !*** ./src/scripts/extinguish-view.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// export class View\nconst Board = __webpack_require__(/*! ./board.js */ \"./src/scripts/board.js\");\n\nclass View {\n  constructor(htmlEl, board) {\n    this.board = new board();\n    this.htmlEl = htmlEl;\n    this.setUpBoard(htmlEl);\n  }\n\n  setUpBoard(htmlEl) {\n    const ul = document.createElement('ul');\n    this.board.grid.forEach((row, rIdx) => {\n      row.forEach((tile, cIdx) => {\n        let state = tile;\n        let pos = [rIdx, cIdx];\n        let li = document.createElement('li');\n        li.dataset.id = `${JSON.stringify(pos)}`; // li.className = `${state}`\n\n        li.classList.add(`${state}`, 'boardpositions');\n\n        if (li.classList.contains('false')) {\n          li.innerText = `${state}`;\n        } else {\n          li.innerText = `${Board.marks[1]}`;\n        }\n\n        ul.append(li);\n      });\n    });\n    ul.dataset.id = \"game-grid\";\n    htmlEl.append(ul);\n  }\n\n  changeClass() {\n    if (li.classList.contains('true')) {\n      li.classList.replace('true', 'false');\n    } else if (li.classList.contains('false')) {\n      li.classList.replace('false', 'true');\n    }\n  }\n\n  clickTile() {\n    // const tile = this.grid[pos[0]][pos[1]]   \n    this.htmlEl.addEventListener('click', e => {\n      console.log('click');\n      changeState(e);\n    });\n  }\n\n}\n\nmodule.exports = View; // console.log(row)\n// let pos = col\n// // let pos = [row, col]\n// // debugger\n// let li = document.createElement('li');\n// li.dataset.id = `${JSON.stringify([row, col])}`\n// li.dataset.id = `${JSON.stringify((pos[0],pos[1]))}`\n// li.className = 'boardpositions'\n// li.innerText = `${pos}`\n// ul.append(li) \n// for (let i = 0; i < 5; i++) {\n//     for (let j = 0; j < 5; j++) {\n//         let pos = [i, j]\n//         let li = document.createElement('li');\n//         li.dataset.id = `${JSON.stringify(pos)}`\n//         li.className = 'boardpositions'\n//         li.innerText = `${pos}` //hopefully there are 25 but will settle for 5`\n//         ul.append(li)\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leHRpbmd1aXNoLXZpZXcuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsMENBQUQsQ0FBckI7O0FBRUEsTUFBTUMsSUFBTixDQUFXO0VBQ1BDLFdBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQWU7SUFDdEIsS0FBS0EsS0FBTCxHQUFhLElBQUlBLEtBQUosRUFBYjtJQUNBLEtBQUtELE1BQUwsR0FBY0EsTUFBZDtJQUVBLEtBQUtFLFVBQUwsQ0FBZ0JGLE1BQWhCO0VBR0g7O0VBQ0RFLFVBQVUsQ0FBQ0YsTUFBRCxFQUFTO0lBQ2YsTUFBTUcsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtJQUNBLEtBQUtKLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkMsT0FBaEIsQ0FBeUIsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEtBQWU7TUFDcENELEdBQUcsQ0FBQ0QsT0FBSixDQUFZLENBQUNHLElBQUQsRUFBT0MsSUFBUCxLQUFnQjtRQUN4QixJQUFJQyxLQUFLLEdBQUdGLElBQVo7UUFDQSxJQUFJRyxHQUFHLEdBQUcsQ0FBQ0osSUFBRCxFQUFPRSxJQUFQLENBQVY7UUFDQSxJQUFJRyxFQUFFLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFUO1FBQ0FTLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXQyxFQUFYLEdBQWlCLEdBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxHQUFmLENBQW9CLEVBQXZDLENBSndCLENBS3hCOztRQUNBQyxFQUFFLENBQUNLLFNBQUgsQ0FBYUMsR0FBYixDQUFrQixHQUFFUixLQUFNLEVBQTFCLEVBQTZCLGdCQUE3Qjs7UUFDQSxJQUFJRSxFQUFFLENBQUNLLFNBQUgsQ0FBYUUsUUFBYixDQUFzQixPQUF0QixDQUFKLEVBQW1DO1VBQy9CUCxFQUFFLENBQUNRLFNBQUgsR0FBZ0IsR0FBRVYsS0FBTSxFQUF4QjtRQUNILENBRkQsTUFFTztVQUNIRSxFQUFFLENBQUNRLFNBQUgsR0FBZ0IsR0FBRTFCLEtBQUssQ0FBQzJCLEtBQU4sQ0FBWSxDQUFaLENBQWUsRUFBakM7UUFDSDs7UUFDRHBCLEVBQUUsQ0FBQ3FCLE1BQUgsQ0FBVVYsRUFBVjtNQUNILENBYkQ7SUFjSCxDQWZEO0lBZ0JBWCxFQUFFLENBQUNZLE9BQUgsQ0FBV0MsRUFBWCxHQUFnQixXQUFoQjtJQUNBaEIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjckIsRUFBZDtFQUVIOztFQUVEc0IsV0FBVyxHQUFFO0lBQ1QsSUFBSVgsRUFBRSxDQUFDSyxTQUFILENBQWFFLFFBQWIsQ0FBc0IsTUFBdEIsQ0FBSixFQUFtQztNQUMvQlAsRUFBRSxDQUFDSyxTQUFILENBQWFPLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkIsT0FBN0I7SUFDSCxDQUZELE1BRU8sSUFBSVosRUFBRSxDQUFDSyxTQUFILENBQWFFLFFBQWIsQ0FBc0IsT0FBdEIsQ0FBSixFQUFvQztNQUN2Q1AsRUFBRSxDQUFDSyxTQUFILENBQWFPLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsTUFBOUI7SUFDSDtFQUVKOztFQUVEQyxTQUFTLEdBQUc7SUFDUjtJQUVBLEtBQUszQixNQUFMLENBQVk0QixnQkFBWixDQUE2QixPQUE3QixFQUFzQ0MsQ0FBQyxJQUFJO01BQ3ZDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO01BQ0FDLFdBQVcsQ0FBQ0gsQ0FBRCxDQUFYO0lBQ0gsQ0FIRDtFQUlIOztBQWhETTs7QUFzRFhJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBDLElBQWpCLEMsQ0FFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXh0aW5ndWlzaC8uL3NyYy9zY3JpcHRzL2V4dGluZ3Vpc2gtdmlldy5qcz80ZTA1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBjbGFzcyBWaWV3XG5jb25zdCBCb2FyZCA9IHJlcXVpcmUoXCIuL2JvYXJkLmpzXCIpXG5cbmNsYXNzIFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGh0bWxFbCwgYm9hcmQpe1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IGJvYXJkKClcbiAgICAgICAgdGhpcy5odG1sRWwgPSBodG1sRWxcbiAgXG4gICAgICAgIHRoaXMuc2V0VXBCb2FyZChodG1sRWwpXG5cbiAgICAgICAgXG4gICAgfVxuICAgIHNldFVwQm9hcmQoaHRtbEVsKSB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICB0aGlzLmJvYXJkLmdyaWQuZm9yRWFjaCAoKHJvdywgcklkeCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKHRpbGUsIGNJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB0aWxlXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IFtySWR4LCBjSWR4XVxuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbGkuZGF0YXNldC5pZCA9IGAke0pTT04uc3RyaW5naWZ5KHBvcyl9YFxuICAgICAgICAgICAgICAgIC8vIGxpLmNsYXNzTmFtZSA9IGAke3N0YXRlfWBcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGAke3N0YXRlfWAsICdib2FyZHBvc2l0aW9ucycpXG4gICAgICAgICAgICAgICAgaWYgKGxpLmNsYXNzTGlzdC5jb250YWlucygnZmFsc2UnKSl7XG4gICAgICAgICAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGAke3N0YXRlfWBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaS5pbm5lclRleHQgPSBgJHtCb2FyZC5tYXJrc1sxXX1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZChsaSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHVsLmRhdGFzZXQuaWQgPSBcImdhbWUtZ3JpZFwiXG4gICAgICAgIGh0bWxFbC5hcHBlbmQodWwpICAgICAgICAgXG5cbiAgICB9XG5cbiAgICBjaGFuZ2VDbGFzcygpe1xuICAgICAgICBpZiAobGkuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cnVlJykpIHtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZXBsYWNlKCd0cnVlJywgJ2ZhbHNlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAobGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWxzZScpKSB7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVwbGFjZSgnZmFsc2UnLCAndHJ1ZScpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNsaWNrVGlsZSgpIHtcbiAgICAgICAgLy8gY29uc3QgdGlsZSA9IHRoaXMuZ3JpZFtwb3NbMF1dW3Bvc1sxXV0gICBcblxuICAgICAgICB0aGlzLmh0bWxFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJylcbiAgICAgICAgICAgIGNoYW5nZVN0YXRlKGUpXG4gICAgICAgIH0pXG4gICAgfSBcblxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuXG4vLyBjb25zb2xlLmxvZyhyb3cpXG4vLyBsZXQgcG9zID0gY29sXG5cbi8vIC8vIGxldCBwb3MgPSBbcm93LCBjb2xdXG4vLyAvLyBkZWJ1Z2dlclxuLy8gbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbi8vIGxpLmRhdGFzZXQuaWQgPSBgJHtKU09OLnN0cmluZ2lmeShbcm93LCBjb2xdKX1gXG4vLyBsaS5kYXRhc2V0LmlkID0gYCR7SlNPTi5zdHJpbmdpZnkoKHBvc1swXSxwb3NbMV0pKX1gXG5cbi8vIGxpLmNsYXNzTmFtZSA9ICdib2FyZHBvc2l0aW9ucydcbi8vIGxpLmlubmVyVGV4dCA9IGAke3Bvc31gXG4vLyB1bC5hcHBlbmQobGkpIFxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgcG9zID0gW2ksIGpdXG4gICAgICAgIC8vICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgLy8gICAgICAgICBsaS5kYXRhc2V0LmlkID0gYCR7SlNPTi5zdHJpbmdpZnkocG9zKX1gXG4gICAgICAgIC8vICAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2JvYXJkcG9zaXRpb25zJ1xuICAgICAgICAvLyAgICAgICAgIGxpLmlubmVyVGV4dCA9IGAke3Bvc31gIC8vaG9wZWZ1bGx5IHRoZXJlIGFyZSAyNSBidXQgd2lsbCBzZXR0bGUgZm9yIDVgXG4gICAgICAgIC8vICAgICAgICAgdWwuYXBwZW5kKGxpKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9Il0sIm5hbWVzIjpbIkJvYXJkIiwicmVxdWlyZSIsIlZpZXciLCJjb25zdHJ1Y3RvciIsImh0bWxFbCIsImJvYXJkIiwic2V0VXBCb2FyZCIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ3JpZCIsImZvckVhY2giLCJyb3ciLCJySWR4IiwidGlsZSIsImNJZHgiLCJzdGF0ZSIsInBvcyIsImxpIiwiZGF0YXNldCIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5zIiwiaW5uZXJUZXh0IiwibWFya3MiLCJhcHBlbmQiLCJjaGFuZ2VDbGFzcyIsInJlcGxhY2UiLCJjbGlja1RpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VTdGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/extinguish-view.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n\nclass Game {\n  constructor() {\n    this.grid = new Board();\n    console.log(this.grid); // console.log(winRound)\n  }\n\n}\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFyQjs7QUFFQSxNQUFNQyxJQUFOLENBQVc7RUFDUEMsV0FBVyxHQUFHO0lBQ1YsS0FBS0MsSUFBTCxHQUFZLElBQUlKLEtBQUosRUFBWjtJQUNBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLRixJQUFqQixFQUZVLENBR1Y7RUFFSDs7QUFOTTs7QUFVWEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixJQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGluZ3Vpc2gvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9ib2FyZFwiKVxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEJvYXJkKClcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aW5Sb3VuZClcblxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iXSwibmFtZXMiOlsiQm9hcmQiLCJyZXF1aXJlIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiZ3JpZCIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/splash.js":
/*!*******************************!*\
  !*** ./src/scripts/splash.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Splash {\n  constructor(htmlEl) {\n    this.htmlEl = htmlEl;\n  }\n\n  displaySplash(htmlEl) {\n    console.log(htmlEl);\n    let confirmButton = htmlEl.createElement('button');\n    button.innerText = \"Confirm\";\n    this.htmlEl.append(confirmButton);\n  }\n\n}\n\nmodule.exports = Splash;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcGxhc2guanMuanMiLCJuYW1lcyI6WyJTcGxhc2giLCJjb25zdHJ1Y3RvciIsImh0bWxFbCIsImRpc3BsYXlTcGxhc2giLCJjb25zb2xlIiwibG9nIiwiY29uZmlybUJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJpbm5lclRleHQiLCJhcHBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRpbmd1aXNoLy4vc3JjL3NjcmlwdHMvc3BsYXNoLmpzPzczZGUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3BsYXNoIHtcbiAgICBjb25zdHJ1Y3RvcihodG1sRWwpIHtcblxuICAgICAgICB0aGlzLmh0bWxFbCA9IGh0bWxFbFxuXG4gICAgfVxuXG4gICAgZGlzcGxheVNwbGFzaChodG1sRWwpe1xuICAgICAgICBjb25zb2xlLmxvZyhodG1sRWwpXG4gICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gaHRtbEVsLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIkNvbmZpcm1cIlxuICAgICAgICB0aGlzLmh0bWxFbC5hcHBlbmQoY29uZmlybUJ1dHRvbilcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsYXNoO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLENBQWE7RUFDVEMsV0FBVyxDQUFDQyxNQUFELEVBQVM7SUFFaEIsS0FBS0EsTUFBTCxHQUFjQSxNQUFkO0VBRUg7O0VBRURDLGFBQWEsQ0FBQ0QsTUFBRCxFQUFRO0lBQ2pCRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtJQUNBLElBQUlJLGFBQWEsR0FBR0osTUFBTSxDQUFDSyxhQUFQLENBQXFCLFFBQXJCLENBQXBCO0lBQ0FDLE1BQU0sQ0FBQ0MsU0FBUCxHQUFtQixTQUFuQjtJQUNBLEtBQUtQLE1BQUwsQ0FBWVEsTUFBWixDQUFtQkosYUFBbkI7RUFDSDs7QUFaUTs7QUFlYkssTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixNQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/splash.js\n");

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