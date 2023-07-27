function plus(a, b) {
    console.log(a + b);
}

function divide(a, b) {
    console.log(a / b);
}

plus(8, 60);
divide(40, 8);

console.log("--------------------------------");

// --------------------------------------------------

const player = {
    name : "sulgi", 
    sayHello : function(otherPersonsName) {
        console.log("hello! "+otherPersonsName + " nice to meet you");
    }
}

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");