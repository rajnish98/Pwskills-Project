const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const displayValue = document.getElementById("displayValue");
const resetBtn = document.getElementById("resetBtn");

// for decrement button

decrementBtn.addEventListener("click", () =>{
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  }
  else{
    alert("Negative value not allowed");
  }
});

// for increment button

incrementBtn.addEventListener("click", () =>{
  const value  = Number(displayValue.innerText);
  if(value >= 10){
    alert("10+ value are not allowed");
  }
  else{
    displayValue.innerText = value + 1;
  }
});

// reset button

resetBtn.addEventListener("click", () =>{
  displayValue.innerText = 0;
});
