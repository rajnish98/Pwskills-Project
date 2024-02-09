function convert(){
  const tempinc = document.querySelector("#tempinc").value;
  const tempinf = tempinc * (9 / 5) + 32;

  document.querySelector("span").innerText = tempinf;
}