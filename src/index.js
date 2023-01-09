const View = require("../src/scripts/extinguish-view.js")
const Game = require("../src/scripts/game.js")
const Board = require("../src/scripts/board.js")
const About = require ("../src/scripts/about")

window.View = View;
window.View = About;
document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('gameboard')
    const instructions = document.getElementById('about')
    new View(main, Game);

    
})