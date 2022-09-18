// export class View
const Board = require("../src/scripts/board.js")

class View {
    constructor(htmlEl, board){
        this.board = new board()
        this.htmlEl = htmlEl
  
        this.setUpBoard(htmlEl)

        
    }
    

    setUpBoard(htmlEl) {
        const ul = document.createElement('ul')
        this.board.grid.forEach ((row, rIdx) => {
            row.forEach((tile, cIdx) => {
                let state = tile
                let pos = [rIdx, cIdx]
                let li = document.createElement('li');
                li.dataset.id = `${JSON.stringify(pos)}`
                // li.className = `${state}`
                li.classList.add(`${state}`, 'boardpositions')
                if (li.classList.contains('false')){
                    li.innerText = `${state}`
                } else {
                    li.innerText = `${Board.marks[1]}`
                }
                ul.append(li)
            })
        })
        ul.dataset.id = "game-grid"
        htmlEl.append(ul)         

    }

    
    userClick(e){
        let tile = e.target
        if (tile.status === false){
            tile.status = true
        } else {
            tile.status = false
        }
    } 

    // toggleTile()
}



module.exports = View;

// console.log(row)
// let pos = col

// // let pos = [row, col]
// // debugger
// let li = document.createElement('li');
// li.dataset.id = `${JSON.stringify([row, col])}`
// li.dataset.id = `${JSON.stringify((pos[0],pos[1]))}`

// li.className = 'boardpositions'
// li.innerText = `${pos}`
// ul.append(li) 
        // for (let i = 0; i < 5; i++) {
        //     for (let j = 0; j < 5; j++) {
        //         let pos = [i, j]
        //         let li = document.createElement('li');
        //         li.dataset.id = `${JSON.stringify(pos)}`
        //         li.className = 'boardpositions'
        //         li.innerText = `${pos}` //hopefully there are 25 but will settle for 5`
        //         ul.append(li)
        //     }
        // }