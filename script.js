function defineEvents() {
  let arrow = document.getElementById("mobile-arrow");
  let registar_btn = document.getElementById("registar-btn");

  arrow.addEventListener("click", dropMenu);
  registar_btn.addEventListener("click", registar);
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
  // Get the data from each element on the form.
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const email = document.getElementById("useremail");

  // This variable stores all the data.
  let data =
    "\r" + username.value + "\r\n" + password.value + "\r\n" + email.value;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "formData.txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
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
