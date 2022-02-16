const rangeForm = document.querySelector(".range-form"); //새로고침 막기용도 form
const guessForm = document.querySelector(".guess-form"); //새로고침 막기용도 form
const button = document.querySelector("button"); //클릭이벤트
const rangeInput = document.querySelector("#range-input");
const guessInput = document.querySelector("#guess-input");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");


rangeForm.addEventListener("submit", rangeSubmit);
guessForm.addEventListener("submit", guessSubmit);
button.addEventListener("click", guessClick);

function rangeSubmit(event) {
  event.preventDefault();
} 
function guessSubmit(event) {
  event.preventDefault();
}

function guessClick(event) {
  const rangeNumber = parseInt(rangeInput.value);
  const guessNumber = parseInt(guessInput.value);
  
  if (0 <= guessNumber && guessNumber <= rangeNumber) {
    const randomNumber = Math.ceil(Math.random()*rangeNumber);
    result1.innerText = "You chose: "+guessNumber+", the machine chose: "+randomNumber;
    
    if (guessNumber === randomNumber){
      result2.innerText = "You win!";
    } else {
      result2.innerText = "You lost!";
    }
  }
  // else if(guessNumber > randomNumber){
  //   alert("범위 안의 숫자를 입력해주세요");
  // }
  else if (guessNumber > rangeNumber) {
    alert("범위 안의 숫자를 입력해주세요")
  }
  else {
    alert("빈칸에 숫자를 입력해주세요")
  }

}
