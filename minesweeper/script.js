// populate the board with tiles
const board = document.querySelector('.board')

for (let i = 0; i < 100; i++) {
    const element = document.createElement('div')
    element.setAttribute('data-status', 'hidden')
    element.innerText = '1'
    board.appendChild(element)
}

// change the tiles to marked when they are right clicked

// when you left click a tile, check if it is a mine, number tile, or empty space tile