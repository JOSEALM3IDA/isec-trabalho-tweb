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
    window.location.href = "7.1.2welcome_user.html";
  else {
    failed.classList.remove("invisible");
  }
}

defineEvents(); // Define events
