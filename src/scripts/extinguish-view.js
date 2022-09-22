const Board = require("./board.js")
const Game = require("./game.js")

class View {
    constructor(htmlEl, game){
        this.game = new game()
        this.htmlEl = htmlEl
        this.board = this.game.grid
        this.setUpBoard(htmlEl)
   
        this.registerClick()
        
    }
    setUpBoard(htmlEl) {
        

        let ul = document.createElement('ul')
        this.board.grid.forEach ((row, rIdx) => {
            row.forEach((tile, cIdx) => {
                let state = tile
                let pos = [rIdx, cIdx]
                let li = document.createElement('li');
                li.dataset.id = `${JSON.stringify(pos)}`
                if (state === 0){
                    li.classList.add(`${state}`,'false', 'boardpositions')
                } else {
                    li.classList.add(`${state}`, 'true', 'boardpositions')

                }
                if (li.classList.contains('false')){
                    li.innerText = `${Board.marks[0]}`
                } else {
                    li.innerText = `${Board.marks[1]}`
                }
                ul.appendChild(li)
                
            })
        })
        ul.className= "game-grid"
        htmlEl.appendChild(ul)
    }

    


    redrawGrid(){
        let allLi = this.htmlEl.getElementsByClassName("boardpositions")
        for(let li of allLi) {
            if (li.classList.contains('false')) {
                li.innerText = `${Board.marks[0]}`
            } else {
                li.innerText = `${Board.marks[1]}`
            }
        }

    }


    registerClick() {
        const ul = document.querySelector('.game-grid')
        ul.addEventListener('click', (e) => {
            const tile = e.target
            const tilePosition = JSON.parse(tile.dataset.id) 
            this.changeClass(tile) 
            this.board.changeState(tilePosition)    
            let neighboringTiles = this.board.moveMatrix(tilePosition)
            this.changeNeighbors(neighboringTiles)
            if (this.board.winRound()) {
                this.redrawGrid()

                console.log('congratulations!')
               
            }

            this.redrawGrid()
        })
    } 
    
    

    changeNeighbors(neighbors) {
        for (let pos of neighbors) {
            this.board.changeState(pos)
            const dataId = JSON.stringify(pos)
            const tile = document.querySelector(`[data-id="${dataId}"]`)
            this.changeClass(tile)
        }
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

