/*
var index_slide_img = -1;
var slide_imgs = 4; // Numero de fotos a apresentar no slideshow

function slideshow() {
  index_slide_img++;

  if (index_slide_img == slide_imgs) index_slide_img = 0;
  slide1.classList.add("fade-out-slide");
  slide1.style.background =
    "url('img/slide-" +
    index_slide_img +
    ".jpg') no-repeat center center/cover";
  slide1.classList.add("fade-in-slide");

  setTimeout(slideshow, 5000);
}

slideshow();
*/

var slides = document.querySelectorAll(".invisible");
var i = 0;
var slide_imgs = 4; // Numero de fotos a apresentar no slideshow

function slideshow() {
  slides[i].classList.add("fade-out-slide");
}

function init() {
  slides[0].classList.remove("invisible");

  for (j = 0; j < 4; j++) {
    slides[j].addEventListener("animationend", function() {
      if (slides[i].classList.contains("fade-out-slide")) {
        slides[i].classList.add("invisible");

        if (++i == slide_imgs) i = 0;

        if (i == 0) {
          slides[3].classList.remove("fade-out-slide");
        } else {
          slides[i - 1].classList.remove("fade-out-slide");
        }

        slides[i].classList.add("fade-in-slide");
        slides[i].classList.remove("invisible");
      }
    });
  }
}

init();
setInterval(slideshow, 6000);
