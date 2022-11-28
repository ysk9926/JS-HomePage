const gameForm = document.querySelector("#game_form");
const getNum = document.querySelector(".num1");
const choiceNum = document.querySelector(".num2");
const result = document.querySelector(".game_result");
const choiceNum1 = document.querySelector(".num1_a");
const choiceNum2 = document.querySelector(".num2_a");
const resultText = document.querySelector(".result");

const HIDDEN_CLASSNAME = "hidden";
const GETNUM_KEY = "num1";
const CHOICENUM_KEY = "num2";

function onGameFormSubmit(event) {
  event.preventDefault();
  const num1 = getNum.value;
  localStorage.setItem(GETNUM_KEY, num1);
  const num2 = choiceNum.value;
  localStorage.setItem(CHOICENUM_KEY, num2);
  const savedNum1 = localStorage.getItem(CHOICENUM_KEY);
  choiceNum1.innerText = `${savedNum1}`;
  const savedNum2 = localStorage.getItem(GETNUM_KEY);
  const getRandomNum = Math.floor(Math.random() * savedNum2);
  choiceNum2.innerText = `${getRandomNum}`;
  console.log(savedNum1);
  console.log(getRandomNum);
  if (+savedNum1 >= savedNum2) {
    alert("choice  again");
  } else {
    if (+savedNum1 === getRandomNum) {
      resultText.innerText = `You won!`;
    } else {
      resultText.innerText = `You lost!`;
    }
    result.classList.remove(HIDDEN_CLASSNAME);
    console.dir(resultText);
  }
}

gameForm.addEventListener("submit", onGameFormSubmit);
