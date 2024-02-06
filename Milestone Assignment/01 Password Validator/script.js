const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const pass = document.getElementById("password").value;
  const confir = document.getElementById("confirmPassword").value;
  let message = document.getElementById("message");
  if (confir == pass) {
    message.textContent = "Password Matched.Password validation Successful.";
    message.style.backgroundColor = "#1dcd59";
    
  }else
  {
    message.textContent ="Password didn't match.Password validation unsuccessful";
    message.style.backgroundColor = "#ff4d4d";
  }
});