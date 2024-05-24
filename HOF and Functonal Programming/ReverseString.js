// Reversing of string after timeout of 2sec.

let input = "pw is a good platfrom to learn and Devlope to tech based skills"

// using for loop to reverse string

let ReversedString = "";
for (let i = input.length - 1; i >= 0; i--) {
  ReversedString += input[i];
}
setTimeout(() =>{ 
  console.log(ReversedString);
},200);

// using reduce method

let reversed = input.split("").reduce((prev, curr)=> curr + prev, "");

setTimeout(() =>{
  console.log(reversed);
},2000);

// using reversing split, reverse and join method 

setTimeout(() => {
  let output = input.split("").reverse().join("");
  console.log(output); 
}, 2000);