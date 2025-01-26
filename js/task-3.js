`use strict`;
//The checkForSpam(message) function takes a string (message parameter),
//checks it for the prohibited words spam and sale, and returns the result of the check.
//The words in the message parameter string can be in any case, for example SPAM or sAlE.

//Add the function code so that:

//If a prohibited word (spam or sale) is found, the function returns boolean true
//If there are no prohibited words in the string, the function returns boolean false
function checkForSpam(message) {
  return (
    message.toLowerCase().includes(`spam`) ||
    message.toLowerCase().includes(`sale`)
  );
}
//Leave this code for review by a mentor.
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
