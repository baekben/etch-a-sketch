const grid = document.getElementById('grid');

function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    cell.innerText = i + 1; //number each cell
    grid.appendChild(cell).className = 'cell';
  }
}

createGrid(16, 16);
