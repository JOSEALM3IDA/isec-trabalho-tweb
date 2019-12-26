var x = window.matchMedia("(max-width: 768px)");

centerContent(x);

function centerContent(x) {
    if (x.matches) { // If media query matches
      document.getElementById("about-info").classList.add("center");
      document.getElementById("principles").classList.add("center");
    } else {
    }
  }