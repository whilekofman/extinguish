const Board = require("./board")


class Game {
    constructor() {

        this.grid = new Board(this.easyLevels())
    }

    easyLevels() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let lengthArr = Game.level1.length
        let randomEasyIndex = getRandomInt(lengthArr)

        let randomEasyLvl = Game.level1[randomEasyIndex]

        return this.numsToGrid(randomEasyLvl)

    }
    
    numsToGrid(arr) {
        const grid = []
        arr.forEach(num => {
            const row = []
            let i = 0
            let numCopy = num
            while (i < 5) {
                row.unshift(numCopy & 1)
                numCopy = numCopy >> 1
                i ++
            }
            grid.push(row)
        })
        return(grid)
    }
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
