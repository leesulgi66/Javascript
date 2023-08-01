const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) { // JS의 event 함수는 첫번째 전달인자에 해당 event의 정보를 담아준다.
    event.preventDefault(); // form은 누군가가 submit 하면 기본적으로 페이지를 새로고침 하도록 되어있음. 그 기능을 끄는 함수.
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);