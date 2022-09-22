
class Board {
        constructor(arr){
        this.grid = Board.makeGrid(arr);
    }


    static makeGrid(arr) {
        const grid = arr;
        // debugger
        return grid;
    }

    winRound(){
        for(let i = 0; i < this.grid.length; i++){
            let row = this.grid[i]
            for (let col = 0; col < row.length; col++){
                if (row[col] === 1) return false 
            }
        }
        return true
    }
    
    changeState(pos){
        // let tile = this.grid[pos[0]][pos[1]] 
        let [row, col] = pos
        // debugger
        if (this.grid[row][col] === 0){
            this.grid[row][col] = 1
        } else {
            this.grid[row][col] = 0
        }

    }

    positionAdjuster(pos){
        const posChangers = [
            [0, 1], //one right
            [1, 0], //one down
            [0, -1], //one left
            [-1, 0] //one up
        ]
        const end = this.grid.length - 1
        const [row, col] = pos
        if (row === 0 && col === 0) {
           return posChangers.slice(0, 2)
        } else if (row === 0 && col === end) {
            return posChangers.slice(1, 3)
        } else if (row === 0) {
            return posChangers.slice(0, 3)
        } else if (row === end && col === 0){
            return [posChangers[0]].concat(posChangers.slice(-1))
        } else if (row === end && col === end){ 
            return posChangers.slice(2)
        } else if (row === end) {
            return [posChangers[0]].concat(posChangers.slice(2))
        } else if (col === end){
            return posChangers.slice(1)
        } else if (col === 0){
            return posChangers.slice(0, 2).concat([posChangers[3]])
        } else {
            return posChangers
        }


    }

    moveMatrix(pos) {

        const [row, col] = pos
        const neighbors = []
        this.positionAdjuster(pos).forEach(ele => {
                let [x, y] = ele
                neighbors.push([row + x, col + y])
        })
        return neighbors
    }
}



Board.marks = [
    '🌳🌳🌳🌳', 
    '🔥🔥🔥🔥'
]

module.exports = Board;


//not sure if this will reain static down the line, may allow variation on grid size
// if (this.grid[pos[0]][pos[1]] === 'off') {
//     this.grid[pos[0]][pos[1]] = 'on'
// } else {
//     this.grid[pos[0]][pos[1]] = 'off'
// }
// // debugger
// console.log(this.winRound())

// let tile = this.grid[pos[0]][pos[1]]
// // debugger
// if (tile === false) {
//     tile = true
// } else {
//     tile = false
// }
// debugger
// console.log(this.winRound())

// debugger...


        // if (row === 0 && col === 0) {
        //     const posAdjusters = posChangers.slice(0, 2)
        //     posAdjusters.forEach(ele => {
        //         let [x, y] = ele
        //         neighbors.push([row + x, col + y])
        //     })
        // } else if (row === 0 && col === this.grid.length -1){
        //     const posAdjusters = posChangers.slice(1,3)
        //     posAdjusters.forEach(ele => {
        //         let [x, y] = ele
        //         // debugger
        //         neighbors.push([row + x, col + y])
        //     })
        // }
