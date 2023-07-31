const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title was clicked");
}


title.addEventListener("click", handleTitleClick);  // 함수의 괄호()를 넣지 않아야 한다. 