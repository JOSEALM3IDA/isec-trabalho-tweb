var slides = document.querySelectorAll(".invisible");
var i = 0;
var slide_imgs = 4; // Numero de fotos a apresentar no slideshow editar comentário

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
