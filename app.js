const player = {
    name : "sulgi",
    age : 98,
};

console.log(player);
player.name = "nicolas"
console.log(player);
player.sexy = "soon";
console.log(player);

console.log("-------------------------")

function plus(a, b) {
    console.log(a + b);
}

plus(2, 3);

console.log("test-----------------------")

const calculator = {
    add : function(a, b) {
        console.log(a + b);
    },

    minus : function(a, b) {
        console.log(a - b);
    },

    div : function(a, b) {
        console.log(a/b);
    }, 

    powerof : function(a, b) {
        console.log(a**b);
    }
};

calculator.add(2,1);
calculator.minus(2,1);
calculator.div(10,2);
calculator.powerof(5,2);