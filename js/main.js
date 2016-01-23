// this function switches the visibility from initial page to the quiz slideshow
document.getElementById("slideshow").style.display = 'none'

function to_quiz() {
  var s = document.getElementById("slideshow");
  var i = document.getElementById("intro");
  i.style.display = 'none';
  s.style.display = 'block';
}
