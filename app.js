const title = document.querySelector("div.hello:first-child h1")

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
    console.log("title was clicked");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}


title.addEventListener("click", handleTitleClick);  // 함수의 괄호()를 넣지 않아야 한다. 
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);