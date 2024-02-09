function calculate() {

  const cartype = document.querySelector('input[name="cartype"]:checked').value;

  const days = document.querySelector("#days").value;
  
  let rent = 0;
  switch(cartype){
    case "economy":
      rent = 4000 * days;

      break;
    case "midsize":
      rent = 10000 *days;
      break;

    case "luxury":
      rent = 20000 * days;
      break;
    default:
      alert("please select a car type!");
      break;
  }
  document.querySelector("span").innerText = rent;
}