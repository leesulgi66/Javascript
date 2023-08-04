const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");  //  ===  const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);