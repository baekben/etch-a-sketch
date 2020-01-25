//global variable
const grid = document.getElementById('grid');
const cell = document.getElementsByClassName('cell');
const container = document.getElementById('container');

createGrid(16, 16);

function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    //cell.innerText = i + 1; //number each cell
    grid.appendChild(cell).className = 'cell';
  }
}
//event listener with event mousemove to change background
container.addEventListener('mouseover', e => {
  if (e.target.className === 'cell') {
    e.target.style.backgroundColor = 'black';
  }
});
