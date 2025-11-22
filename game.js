var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//random color generator
function nextSequence(){
    var randomNumber = Math.random() * 4;
    var randomChosenColour = buttonColours[Math.floor(randomNumber)];
    gamePattern.push(randomChosenColour);

    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

nextSequence();