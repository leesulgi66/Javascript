const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked");  // toggle을 이용해 위의 6줄을 대체할 수 있다.  
}


h1.addEventListener("click" , handleTitleClick);