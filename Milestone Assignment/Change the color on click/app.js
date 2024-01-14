const btn = document.getElementById("btn");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};
let Changecolor = () => {
  let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`
  document.body.style.backgroundColor = randomColor;
};

btn.addEventListener("click", Changecolor);
window.addEventListener("load", Changecolor);