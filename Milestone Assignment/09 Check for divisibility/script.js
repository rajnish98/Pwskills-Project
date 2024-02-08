let number = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 88, 99];

for(let i = 0; i < number.length; i++){
  const num = number[i];
  if (num % 2 === 0) {
    continue;
  }if (num % 3 === 0) {
    console.log(num);
  }
}