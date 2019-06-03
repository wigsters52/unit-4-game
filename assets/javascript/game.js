//random numbers that are assigned to each jewel
var jewel1 = Math.floor((Math.random() * 12) + 1);
var jewel2 = Math.floor((Math.random() * 12) + 1);
var jewel3 = Math.floor((Math.random() * 12) + 1);
var jewel4 = Math.floor((Math.random() * 12) + 1);

//global variables
var score = 0;
var win = 0;
var loss = 0;

//random number that the user is trying to guess
var randomNumber = Math.floor((Math.random()*120)+19);
console.log(randomNumber)

updateScore(0);

$('#randomScore').html(randomNumber);