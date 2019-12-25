function defineEvents() {
  let arrow = document.getElementById("mobile-arrow");
  let registar_btn = document.getElementById("registar-btn");
  let form = document.getElementById("formRegistar");

  arrow.addEventListener("click", dropMenu);
  registar_btn.addEventListener("click", function() {
    if (form.checkValidity()) {
      registar();
    }
  });
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
function registar() {
  let data =
    "<h2>" +
    "Username: " +
    username.value +
    "<br>" +
    "Password: " +
    password.value +
    "<br>" +
    "Email: " +
    useremail.value +
    "</h2>";

  let dataArray = [];
  dataArray.push(username.value, password.value, useremail.value);

  let newLink = document.createElement("a");

  newLink.style.display = "none";

  var newWin = window.open("7.1.1signedup.html");

  newWin.document.write(data + "<br><br><br>" + dataArray);
}

// Declaração de variaveis para o slideshow
var index_slide_img = 0;
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

function init() {
  showcase.style.background =
    "url('../img/slide-" +
    index_slide_img +
    ".jpg') no-repeat center center/cover";

  setTimeout(slideshow, 5000);
}

defineEvents(); //define events
init(); //inicializaçao de certos aspetos da pagina
