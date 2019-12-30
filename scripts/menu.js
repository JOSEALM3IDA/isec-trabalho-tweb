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
var x = window.matchMedia("(max-width: 768px)")

var navbar = document.getElementsByClassName("nav-column");

function HiddenInTheBanks() {
  if (x.matches) {
    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.display = "none";
    }
  }
}

function dropMenu() {
  this.style.webkitTransform = 'rotate(0deg)';

  this.style.WebkitTransitionDuration = '1s';
  this.style.webkitTransform = 'rotate(180deg)';

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