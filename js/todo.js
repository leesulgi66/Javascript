const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");  //  ===  const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");  // 리스트를 생성
    li.id = newTodo.id;  // li의 아이디를 newTodoObj의 key값으로 설정
    const span = document.createElement("span");  // span을 생성
    span.innerText = newTodo.text;  // 게시내용을 newTodoObj의 value값으로 설정
    const button = document.createElement("button");  // 버튼을 생성
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);  // 버튼의 클릭 이벤트 설정
    li.appendChild(span); // span을 리스트의 자식으로 만들어줌
    li.appendChild(button); // 버튼을 리스트의 자식으로 만들어줌

    toDoList.appendChild(li); // 생성 완료된 리스트를 최종적으로 ul의 자식으로 만들어줌.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo, // 새로 작성된 toDo를 text로 넣어준 후
        id: Date.now(), // 현재시간ms을 이용해 랜덤성 id를 생성해 지정해 준다.
    }
    toDos.push(newTodoObj); // localStorage에 Object로 저장
    paintToDo(newTodoObj); // paintToDo에도 text로 넘겨 주는 것이 아니라 Objec로 넘겨준다. key,value
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}