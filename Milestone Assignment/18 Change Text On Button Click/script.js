const toggleBtn = document.getElementById("toggleBtn");
const heading = document.getElementById("heading");


toggleBtn.addEventListener("click", () => {
  if (heading.innerHTML === "The most affordable learning platform") {
    heading.innerHTML = "PW Skills";
  } else {
    heading.innerHTML = "The most affordable learning platform";
  }
});