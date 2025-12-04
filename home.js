const colors = ["red", "blue", "green", "yellow"];
let colorindex = 0;

function changeColor() {
    $(".bottom-text").css("color", colors[colorindex]);
    colorindex = (colorindex + 1) % colors.length;
}
setInterval(changeColor, 1000);