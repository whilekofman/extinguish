// export class View
const Board = require("./board.js")

class View {
    constructor(htmlEl, board){
        this.board = new board()
        this.htmlEl = htmlEl
  
        this.setUpBoard(htmlEl)
        
        this.registerClick()
        
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
        ul.className= "game-grid"
        htmlEl.append(ul)
    }

    redrawGrid(){
        let allLi = this.htmlEl.getElementsByClassName("boardpositions")
        for(let li of allLi) {
            if (li.classList.contains('false')) {
                li.innerText = `false`
            } else {
                li.innerText = `${Board.marks[1]}`
            }
        }

    }

    registerClick() {
        const ul = document.querySelector('.game-grid')
        // debugger
        ul.addEventListener('click', (e) => {
            const tile = e.target
            const tilePosition = JSON.parse(tile.dataset.id) 
            this.changeClass(tile) 
            this.board.changeState(tilePosition)    
            let neighboringTiles = this.board.moveMatrix(tilePosition)
            console.log(neighboringTiles)
            for (let pos of neighboringTiles) {
                this.board.changeState(pos)    
                const dataId = JSON.stringify(pos)
                const tile = document.querySelector(`[data-id="${dataId}"]`) 
                this.changeClass(tile)
            }
            if(this.board.winRound()) console.log('congratulations!') 
            this.redrawGrid()
        })
    } 

    changeClass(li){
        if (li.classList.contains('true')) {
            li.classList.replace('true', 'false');
        } else if (li.classList.contains('false')) {
            li.classList.replace('false', 'true')
        }
    }

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