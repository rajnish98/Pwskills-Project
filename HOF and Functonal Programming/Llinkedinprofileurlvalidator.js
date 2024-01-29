const linkedinRegex = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g;

function checkUrl(url) {
  if (linkedinRegex.test(url)) {
    console.log(`${url} is a vaild LinkedIn Pofile URL.`);
  }else{
    console.log(`${url} is not a vaild LinkedIn Profile URL.`);
  }
  
}

checkUrl("https://www.linkedin.com/in/rajnish-pandey-93675b170/");
checkUrl("https://www.linkedin.com/Raj@nish Pandey/");
checkUrl("https://www.linkedin.com/Raj$#nish Pandey/");
checkUrl("https://www.linkedin.com/Rajn&ish Pandey/");
checkUrl("https://www.linkedin.com/Raj*&nish Pandey/");