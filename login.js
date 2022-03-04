const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");
const logoutForm = document.querySelector("#logout-form");

if(savedUsername === null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  loginForm.classList.add("hidden");
  logoutForm.classList.remove("hidden");
  paintGreetings(savedUsername);
}

function paintGreetings(name){
  greeting.classList.remove("hidden");
  greeting.innerText = ("Hello "+name+"!");
}

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add("hidden");
  logoutForm.classList.remove("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
}

function onLogoutSubmit(event){
  event.preventDefault();
  logoutForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  greeting.classList.add("hidden");
  localStorage.removeItem("username");
  loginInput.value = "";
}

logoutForm.addEventListener("submit", onLogoutSubmit);
