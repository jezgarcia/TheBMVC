
/*
  Simple slider for frontpage banner.
  THINGS TO DO!!
  1. Fade in pictures
  2. Fade out pictures
  3. remove unneded code (option for next and previous buttons)
  4. If number 3 is ignored, implement the next and previous buttons and improve timeout
*/
var slideIndex = 1;
showDivs(slideIndex);
var loopSlider;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > 3) {slideIndex = 1}
  if (n < 1) {slideIndex = 3}

  x[0].src = "pics/banner" + slideIndex + ".png";
}

function mySliderLoop(leave) {
  if(leave){
      window.clearInterval(loopSlider);
      setTimeout(mySliderLoop(false),8000);
    }
    loopSlider = setInterval(function(){ plusDivs(1)}, 8000);
}