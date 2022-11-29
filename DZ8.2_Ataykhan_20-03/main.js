const text = document.createElement('p')
const statusDisplay = document.querySelector('.status')
const win = () => `Player ${currentPlayer} won!`
const draw = () => `draw!`

let gameActive = true
let currentPlayer = 'X'
let gameState = ['', '', '', '', '', '', '', '', '']

setModal = () => {
    const div = document.createElement('div')
    const restartButton = document.createElement('button')
    div.setAttribute('class', 'modal')
    
    div.append(text)
    document.body.append(div)
    div.append(restartButton)

    restartButton.innerText = 'Restart'

    restartButton.addEventListener('click', () => {
        div.style.display ='none'
        handleRestartGame()
    })
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

CellPlayed = (clickedCell, clickedCellIndex) => {
    gameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer
}

handleResultValidation = () => {

    let roundWon = false

    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i]
        let a = gameState[winCondition[0]]
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]
        if (a === '' || b === '' || c === '') {
            continue
        }
        if (a === b && b === c) {
            roundWon = true
            break
        }
    }

    if (roundWon) {
        setModal()
        text.innerHTML = win();
        gameActive = false
        return
    }
    let roundDraw = !gameState.includes('')
    if (roundDraw) {
        setModal()
        text.innerHTML = draw()
        gameActive = false
        return
    }

    Change()
}

Change = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

CellClick = (clickedCellE) => {
    const clickedCell = clickedCellE.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    )

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return
    }

    CellPlayed(clickedCell, clickedCellIndex)
    handleResultValidation()
}

handleRestartGame = () => {
    gameActive = true
    currentPlayer = 'X'
    gameState = ['', '', '', '', '', '', '', '', '']
    document.querySelectorAll('.cell')
        .forEach(cell => cell.innerHTML = '')
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', CellClick))