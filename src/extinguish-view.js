class View {
    constructor(board, el){}
        setupBoard() {
        
            //const board = document.querySelector('.ttt');
            let board = document.getElementsByClassName(el);
            let boardPositions = []
            // board.setAttribute("ul")
            let ul = document.createElement("ul")



            boardPositions.forEach((pos) => {
                let li = document.createElement("li");
                li.innerText = pos;
                li.dataset.id = `${[pos]}`;
                ul.appendChild(li);
                board.appendChild(ul);
        });
    }
}
