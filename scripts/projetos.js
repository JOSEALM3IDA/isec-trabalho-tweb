function defineEvents() {
  let info = document.getElementById("mais-projetos");
  let projetos = document.getElementsByClassName("mais-projetos");
  let close = document.getElementsByClassName("close");
  let cerasMap = document.getElementById("maps-ceras");
  let ceras = document.getElementById("ceras");
  var nCells = 14; // Numero de cells no grid

  ceras.addEventListener("click", function() {
    cerasMap.style.display = "block";
  });

  for (i = 0; i < nCells; i++) {
    document.getElementById("item" + i).addEventListener("click", function() {
      info.scrollIntoView();

      cerasMap.style.display = "none"; //temp fix
      global = this.id.slice(4);
      for (j = 0; j < nCells; j++) {
        projetos[j].style.display = "none";
      }
      projetos[global].style.display = "block";
      close[global].addEventListener("click", function() {
        projetos[global].style.display = "none";
        document.getElementById("item" + global).scrollIntoView();
      });
    });
  }
}

var global;

defineEvents();
