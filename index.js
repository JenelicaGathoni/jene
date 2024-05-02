let saveElOne = document.getElementById("save__el__one")
let saveElTwo = document.getElementById("save__el__two")

let countOne = document.getElementById("count__one")
let countTwo =document.getElementById("count__two")

let count = 0
let sum = 0
let addition = 0
function increment(){
    count += 1
    countOne.textContent  = count
}
function manage () {
    let countStr = count + " - "
    saveElOne.textContent += countStr
    countOne.textContent = 0
    count = 0
}
function add(){
    sum += 1
    countTwo.textContent  = sum
}
function save () {
    let sumStr = sum + " - "
    saveElTwo.textContent += sumStr
    countTwo.textContent = 0
    sum = 0
}


