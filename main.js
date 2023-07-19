/* for(i=1;i<=256;i++) {
    const firstContainer = document.getElementById("container")
    let grid = document.createElement('div')
    // grid.textContent = 'grid'
    grid.classList.add('grid')
    firstContainer.appendChild(grid)
    grid.addEventListener('mouseover', () => { //ce qui colorie 
        grid.style.backgroundColor = 'black';
    })
} */

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div"); //choisir que les div dans notre board
    squares.forEach((div) => div.remove()); //on enleve ce dont on a pas besoin
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div'); //cree la div
        square.addEventListener('mouseover', () => square.style.backgroundColor = 'black')
        // square.style.backgroundColor = 'pink'; //style
        square.style.borderStyle = "solid"; //style
        square.style.borderWidth = "thin"
        board.appendChild(square); //ajoute
    }
}

populateBoard(16);

function changeSize(input) { //input du html input type="text" etc
    if (input >=2 && input <= 100) {
        populateBoard(input)
    } else {
        console.log('Too many squares')
    }
}


function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
  }