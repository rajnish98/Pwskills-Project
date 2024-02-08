function counterVowels(){
  let name = document.querySelector("#name").value;
  const vowels = "aeiouAEIOU";
  let count = 0;
  for(let i = 0; i < name.length; i++){
    if(vowels.includes(name[i])){
      count++;
    }
  }
  alert(`the name ${name} includes ${count} vowels`)
  document.querySelector("#result").innerHTML = count;
}