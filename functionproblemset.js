// isEven

// function isEven(num) {
//     if(num % 2 === 0){
//         return true;
//     }
//     else {
//         return false
//     }
// }

function isEven(num){
    return num % 2 === 0;
}

// factorial

function factorial(num){
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    //return the result variable
    return result;
  }

//   KEBAB TO SNAKE

function kebabToSnake(str) {
var newStr = str.replace(/-/g , "_");
return newStr;
}