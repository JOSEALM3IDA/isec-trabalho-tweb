function defineEvents() {
  let info = document.getElementById("mais-projetos");
  let projetos = document.getElementsByClassName("mais-projetos");
  let close = document.getElementsByClassName("close");
  let maps = document.getElementsByClassName("map");
  let cerasMap = document.getElementById("maps-ceras");
  let crasmMap = document.getElementById("maps-crasm");
  let crassaMap = document.getElementById("maps-crassa");
  let ceras = document.getElementById("ceras");
  let crasm = document.getElementById("crasm");
  let crassa = document.getElementById("crassa");
  var nCells = 14; // Numero de cells no grid

  let GMaps = [
    document.getElementById("maps-ceras"),
    document.getElementById("maps-crasm"),
    document.getElementById("maps-crassa")
  ];

  for (i = 0; i < GMaps.length; i++) {
    GMaps[i].addEventListener("click", function() {
      for (j = 0; j < GMaps.length; j++) {
        GMaps[j].style.display = "none";
      }

      GMaps[i].style.display = "block";
    });
  }

  ceras.addEventListener("click", function() {
    cerasMap.style.display = "block";
    crasmMap.style.display = "none";
    crassaMap.style.display = "none";
  });

  crasm.addEventListener("click", function() {
    cerasMap.style.display = "none";
    crasmMap.style.display = "block";
    crassaMap.style.display = "none";
  });

  crassa.addEventListener("click", function() {
    cerasMap.style.display = "none";
    crasmMap.style.display = "none";
    crassaMap.style.display = "block";
  });

  for (i = 0; i < nCells; i++) {
    document.getElementById("item" + i).addEventListener("click", function() {
      info.scrollIntoView();

      global = this.id.slice(4);
      for (j = 0; j < nCells; j++) {
        projetos[j].style.display = "none";
        if (j < maps.length) {
          maps[j].style.display = "none"; // Fechar todos os mapas
        }
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
