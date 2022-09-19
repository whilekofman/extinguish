const View = require("./extinguish-view.js")
const Game = require("../src/scripts/game.js")
const Board = require("../src/scripts/board.js")
window.View = View;
document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('gameboard')
    // new View(main, Game);

    new View(main, Board);
})