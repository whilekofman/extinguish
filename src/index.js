const View = require("../src/scripts/extinguish-view.js")
const Game = require("../src/scripts/game.js")
const Board = require("../src/scripts/board.js")

window.View = View;
document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('gameboard')
    const instructions = document.getElementById('about')
    new View(main, Game);

    
})