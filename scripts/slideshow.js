var index_slide_img = -1;
var slide_imgs = 3; // Numero de fotos a apresentar no slideshow

function slideshow() {
  index_slide_img++;
  if (index_slide_img == 3) {
    index_slide_img = 0;
    showcase.style.background =
      "url('../img/slide-" +
      index_slide_img +
      ".jpg') no-repeat center center/cover";
  } else {
    showcase.style.background =
      "url('../img/slide-" +
      index_slide_img +
      ".jpg') no-repeat center center/cover";
  }

  setTimeout(slideshow, 5000);
}

slideshow();
