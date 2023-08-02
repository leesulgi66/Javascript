const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { // JS의 event 함수는 첫번째 전달인자에 해당 event의 정보를 담아준다.
    event.preventDefault(); // form은 누군가가 submit 하면 기본적으로 페이지를 새로고침 하도록 되어있음. 그 기능을 끄는 함수.
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; // 12번 코드와 값다. ``백틱 안에 ${변수명} 으로 변수값(String)을 넣을 수 있다.
    greeting.classList.remove(HIDDEN_CLASS);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    // show the greetings
    // greeting.innerText = `Hello ${savedUsername}`
    // greeting.classList.remove(HIDDEN_CLASS);
    paintGreetings(savedUsername);
}