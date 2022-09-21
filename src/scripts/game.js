const Board = require("./board")
const LvlGen = require("./lvlgen.js")


class Game {
    constructor() {

        this.grid = new Board(this.easyLevels(), Game.indexedHash)
        // debugger
    }

    easyLevels() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        let lengthArr = Game.level1.length
        let randomEasyIndex = getRandomInt(lengthArr)
        let randomEasyLvl = Game.level1[randomEasyIndex]
        return randomEasyLvl

    }


}
Game.indexedHash = {
    '0': [0, 0, 0, 0, 0],
    '1': [0, 0, 0, 0, 1],
    '2': [0, 0, 0, 1, 0],
    '3': [0, 0, 0, 1, 1],
    '4': [0, 0, 1, 0, 0],
    '5': [0, 0, 1, 0, 1],
    '6': [0, 0, 1, 1, 1],
    '7': [0, 0, 1, 1, 0],
    '8': [0, 1, 0, 0, 0],
    '9': [0, 1, 0, 0, 1],
    '10': [0, 1, 0, 1, 0],
    '11': [0, 1, 0, 1, 1],
    '12': [0, 1, 1, 0, 0],
    '13': [0, 1, 1, 0, 1],
    '14': [0, 1, 1, 1, 0],
    '15': [0, 1, 1, 1, 1],
    '16': [1, 0, 0, 0, 0],
    '17': [1, 0, 0, 0, 1],
    '18': [1, 0, 0, 1, 0],
    '19': [1, 0, 0, 1, 1],
    '20': [1, 0, 1, 0, 0],
    '21': [1, 0, 1, 0, 1],
    '22': [1, 0, 1, 1, 0],
    '23': [1, 0, 1, 1, 1],
    '24': [1, 1, 0, 0, 0],
    '25': [1, 1, 0, 0, 1],
    '26': [1, 1, 0, 1, 0],
    '27': [1, 1, 0, 1, 1],
    '28': [1, 1, 1, 0, 0],
    '29': [1, 1, 1, 0, 1],
    '30': [1, 1, 1, 1, 0],
    '31': [1, 1, 1, 1, 1]
}


const topRightCorner = [3, 1, 0, 0, 0]
const botRightCorner = topRightCorner.reverse()
const topLeftCorner = [24, 16, 0, 0, 0]
const botLeftCorner = topLeftCorner.reverse()
const topLCLT = [24, 16, 16, 24, 16]

Game.level1 = [
    topRightCorner, botRightCorner, topLeftCorner, botLeftCorner, topLCLT
]







window.view = Game
module.exports = Game;
