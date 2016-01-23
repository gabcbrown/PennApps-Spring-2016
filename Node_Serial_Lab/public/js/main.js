// this function switches the visibility from the start page to the slideshow
function to_slideshow() {
  var a = document.getElementById("intro");
  var b = document.getElementById("slideshow");
  var c = document.getElementById("title")

  a.style.display = "none"
  b.style.display = "block"
  c.style.display = "block"
}

// this function switches the visibility from the slideshow to the start page
function to_start() {
  var a = document.getElementById("intro");
  var b = document.getElementById("slideshow");
  var c = document.getElementById("title")

  a.style.display = "block"
  b.style.display = "none"
  c.style.display = "none"
}
