let arr = []
for (let i = 0; i <= 10; i++){
    arr.push(i)
}
console.log(arr)
for (let i = 20; i >= 0; i--){
    console.log(i)
}


let id = prompt('Введите цвет светофора: ')

if (id === "Красный" || id === "красный") {
    alert ("Остановитесь!")
} else if (id === "Зеленый" || id === "зеленый" || id === "Зелёный" || id === "зелёный") {
    alert ("Вперед!")
} else if (id === "Желтый" || id === "желтый" || id === "Жёлтый" || id === "жёлтый") {
    alert ("Приготовтесь")
}
else {
    alert("Нужно вводить цвет")
} 