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
var x = window.matchMedia("(max-width: 768px)");
var active = true;
var navbar = document.getElementsByClassName("nav-column");
var containernav = document.getElementById("nav");

function HiddenInTheBanks() {
  if (x.matches) {
    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.display = "none";
    }
  }
}

function dropMenu() {
  this.style.webkitTransitionDuration = "1s";
  if (active == true) {
    this.style.webkitTransform = "rotate(180deg)";
    active = false;
  } else {
    this.style.webkitTransform = "rotate(0deg)";
    active = true;
  }

  for (i = 0; i < navbar.length; i++) {
    if (navbar[i].style.display == "none") {
      navbar[i].style.display = "inline";
    } else {
      navbar[i].style.display = "none";
    }
  }
}

defineEvents();
HiddenInTheBanks();
