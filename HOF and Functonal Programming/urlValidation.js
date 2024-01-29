const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

function checkUrl(url) {
  if (urlRegex.test(url)) {
    console.log(`${url} is a vaild URL.`);
  }else{
    console.log(`${url} is not a vaild URL.`);
  }
  
}

checkUrl("https://www.youtube.com/");
checkUrl("https://namastedev.com/");
checkUrl("https://www.google.com/");
checkUrl("https://www.google.com/intl/en_in/gmail/about/");
checkUrl("https://www.netflix.com/in/title/70205012");