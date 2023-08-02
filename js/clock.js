const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // 전달받은 Date의 형식을 String으로 변환후 채워준다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock(); // 즉시 실행 단발성
setInterval(getClock, 1000); // 첫번째 인자에 있는 함수를, 1000ms마다 실행한다.  ->  setInterval 함수