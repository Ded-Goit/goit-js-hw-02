`use strict`;
//Declare a function formatMessage(message, maxLength), which takes a string (message parameter)
//and checks its length against the specified maximum length (maxLength parameter).

//Add the function code so that:

//If the length of the string is equal to or less than maxLength, the function returns the original string unchanged.
//If the length exceeds maxLength, the function truncates the string to maxLength characters,
//adds an ellipsis "..." at the end, and returns the truncated version.
function formatMessage(message, maxLength) {
  // if (message.length <= maxLength) {
  //  return message;
  // } else {
  //  return message.slice(0, maxLength) + `...`; }
  return message.length <= maxLength
    ? message
    : message.slice(0, maxLength) + `...`;
}
//Leave this code for review by a mentor.
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
