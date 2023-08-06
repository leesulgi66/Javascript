const images = [  // 배열에 이미지 저장.
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)]; // Math함수를 이용해 배열 내의 랜덤 숫자 생성

const bgImage = document.createElement("img");  // document에 img를 추가

bgImage.src = `img/${chosenImage}`; // img의 주소를 랜덤으로 설정된 값으로 설정

document.body.appendChild(bgImage) // 9번,11번,13번 세줄의 역할은 html에 <img src=""/> 를 해주는 것과 동일하다. 