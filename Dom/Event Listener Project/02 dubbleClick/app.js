const dclr = document.querySelector(".dclr");
const btn = document.querySelector("button");
function changecolor() {
  dclr.style.color = "red";
}

btn.addEventListener("dblclick", changeColor);