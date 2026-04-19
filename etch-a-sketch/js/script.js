const gridContainer = document.querySelector('#grid');

let isMouseDown = false;
document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

gridContainer.addEventListener('mouseover', (event) => {
    const cell = event.target;
    if (isMouseDown && cell.classList.contains('grid-cell')) {
        if (userWantsRandomColors) {
            cell.style.backgroundColor = getRandomColor();
        } else {
            cell.style.backgroundColor = drawnColor;
        }
        const currentOpacity = parseFloat(cell.style.opacity);
        cell.style.opacity = Math.max(0, currentOpacity + 0.1);
    }
});

gridContainer.addEventListener('mousedown', (event) => {
    const cell = event.target;
    if (cell.classList.contains('grid-cell')) {
        if (userWantsRandomColors) {
            cell.style.backgroundColor = getRandomColor();
        } else {
            cell.style.backgroundColor = drawnColor;
        }
        const currentOpacity = parseFloat(cell.style.opacity);
        cell.style.opacity = Math.max(0, currentOpacity + 0.1);
    }
});

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createGrid(num) {
    gridContainer.innerHTML = '';

    const cellSize = 100 / num;


    for (let i = 0; i < num * num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        cell.style.opacity = 0;
        gridContainer.appendChild(cell);
    }
}

let currentGridSize = 16;
createGrid(16);


function changeGridSize() {
    let validNumber = false;
    let newGridSize;
    while (!validNumber) {
        newGridSize = +prompt('Enter size of grid as a single number: e.g. 8');
        if (newGridSize > 0 && newGridSize <= 100) {
            validNumber = true;
        } else {
            alert("Grid size must be between 0 and 100.");
        }
    }
    currentGridSize = newGridSize;
    createGrid(newGridSize);
}

function resetGrid() {
    createGrid(currentGridSize);
}

let userWantsRandomColors = false;
const drawnColor = '#2C2C2C';

function toggleRandomColor() {
    if (userWantsRandomColors) {
        userWantsRandomColors = false;
        document.querySelector('#btn-random-color').textContent = 'Random Colors';
    } else {
        userWantsRandomColors = true;
        document.querySelector('#btn-random-color').textContent = 'Revert to Black'
    }
}
