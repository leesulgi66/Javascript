// 1. 변수 선언
const 변수 = "값";  // const는 값이 변하지 않는 값을 저장
let 변수2 = 123;    // let은 값이 변동 가능한 값을 저장
var 변수3 = "예전 변수"; // var은 과거 변수값. 특별한 경우를 제외하곤 쓰지않는다.


// 2. 조건문
if(변수 === "값") {
    console.log("같은 이름 입니다.");
}else {
    console.log("다른 이름 입니다.")
}

if(변수2 > 200) {
    console.log("200보다 큽니다.");
}else if(변수2 > 100) {
    console.log("100보다 큽니다.");
}else {
    console.log("그 외의 값");
}


// 3. 반복문 while  -> while(조건) {조건을 만족할 때 실행하는 코드}
let temperature = 20;
while(temperature < 27) {
    console.log(`while - ${temperature}도 정도면 적당한 온도입니다.`);
    temperature++;  // 증감 연산자를 활용해 온도를 변화(+);
}


// 4. 반복문 for -> for(begin, condition, step) {조건을 만족할 때 실행하는 코드}
for(let i = 20; i < 27; i++) {
    console.log(`for - ${i}도 정도면 적당한 온도입니다.`);
}


// 5. 함수
function 함수명(매개변수들) {
    //이 함수에서 실행할 코드들
    return "반환값";
}

    // 함수의 선언 예시(평균)
    function calculateAvg(price1, price2) {
        const sum = price1 + price2 // 매개변수인 price1, price2을 변수처럼 활용
        console.log(`두 수의 합계는 ${sum}입니다.`);
        const avg = sum / 2;
        return avg; // 평균가격을 리턴
    }

    //함수의 호출
    const sum = calculateAvg(10, 20); // 함수의 return 값을 sum 변수에 저장
    console.log(`평균 값은 ${sum}입니다.`); // 출력


// 6. Class
class Notebook { // 클래스 선언
    constructor(name, price, company) {
        this.name = name;
        this.price = price;
        this.company = company;
    }
}

    // 객체 만들기 -> const 변수명 = new Class(매개변수);
    const notebook1 = new Notebook("Galaxy Book", 200, "Samsung")
    console.log(notebook1); // { name: 'Galaxy Book', price: 200, company: 'Samsung' }
    console.log(notebook1.name); // Galaxy Book
    console.log(notebook1.price); // 200
    console.log(notebook1.company); // Samsung


// 7. Object Literal
const 변수명 = {
    속성명: "데이터",
    메소드명: function () { 
        "메소드 호출시 실행할 코드들 "
    }
}

    //ex
    const computer = {
        name: 'Apple Macbook',
        price: 20000,
        printInfo: function () {
            console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
        }
    }
    computer.printInfo() // 상품명: Apple Macbook, 가격: 20000원


// 8. 배열
// 배열 선언 1번째 방법
const arr1 = new Array(1, 2, 3, 4, 5);
// 배열 선언 2번째 방법
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [1, "일", 2, "이", 3];
arr3.push("삼"); // 배열에 추가
console.log(arr3[arr3.length-1]); // "삼"
arr3.pop(); // 배열의 마지막 삭제
console.log(arr3[arr3.length-1]); // 3

for(const arr of arr3) { // arr 변수에 arr3의 요소 하나씩 할당
    console.log(arr);
}