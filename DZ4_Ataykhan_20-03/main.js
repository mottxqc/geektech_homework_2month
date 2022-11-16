const nol = document.getElementById("nol")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

plus.onclick = function(){
    nol.style.color="green"
    nol.innerHTML++}
minus.onclick = function(){
    nol.style.color = "red"
    if (nol.innerHTML > 0){
        nol.innerHTML--
    }
}


const posX = document.getElementById("posX")
const posY = document.getElementById("posY")

window.addEventListener ("mousemove", event =>{
    let x = event.screenX
    let y = event.screenY
    if (x < 500 && y < 600) {
        posX.innerHTML = x
        posY.innerHTML = y
    }
})


const red = document.getElementById("red")
const green = document.getElementById("green")
const yellow = document.getElementById("yellow")
const text = document.getElementById("text")

var color = prompt("Введите цвет светофора: ").toLowerCase()
    if (color === "красный") {
        function svet() {
            red.innerHTML = "<b>STOP</b>"
            red.style.background = "red"
            red.style.display = "flex"
            red.style.alignItems = "center"
            red.style.justifyContent = "center"
        }
        svet()
    } else if (color === "зеленый") {
        function svet() {
            green.innerHTML = "<b>GO</b>"
            green.style.background = "green"
            green.style.display = "flex"
            green.style.alignItems = "center"
            green.style.justifyContent = "center"
        }
        svet()
    } else if (color === "желтый") {
        function svet() {
            yellow.innerHTML = "<b>READY</b>"
            yellow.style.background = "yellow"
            yellow.style.display = "flex"
            yellow.style.alignItems = "center"
            yellow.style.justifyContent = "center"
        }
        svet()
    } else {
        alert ("Введите цвет")
    }