class Board {
    constructor() {
        this.grid = Board.makeGrid();
        console.log(this.winRound())

    }


    static makeGrid() {
        const grid = [];
        for (let i = 0; i < 5; i++) {
            let posValue = false
            let row = []
            for (let j = 0; j < 5; j++) {
                if (i % 2 === 0) posValue = true
                row.push(posValue);
            }
            grid.push(row);
        }
        return grid;
    }

    winRound(){
        for(let i = 0; i < this.grid.length; i++){
            let row = this.grid[i]
            for (let col = 0; col < row.length; col++){
                if (row[col] === true) return false 
            }
        }
        return true
    }
    
    changeState(tile){
        if (tile === false){
            tile = true
        } else {
            tile = false
        }
    }

}

Board.marks = ['', '🔥']

module.exports = Board;


//not sure if this will reain static down the line, may allow variation on grid size
