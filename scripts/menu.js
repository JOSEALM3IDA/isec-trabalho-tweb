function defineEvents() {
  let arrow = document.getElementById("mobile-arrow");

  arrow.addEventListener("click", dropMenu);
}

function dropMenu() {
  let navbar = document.getElementsByClassName("nav-column");
  let logo = document.getElementById("logo");

  if (this.style.transform == "scaleY(-1)") {
    this.style.transform = "scaleY(1)";
    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.display = "none";
    }
    logo.style.display = "block";
  } else {
    this.style.transform = "scaleY(-1)";

    for (i = 0; i < navbar.length; i++) {
      navbar[i].style.display = "inline";
    }
    logo.style.display = "block";
  }
}

defineEvents();
