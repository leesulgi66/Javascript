const a = 5;
let isNicoFat = true;

console.log(a);
console.log(isNicoFat);
isNicoFat = false;
console.log(isNicoFat);

let b;          // undefined
const c = null; // null

console.log(b);
console.log(c);

const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text", me]; 

console.log(days);
console.log(days[2], days[2] = true);
console.log(days);
days.push("you");
console.log(days);