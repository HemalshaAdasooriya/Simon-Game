const colors = ["#19183B", "#708993", "#A1C2BD", "#0D1164"];
let colorindex = 0;

function changeColor() {
    $(".bottom-text").css("color", colors[colorindex]);
    colorindex = (colorindex + 1) % colors.length;
}

setInterval(changeColor, 1000);

// Source - https://stackoverflow.com/a
// Posted by Scaramouche, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-04, License - CC BY-SA 3.0

// var times = 10;
// var duration = 50;
// for (var i = 0; i < times; i++)
//     $(".icon").animate({
//         left: (i % 2 === 0 ? "-" : "+") + "=50"
//     }, duration);

