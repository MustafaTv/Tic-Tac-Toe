// script //

function gameOver() {
const restart = document.querySelector('#restart')
restart.addEventListener('click', () => {
  one.textContent = '',
  two.textContent = '',
  three.textContent = '',
  four.textContent = '',
  five.textContent = '',
  six.textContent = '',
  seven.textContent = '',
  eight.textContent = '',
  nine.textContent = '',
  turn.textContent = "Player X's turn"
})
}

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')

const turn = document.querySelector('.turn')

one.addEventListener('click', () => {
  if ((one.textContent === 'X') || (one.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    one.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    one.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

two.addEventListener('click', () => {
  if ((two.textContent === 'X') || (two.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    two.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    two.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

three.addEventListener('click', () => {
  if ((three.textContent === 'X') || (three.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    three.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    three.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

four.addEventListener('click', () => {
  if ((four.textContent === 'X') || (four.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    four.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    four.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

five.addEventListener('click', () => {
  if ((five.textContent === 'X') || (five.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    five.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    five.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

six.addEventListener('click', () => {
  if ((six.textContent === 'X') || (six.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    six.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    six.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

seven.addEventListener('click', () => {
  if ((seven.textContent === 'X') || (seven.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    seven.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    seven.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

eight.addEventListener('click', () => {
  if ((eight.textContent === 'X') || (eight.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    eight.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    eight.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

nine.addEventListener('click', () => {
  if ((nine.textContent === 'X') || (nine.textContent === 'O')) {
    alert('Space already in use!') 
  } else if (turn.textContent === "Player X's turn") {
    nine.textContent = 'X', turn.textContent = "Player O's turn"
  } else if (turn.textContent === "Player O's turn") {
    nine.textContent = 'O', turn.textContent = "Player X's turn"
  } checkWinner()
})

function checkWinner() {
  if ( ((one.textContent === 'X') && (two.textContent === 'X') && (three.textContent === 'X'))
  || ((four.textContent === 'X') && (five.textContent === 'X') && (six.textContent === 'X'))
  || ((seven.textContent === 'X') && (eight.textContent === 'X') && (nine.textContent === 'X'))
  || ((one.textContent === 'X') && (four.textContent === 'X') && (seven.textContent === 'X'))
  || ((two.textContent === 'X') && (five.textContent === 'X') && (eight.textContent === 'X'))
  || ((three.textContent === 'X') && (six.textContent === 'X') && (nine.textContent === 'X'))
  || ((one.textContent === 'X') && (five.textContent === 'X') && (nine.textContent === 'X'))
  || ((three.textContent === 'X') && (five.textContent === 'X') && (seven.textContent === 'X')) ) {
    turn.textContent = 'Player X has won the game!'
  } else if ( ((one.textContent === 'O') && (two.textContent === 'O') && (three.textContent === 'O'))
  || ((four.textContent === 'O') && (five.textContent === 'O') && (six.textContent === 'O'))
  || ((seven.textContent === 'O') && (eight.textContent === 'O') && (nine.textContent === 'O'))
  || ((one.textContent === 'O') && (four.textContent === 'O') && (seven.textContent === 'O'))
  || ((two.textContent === 'O') && (five.textContent === 'O') && (eight.textContent === 'O'))
  || ((three.textContent === 'O') && (six.textContent === 'O') && (nine.textContent === 'O'))
  || ((one.textContent === 'O') && (five.textContent === 'O') && (nine.textContent === 'O'))
  || ((three.textContent === 'O') && (five.textContent === 'O') && (seven.textContent === 'O'))
  ) {
    turn.textContent = 'Player O has won the game!'
  } else if ((one.textContent.trim() !== "") && (two.textContent.trim() !== "") && (three.textContent.trim() !== "") 
  && (four.textContent.trim() !== "") && (five.textContent.trim() !== "") && (six.textContent.trim() !== "")
  && (seven.textContent.trim() !== "") && (eight.textContent.trim() !== "") && (nine.textContent.trim() !== "")
  ) { 
    turn.textContent = "It's a tie!" 
  } else {
    gameOver()
  }
}