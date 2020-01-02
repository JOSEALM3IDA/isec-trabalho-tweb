function defineEvents() {
  let info = document.getElementById("mais-projetos");
  let projetos = document.getElementsByClassName("mais-projetos");
  let close = document.getElementsByClassName("close");
  var nCells = 14; // Numero de cells no grid

  item0.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[0].style.display = "block";
    close[0].addEventListener("click", function() {
      projetos[0].style.display = "none";
      item0.scrollIntoView();
    });
  });
  item1.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[1].style.display = "block";
    close[1].addEventListener("click", function() {
      projetos[1].style.display = "none";
      item1.scrollIntoView();
    });
  });
  item2.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[2].style.display = "block";
    close[2].addEventListener("click", function() {
      projetos[2].style.display = "none";
      item2.scrollIntoView();
    });
  });
  item3.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[3].style.display = "block";
    close[3].addEventListener("click", function() {
      projetos[3].style.display = "none";
      item3.scrollIntoView();
    });
  });
  item4.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[4].style.display = "block";
    close[4].addEventListener("click", function() {
      projetos[4].style.display = "none";
      item4.scrollIntoView();
    });
  });
  item5.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[5].style.display = "block";
    close[5].addEventListener("click", function() {
      projetos[5].style.display = "none";
      item5.scrollIntoView();
    });
  });
  item6.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[6].style.display = "block";
    close[6].addEventListener("click", function() {
      projetos[6].style.display = "none";
      item6.scrollIntoView();
    });
  });
  item7.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[7].style.display = "block";
    close[7].addEventListener("click", function() {
      projetos[7].style.display = "none";
      item7.scrollIntoView();
    });
  });
  item8.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[8].style.display = "block";
    close[8].addEventListener("click", function() {
      projetos[8].style.display = "none";
      item8.scrollIntoView();
    });
  });
  item9.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[9].style.display = "block";
    close[9].addEventListener("click", function() {
      projetos[9].style.display = "none";
      item9.scrollIntoView();
    });
  });
  item10.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[10].style.display = "block";
    close[10].addEventListener("click", function() {
      projetos[10].style.display = "none";
      item10.scrollIntoView();
    });
  });
  item11.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[11].style.display = "block";
    close[11].addEventListener("click", function() {
      projetos[11].style.display = "none";
      item11.scrollIntoView();
    });
  });
  item12.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[12].style.display = "block";
    close[12].addEventListener("click", function() {
      projetos[12].style.display = "none";
      item12.scrollIntoView();
    });
  });
  item13.addEventListener("click", function() {
    info.scrollIntoView();
    for (i = 0; i < nCells; i++) {
      projetos[i].style.display = "none";
    }
    projetos[13].style.display = "block";
    close[13].addEventListener("click", function() {
      projetos[13].style.display = "none";
      item13.scrollIntoView();
    });
  });

  console.log(projetos);
}

defineEvents();
