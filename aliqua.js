var element = document.getElementById("myElement");
var opacity = 1;
var interval = setInterval(function() {
  if (opacity <= 0) {
    clearInterval(interval);
  } else {
    opacity -= 0.1;
    element.style.opacity = opacity;
  }
}, 100);
