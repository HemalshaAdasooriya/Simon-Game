var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//random color generator
function nextSequence(){
    var randomNumber = Math.random() * 4;
    var randomChosenColour = buttonColours[Math.floor(randomNumber)];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
}

var $button = $("#" + randomChosenColour);
function flashButton(){
    $($button).animate({opacity: 0.5},100, 
        function(){
        $(this).animate({opacity: 1},100,flashButton);
    });
}
flashButton();
