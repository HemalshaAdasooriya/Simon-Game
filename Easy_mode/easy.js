var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0; 


//start game on keypress
$(document).keypress(function(event){
    if (!started && (event.key ==="a" || event.key === "A")){
        $("#level-title").text("level " + level);
        nextSequence();
        updateScore(score);
        started = true;
        
}});

//clicked button identifier
$(".glass-btn").click(function(){
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
                updateScore(level);
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
    gamePattern = [];
    level++;
    $("#level-title").text("level " + level);

    for(n=0; n<level; n++){
        var randomNumber = Math.random() * 4;
        var randomChosenColour = buttonColours[Math.floor(randomNumber)];
        gamePattern.push(randomChosenColour);
    }

    for(i=0; i<gamePattern.length; i++){
        setTimeout(function(colour){
            $("#"+ colour).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(colour);
        }, 600 * (i+1), gamePattern[i]);
    }

}

//sound effect
function playSound(name){
    var audio = new Audio("../sounds/" + name + ".mp3");
    audio.play();
}

//btn animation effect
function animatePress(currentColour){
    $("#" + currentColour).addClass("flash");
    
    setTimeout(function() {
        $("#" + currentColour).removeClass("flash");
    }, 100);

}

//game restart
function startOver(){
    $(document).keypress(function(event){
    if (!started){
        $("#level-title").text("level " + level);
        nextSequence();
        updateScore(score);
        started = true;
}});
    level = 0;
    score = 0;
    gamePattern = [];
    started = false;
}


// Add flash effect on click
        document.querySelectorAll('.glass-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.classList.add('flash');
                setTimeout(() => {
                    this.classList.remove('flash');
                }, 400);
            });
        });


//score board
function updateScore(level) {
    score = level;
    document.getElementById("score").innerHTML = "Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + score;
    if(score > highScore){
        highScore = score;
        localStorage.setItem("highScore", highScore); // Store in localStorage
        document.getElementById("high_score").innerHTML = "High Score : " + highScore;
        colorchange();
    }
    else{
        document.getElementById("high_score").innerHTML = "High Score : " + highScore;
    }
}

function colorchange(){
    $("#high_score").css("color", "red");
    
    setTimeout(function() {
        $("#high_score").css("color", "white");
    }, 100);

}   
