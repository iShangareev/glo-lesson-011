const inputText = document.querySelector('input[type="text"]')
const inputRange = document.querySelector('input[type="range"]')
const button = document.querySelector('#btn')
const buttonJ = document.querySelector('#e_btn')
const square = document.querySelector('#square')
const circle = document.querySelector('#circle')
let inputValue = '';


const getColor = function (e) {
  inputValue = e.target.value
}

const setBackground = function () {
  square.style.backgroundColor = inputValue
}

const setWidth = function (e) {
  circle.style.width = e.target.value + '%'
  circle.style.height = e.target.value + '%'
}

inputText.addEventListener('change', getColor)
button.addEventListener('click', setBackground)

buttonJ.style.display = 'none'

inputRange.addEventListener('input', setWidth)




