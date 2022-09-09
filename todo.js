const todoForm = document.querySelector("#todo-form"); // form은 submit 이벤트를 가진다!!중요!!
const todoInput = document.querySelector("#todo-form input");
const ul = document.querySelector("#todo-list");

let toDos = [];


if (localStorage.getItem("todos") !== null) {
  const parsedTodos = JSON.parse(localStorage.getItem("todos"));
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

function setTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // localstorage는 문자열밖에 저장을 못한다 a, b, c 이런식으로
  // 그러니 stringify로 배열 자체를 문자열로 변환 시켜버린다. "a", "b", "c" => "["a","b","c"]"
}

function paintTodo(todo){
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  ul.appendChild(li);
  li.appendChild(span);
  span.innerText = todo.text;
  const button = document.createElement("button");
  li.appendChild(button);
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
}

function deleteTodo(event){
  const li = event.target.parentElement;
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id)); //a,b,c있을때 a를 누르면 a와 다른 b,c를 남긴다(a를 필터링하고 b,c가 남는다)
  console.log(toDos);
  li.remove();
  setTodos(); //필터링 하고 한번더 저장
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj); // 배열에 저장했으나 localstorage는 텍스트만 저장 가능하다
  paintTodo(newTodoObj);
  setTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
