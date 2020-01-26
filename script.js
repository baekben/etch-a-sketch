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
  var play = window.prompt('Would you like to change the board size?');
  if (play.charAt(0) == ('y' || 'Y')) {
    var size = window.prompt('What new size would you like?');
    grid.innerHTML = '';
    createGrid(size, size);
  } else if (play.charAt(0) == ('n' || 'N')) {
    const clear = document.querySelectorAll('#container div');
    clear.forEach(cell => {
      cell.style.backgroundColor = 'white';
    });
    gameStart();
  } else {
    alert("Sorry. I didn't get that");
    play;
  }
}
