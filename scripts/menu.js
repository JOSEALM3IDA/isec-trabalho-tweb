function defineEvents() {
  let arrow = document.getElementById("mobile_arrow");
  let arrowSub = document.getElementById("sub_arrow");
  let cliente = document.getElementById("area-cliente");
  let navSub = document.getElementById("nav-sub");

  arrow.addEventListener("click", dropMenu);
  arrowSub.addEventListener("click", dropSub);

  cliente.addEventListener("mouseover", function() {
    navSub.style.display = "block";
  });
  cliente.addEventListener("mouseout", function() {
    navSub.style.display = "none";
  });
}

var active = 0;
var activeSub = 0;
var elements = document.querySelectorAll(".nav-column");
let submenu = document.getElementById("nav-sub");

function dropMenu() {
  this.style.webkitTransitionDuration = "0.5s";

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
    }
    active = 0;
  }
}

function dropSub() {
  this.style.webkitTransitionDuration = "0.5s";

  if (activeSub == 0) {
    this.style.webkitTransform = "rotate(180deg)";
    submenu.style.display = "block";
    submenu.classList.add("fade-in-element");
    submenu.classList.remove("nav-column");

    activeSub = 1;
  } else {
    this.style.webkitTransform = "rotate(0deg)";
    submenu.classList.remove("fade-in-element");
    submenu.classList.add("nav-column");
    submenu.style.display = "none";

    activeSub = 0;
  }
}

defineEvents();
