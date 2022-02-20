const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  loginForm.classList.add("hidden");
  paintGreetings(savedUsername);
}

function paintGreetings(name){
  greeting.classList.remove("hidden");
  greeting.innerText = ("Hello "+name+"!");
}

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add("hidden")
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
}

