const rock = 0;
const scissors = 1;
const paper = 2;

let playerChoice = document.querySelector("#playerChoice");
let computerChoice = document.querySelector("#computerChoice");
let result = document.querySelector("#result");


// попросим игрока ввести ответ в виде числа
let player = parseFloat(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
playerChoice.innerHTML = player;
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
computerChoice.innerHTML = computer;

//проверка input
if (player == 0 || player == 1 || player == 2) { 

if ((player == rock && computer == scissors)|| (player == scissors && computer == paper) || (player == paper && computer == rock)) {
    console.log("you: " + player + ", " + "computer: " + computer + ", player won");
    result.innerHTML = " player won";
}  else if (player != computer) {
    console.log("you: " + player + ", " + "computer: " + computer + ", computer won");
    result.innerHTML = " computer won";
} else {
    console.log("you: " + player + ", " + "computer: " + computer + ", draw");
    result.innerHTML = " draw";
} 

} else {
  console.log("incorrect input");
  result.innerHTML = " player technical defeat. Incorrect input";
}




// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
/*if (player == 0 || player == 1 || player == 2) {
  if (player == computer) {
    console.log("you: " + player + ", " + "computer: " + computer + ", draw");
    result.innerHTML = " draw";
  } else if (player == rock && computer == paper) {
    console.log("you: " + player + ", " + "computer: " + computer + ", computer won");
    result.innerHTML = " computer won";
  } else if (player == paper && computer == rock) {
    console.log("you: " + player + ", " + "computer: " + computer + ", player won");
     result.innerHTML = " player won";
  } else if (player > computer) {
    console.log("you: " + player + ", " + "computer: " + computer + ", computer won");
     result.innerHTML = " computer won";
  } else if (player < computer) {
    console.log("you: " + player + ", " + "computer: " + computer + ", player won");
    result.innerHTML = " player won";
  }
} else {
  console.log("incorrect input");
  result.innerHTML = " player technical defeat. Incorrect input";
}*/

