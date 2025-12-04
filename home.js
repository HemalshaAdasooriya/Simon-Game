const colors = ["#19183B", "#708993", "#A1C2BD", "#0D1164"];
let colorindex = 0;

function changeColor() {
    $(".bottom-text").css("color", colors[colorindex]);
    colorindex = (colorindex + 1) % colors.length;
}

setInterval(changeColor, 1000);
