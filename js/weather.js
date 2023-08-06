function onGeoOk(position) { // 성공시
    const lat = position.coords.latitude; // 위도
    const lng = position.coords.longitude; // 경도
    console.log("You live in", lat, lng);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  // 현재 위치를 알려주는 함수. (성공함수, 실패함수) 두개의 인자를 받는다.