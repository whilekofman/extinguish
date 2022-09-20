const View = require("../src/scripts/extinguish-view.js")
const Game = require("../src/scripts/game.js")
const Board = require("../src/scripts/board.js")
const Splash = require("../src/scripts/splash.js")
window.View = View;
document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('gameboard')
    new View(main, Game);
    const splashScreen = document.getElementById("splash") 
    // new View(main, Board);
    new Splash(splashScreen)
    
})