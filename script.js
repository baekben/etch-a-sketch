//global variable
const grid = document.getElementById('grid');
const cell = document.getElementsByClassName('cell');
const container = document.getElementById('container');
const reset = document.getElementById('reset');

function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    //cell.innerText = i + 1; //number each cell
    grid.appendChild(cell).className = 'cell';
  }
}

//drawing
function color(option) {
  container.addEventListener('mouseover', e => {
    if (e.target.className === 'cell' && option == null) {
      e.target.style.backgroundColor = 'black';
    } else if (e.target.className === 'cell' && option == 'random') {
      e.target.style.backgroundColor =
        'rgb(' + randColor() + ',' + randColor() + ',' + randColor() + ')';
    }
  });
}
function randColor() {
  return Math.floor(Math.random() * 256);
}

function gameStart() {
  createGrid(16, 16);
}

function newBoard() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  var play = window.prompt('How big would you like the grid? (1-100)');
  while (play < 1 || play > 100) {
    play = window.prompt('How big would you like the grid? (1-100)');
  }
  createGrid(play, play);
}
