const Board = require("./board")

class Game {
    constructor() {
        this.grid = new Board()
        console.log(this.grid)
        // console.log(winRound)
    }

    moveMatrix(pos){
        const posChangers = [
            [0, 1], //one right
            [1, 0], //one down
            [-1, 0] //one up
            [0, -1] //one left
        ]

        const [row, col] = pos
        const neighbors = []
        
        findNeighbors = (row, col) => {
            if (row === 0 && col === 0){
                const posAdjusters = posChangers.slice(0, 1)
                posAdjusters.forEach(ele => {
                    let [x, y] = ele
                    neighbors.push([row + x, col + y])
                })
            }
        }
        
        return findNeighbors(row, col)
    }



}

module.exports = Game;
