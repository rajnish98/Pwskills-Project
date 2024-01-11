function checkPassword(){
  let password = document.getElementById("password").value;
  let cnfrmPassword = document.getElementById("cnfrm-password").value;
  console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
  let message = document.getElementById("message");

  if(password.length != 0){
      if(password == cnfrmPassword){
          message.textContent = "Password Matched.Password validation Successful.";
          message.style.backgroundColor = "#1dcd59";
      }
      else{
          message.textContent ="Password didn't match.Password validation unsuccessful";
          message.style.backgroundColor = "#ff4d4d";
      }
  }
  else{
      alert("Password can't be empty!");
      message.textContent = "";
  }
}


