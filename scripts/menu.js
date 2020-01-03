function defineEvents() {
  let arrow = document.getElementById("mobile_arrow");
  let cliente = document.getElementById("area-cliente");
  let submenu = document.getElementById("nav-sub");

  arrow.addEventListener("click", dropMenu);
  cliente.addEventListener("mouseover", function() {
    submenu.style.display = "block";
  });
  cliente.addEventListener("mouseout", function() {
    submenu.style.display = "none";
  });
}

var active = 0;
var elements = document.querySelectorAll(".nav-column");
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

defineEvents();
