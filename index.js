const saicpcc1920cap = document.querySelector('#saicpcc1920cap')
const saicpcc1920img = document.querySelector('#saicpcc1920img')

function changeColour() {saicpcc1920cap.style.color = 'grey'}
function revertColour() {saicpcc1920cap.style.color = 'black'}

saicpcc1920img.addEventListener('mouseover', changeColour)
saicpcc1920img.addEventListener('mouseleave', revertColour)
