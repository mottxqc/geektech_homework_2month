var num1 = Number(prompt("Введите значение a: "))
var num2 = Number(prompt("Введите значение b: "))
function someComparison (a, b) {
    if(a < b){
        console.log(a)
      }
      else if (a ==b){
        console.log("equal")
      }
      else{
        console.log(b)
      }
    }
    someComparison(num1, num2)