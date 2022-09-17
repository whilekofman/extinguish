class Board {
    constructor() {
        this.grid = Board.makeGrid();
    }


    static makeGrid() {
        const grid = [];

        for (let i = 0; i < 5; i++) {
            // grid.push([]);
            let row = []
            for (let j = 0; j < 5; j++) {
                row.push(false);
            }
        }

        return grid;
    }
}

module.exports = Board;


//not sure if this will reain static down the line, may allow variation on grid size
