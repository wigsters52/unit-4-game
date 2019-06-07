//random numbers that are assigned to each jewel
var jewel1 = Math.floor((Math.random() * 12) + 1);
var jewel2 = Math.floor((Math.random() * 12) + 1);
var jewel3 = Math.floor((Math.random() * 12) + 1);
var jewel4 = Math.floor((Math.random() * 12) + 1);

//declared variables 
var score = 0;
var win = 0;
var loss = 0;

//random number that the user is trying to guess
var randomNumber = Math.floor((Math.random()*120)+19);

//what the game starts at 
updateScore(0);

$('#randomScore ').html(randomNumber);
$('#wins ').html(win);
$('#losses ').html(loss);

//this will add a click event for each jewel

$('#jewel1').click(function(){
    updateScore(jewel1);
});

$('#jewel2').click(function(){
    updateScore(jewel2);
});

$('#jewel3').click(function(){
    updateScore(jewel3);
});

$('#jewel4').click(function(){
    updateScore(jewel4);
});

//function that will update the score

function updateScore(i) {
    score = score + i;
    $('#currentScore').html(score);

    if(randomNumber === score){
        winGame();
    }else if (randomNumber < score){
        loseGame();
    }

}

function winGame() {
    win = win+1;
    alert('You are the champ!');
    reset();

}

function loseGame() {
    loss = loss + 1;
    alert('You have lost!');
    reset();

}

function reset() {
    var jewel1 = Math.floor((Math.random() * 12) + 1);
    var jewel2 = Math.floor((Math.random() * 12) + 1);
    var jewel3 = Math.floor((Math.random() * 12) + 1);
    var jewel4 = Math.floor((Math.random() * 12) + 1);

    score = 0;
    updateScore(0);
    randomNumber = Math.floor((Math.random()*120)+19);
    $('#randomScore').html(randomNumber);
    $('#wins').html(win);
    $('#losses').html(win);
}