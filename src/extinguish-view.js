// export class View

class View {
    constructor(htmlEl){
        // this.board = board
        this.htmlEl = htmlEl
  
        this.setUpBoard(htmlEl)

        
    }
    setUpBoard(htmlEl) {
        const ul = document.createElement('ul')
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                let pos = [i, j]
                let li = document.createElement('li');
                li.dataset.id = `${JSON.stringify(pos)}`
                li.className = 'boardpositions'
                li.innerText = `${pos} hopefully there are 25 but will settle for 5`
                ul.append(li)         
            }
        }
        ul.dataset.id = "game-grid"
        htmlEl.append(ul)         

    }
}

module.exports = View;

