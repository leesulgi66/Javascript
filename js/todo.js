const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");  //  ===  const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";  // 실수를 방지해 줄 String 변수값
let toDos = []; // 빈 배열 초기화

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // localStorage는 String만을 저장하기 때문에 JSON.stringify 함수를 이용해 오브젝트나 배열을 String으로 변환 후 저장해야 한다.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // filter는 항상 새로운 array를 반환. id가 같으면 false가 되고 new array에 포함되지 않는다.
    saveToDos();  // 변경된 정보를 저장.
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
    event.preventDefault(); // submit의 기본 실해 정지(새로고침기능 정지);
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

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); // String으로 저장된 배열이나 오브젝트를 JONS.parse()를 이용해 파싱해준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  // forEach 각각의 요소마다 해당 함수를 실행해 준다.
}
