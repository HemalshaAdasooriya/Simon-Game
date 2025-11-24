var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


//start game on keypress
$(document).keypress(function(){
    if (!started){
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
}});

//clicked button identifier
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length - 1);
});

//check answer
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
            if(userClickedPattern.length === gamePattern.length){
                setTimeout(function(){
                    nextSequence();
                }, 1000);
            } 
    }  else {
        console.log("wrong");
        playSound("wrong");
        //game over
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        startOver();
    }      
}

//random color generator
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("level " + level);
    
    var randomNumber = Math.random() * 4;
    var randomChosenColour = buttonColours[Math.floor(randomNumber)];
    gamePattern.push(randomChosenColour);

    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

//sound effect
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//btn animation effect
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
}, 100);

}

//game restart
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}



