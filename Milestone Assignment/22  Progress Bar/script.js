const progressbar = document.querySelector(".progressbar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollX; // calculte scroll top in px

  const docHeight  = document.body.clientHeight - window.innerHeight; // calculate document height
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressbar.style.width = scrollPercent * "%";
})