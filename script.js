
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attemptsLeft = 7;

let userGuessNum = document.getElementById("userNumber");

let resultDisplay = document.getElementById("result_display");
let remainingAttempts = document.getElementById("attempts-left");
let submiButton = document.getElementById("guess_btn");


function userGuessCheck(){

  if(isNaN(userGuessNum.value) || userGuessNum.value < 1 || userGuessNum.value > 100) {
    resultDisplay.innerText = "Please enter a valid number between 1 - 100";
    userGuessNum.value = "";
    return;
  }

  attemptsLeft--;
  remainingAttempts.innerText = attemptsLeft;

  if(Number(userGuessNum.value) === secretNumber) {
    resultDisplay.innerHTML = "<h2>Applause! You guess it right.</h2> <img src= './images/congrats-gif-49.gif' >";
    resultDisplay.style.color = "rgb(0, 7, 99, 0.8)";
    userGuessNum.value = "";
    userGuessNum.disabled = true;
    submiButton.disabled = true;
  }
  else if(attemptsLeft === 0) {
    resultDisplay.innerText = `😢Game Over! the number was ${secretNumber}, play again`;
    userGuessNum.disabled = true;
    submiButton.disabled = true;
  }
  else if(Number(userGuessNum.value)< secretNumber) {
    resultDisplay.innerHTML = ` <h2>Too low, try again</h2> <img src='./images/tryagain.gif' > `;  
    resultDisplay.style.color = "rgb(0, 7, 99, 0.8)";
    userGuessNum.value = "";
  }
  else{
    resultDisplay.innerHTML = `<h2>Too high, try again</h2> <img src='./images/tryagain.gif' >`;
    resultDisplay.style.color = "rgb(0, 7, 99, 0.8)";
    userGuessNum.value = "";
  }

  userGuessNum.value = "";
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 7;
  remainingAttempts.innerText = attemptsLeft;
  resultDisplay.innerText = " ";
  userGuessNum.value = " ";
  userGuessNum.disabled = false;
  submiButton.disabled = false;
}




