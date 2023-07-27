const player = {
    name:"sulgi", 
    points: 10,
    fat: true,

};
console.log(player);
console.log(player.name);

player.name = "nico";

console.log(player["name"]);

player.lastName = "potato";
player.points = player.points + 15;
console.log(player);