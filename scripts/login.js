function defineEvents() {
  let login_btn = document.getElementById("login-btn");
  let form = document.getElementById("formLogin");

  login_btn.addEventListener("click", function() {
    if (form.checkValidity()) {
      login();
    }
  });
}

function login() {
  if (username.value == "admin" && password.value == "admin")
    window.location.href = "1home.html";
  else failed.classList.remove("none");
}

defineEvents(); // Define events
