var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//random color generator
function nextSequence(){
    var randomNumber = Math.random() * 4;
    var randomChosenColour = buttonColours[Math.floor(randomNumber)];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
}



