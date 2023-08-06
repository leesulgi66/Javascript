const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { 
    event.preventDefault(); // submit의 기본 동작인 새로고침을 막아준다.
    loginForm.classList.add(HIDDEN_CLASS); // hidden class다시 추가해 입력창을 없애준다.(보이지 않게 해준다.)
    localStorage.setItem(USERNAME_KEY, loginInput.value); // 입력받은 내용을 key:username, vale:입력값 으로 저장해준다.
    paintGreetings(); // printGreetings() 호출
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY); // localStorage에 있는 username의 값을 가져온다.
    greeting.innerText = `Hello ${username}`    // Hello + username의 메시지를 보여준다.
    greeting.classList.remove(HIDDEN_CLASS);    // hidden calss를 삭제해 메시지를 나타나게 한다.
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {  // 유저네임이 입력된 것이 없다면
    loginForm.classList.remove(HIDDEN_CLASS); // 숨겨져 있던 form의 hidden calss 를 삭제해서 보여주고
    loginForm.addEventListener("submit", onLoginSubmit); // 받은 데이터를 저장 및 표시한다. (onLoginSubmit() 안에 paintGreetings() 호출이 있다.)
}else {
    paintGreetings(); // 이미 localStorage에 username이 있다면 바로 표시해준다.
}