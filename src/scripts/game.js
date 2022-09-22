const Board = require("./board")
const LvlGen = require("./lvlgen.js")


class Game {
    constructor() {

        this.grid = new Board(this.easyLevels())
        // debugger
    }

    easyLevels() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        let lengthArr = Game.level1.length
        let randomEasyIndex = getRandomInt(lengthArr)

        let randomEasyLvl = Game.level1[randomEasyIndex]
        // let randomEasyLvl = Game.level1[5]

        let gameRows = []

        // randomEasyLvl.forEach(num => gameRows.push(Game.indexedHash[num]))

        // let gameRows = this.numToRow(randomEasyLvl)
        // return gameRows
        return this.numsToRow(randomEasyLvl)

    }
    

    numsToRow(arr) {
        const grid = []
        arr.forEach(num => {

            let stringRow = ('0000' + num.toString(2)).split('').slice(-5)
            let row = []
            stringRow.forEach(num =>{
                // debugger
                row.push(Math.floor(num))
            } )

            grid.push(row)
        })
        return grid
    }
}
    

Game.indexedHash = {
    '0': [0, 0, 0, 0, 0],
    '1': [0, 0, 0, 0, 1],
    '2': [0, 0, 0, 1, 0],
    '3': [0, 0, 0, 1, 1],
    '4': [0, 0, 1, 0, 0],
    '5': [0, 0, 1, 0, 1],
    '6': [0, 0, 1, 1, 0],
    '7': [0, 0, 1, 1, 1],
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
const plus = [7, 15, 6, 7, 2]
const original =[31, 0, 31, 0, 31]

Game.level1 = [
    topRightCorner, botRightCorner, topLeftCorner, botLeftCorner, topLCLT, plus, original
]






window.view = Game
module.exports = Game;
