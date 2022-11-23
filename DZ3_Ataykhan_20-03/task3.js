var num1 = Number(prompt("Введите значение a: "))
var num2 = Number(prompt("Введите значение b: "))
var operation = prompt("Введите операцию(+, -, *, /): ") 
    function Calculator (a, b, operation) {
    if(operation === "+") {
        alert(a + b)
    } else if(operation === "-") {
        alert(a - b)
    } else if(operation === "*") {
        alert(a * b)
    } else if(operation === "/") {
        alert(a / b)
    } else {
        alert("Вы ввели не ту операцию")
    }
}
Calculator(num1, num2, operation)
