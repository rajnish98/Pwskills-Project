const btn = document.getElementById("btn");
btn.addEventListener("click",find);
function find(){
  const paragraph = document.querySelector("#para");
  const word = paragraph.textContent.split(" ");// split the rext content of paragraph in array of words

  for (let i = 0; i < word.length; i++) {
    if(word[i].length > 8){
      word[i] = '<span class = "highlight">' + word[i] + "</span>"; // wrapping the word in span with class highlight
    }
    
  }
  paragraph.innerHTML = word.join(" "); // joining the array of words into string and putting it back into inner html of paragraph
}

