const clrchange = document.querySelector(".clr");
const btn = document.querySelector("button");

function changeColor() {
  clrchange.style.color = "blue";  
  
}
btn.addEventListener("click", changeColor);