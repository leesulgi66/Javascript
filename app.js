const hellos = document.getElementsByClassName("hello");
let title = document.getElementsByTagName("h1");

title = document.getElementById("hello");
title = document.querySelector("#hello"); // 위의 코드와 작동이 완전히 같다.

title = document.querySelector(".hello h1");
title = document.querySelector("div h2"); // null
title = document.querySelector("div h1");
title = document.querySelectorAll("div h1");
console.log(title);