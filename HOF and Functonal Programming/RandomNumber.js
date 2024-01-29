// Goal is to genrate a random number after delay of 3 sec with progress indication

let delay = 3000; //time in milsecond
let timeleft = delay / 1000; //time left in second

let timer = setInterval(() => {
  timeleft--;
  console.log(`genrating random number ${timeleft} seconds...`);
  if (timeleft <= 0) {
    clearInterval(timer);
    let RandomNumber = Math.floor(Math.random() * 100000);
    console.log(`Random number generated: ${RandomNumber}`);
  }
  
}, 1000);