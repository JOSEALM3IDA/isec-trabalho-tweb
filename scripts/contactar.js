function defineEvents() {
    let submit = document.getElementById("contacto-btn");
    let form = document.getElementById("formContacto");
  
    submit.addEventListener("click", function() {
      if (form.checkValidity()) {
        contactar();
      }
    });
}

function contactar() {
    let data = 
    "<h2>Nome: " +
    nome.value +
    "<br>" +
    "Idade: " +
    age.value +
    "<br>" +
    "Género: " +
    gender.value +
    "<br>" +
    "Local de Residência: " +
    address.value + 
    "<br>" + 
    "Número do Documento de Identificação: " +
    idCard.value +
    "<br><br>" +
    "Mensagem: " +
    message.value +
    "</h2>"

    let newLink = document.createElement("a");

    newLink.style.display = "none";

    var newWin = window.open("7.1.1signedup.html");

    newWin.document.write(data);
}

defineEvents(); //define events