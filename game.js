// create a secret number
// make a prompt to users to guess a number
// tell if they have guessed it right or wrong

var secretNumber = 4;

var guess = Number(prompt("Guess the number"));
alert(guess);

if(guess === secretNumber) {
    alert("You got it right!!");
}

else if (guess > secretNumber) {
    alert("Too high, guess again!");
}

else {
    alert("Too low, Guess again!");
}