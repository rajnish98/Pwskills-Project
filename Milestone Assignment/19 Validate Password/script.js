// Getting the form and input elements
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#pass");

// Adding event listener to form submission
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Getting the values of the email and password inputs
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validation of  the email and password inputs
  if (!email.includes("@") || password.length < 8) {
    // when inputs are invalid
    const errorParagraph = document.createElement("p");
    errorParagraph.textContent = "Invalid email or password!";
    errorParagraph.style.color = "red";
    errorParagraph.style.backgroundColor = "white";
    errorParagraph.style.textAlign = "center";
    form.appendChild(errorParagraph);
  } else {
    // whne inputs are valid
    const successParagraph = document.createElement("p");
    successParagraph.textContent = "Valid email and password!";
    successParagraph.style.color = "green";
    successParagraph.style.backgroundColor = "white";
    successParagraph.style.textAlign = "center";
    form.appendChild(successParagraph);
  }
});