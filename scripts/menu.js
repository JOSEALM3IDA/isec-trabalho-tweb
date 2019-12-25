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

defineEvents();
