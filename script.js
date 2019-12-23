function defineEvents() {
  let arrow = document.getElementById("mobile-arrow");

  arrow.addEventListener("click", dropMenu);
}

function dropMenu() {
  let navbar = document.getElementById("navbar-inside");

  if (this.style.transform == "scaleY(-1)") {
    this.style.transform = "scaleY(1)";

    navbar.style.display = "none";
  } else {
    this.style.transform = "scaleY(-1)";

    navbar.style.display = "inline";
  }
}

// Declaração de variaveis para o slideshow
var index_slide_img = 0;
var slide_imgs = 3; // Numero de fotos a apresentar no slideshow

function slideshow(){
  index_slide_img++;
  if(index_slide_img == 3){
    index_slide_img = 0;
    showcase.style.background =  "url('../img/slide-"+index_slide_img+".jpg') no-repeat center center/cover";
  } 
  else{
    showcase.style.background =  "url('../img/slide-"+index_slide_img+".jpg') no-repeat center center/cover";
  }

  setTimeout(slideshow,5000);
}

function init(){
  showcase.style.background =  "url('../img/slide-"+index_slide_img+".jpg') no-repeat center center/cover";

  setTimeout(slideshow,5000);
}

defineEvents(); //define events
init(); //inicializaçao de certos aspetos da pagina