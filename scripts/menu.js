function defineEvents() {
  let arrow = document.getElementById("mobile_arrow");

  arrow.addEventListener("click", dropMenu);
}

/* function dropMenu() {
  let navbar = document.getElementsByClassName("nav-column");

  if (this.style.transform == "scaleY(-1)") {
    this.style.transform = "scaleY(1)";
    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.display = "none";
    }
  } else {
    this.style.transform = "scaleY(-1)";

    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.display = "inline";
    }
  }
} */

/*
var x = window.matchMedia("(max-width: 768px)");


function HiddenInTheBanks() {
  if (x.matches) {
    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.opacity = "0";
    }
  }
}
*/
var active = 0;
function dropMenu() {
  var elements;
  elements = document.querySelectorAll(".nav-column");

  this.style.webkitTransitionDuration = "1s";

  if (active == 0) {
    for (i = 0; i < elements.length; i++) {
      let element = elements[i];
      this.style.webkitTransform = "rotate(180deg)";
      element.classList.add("fade-in-element");
      element.classList.remove("nav-column");
    }
    active = 1;
  } else {
    for (i = 0; i < elements.length; i++) {
      let element = elements[i];
      this.style.webkitTransform = "rotate(0deg)";
      element.classList.remove("fade-in-element");
      element.classList.add("nav-column");
      console.log("ESTE FOR LOOP NAO ESTÁ A DAR"); //AAAAAAAAAAAAAAAAAAAAA
    }
    active = 0;
    console.log("MAS ESTÁ A IMPRIMIR ISTO LMAO"); //AAAAAAAAAAAAAAAAAAAAA
  }
}

defineEvents();

//HiddenInTheBanks();

/* setTimeout(function {
  navbar[i].style.display = "inline";
}, 100); */
