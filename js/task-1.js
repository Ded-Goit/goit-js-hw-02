`use strict`;
//Declare a function makeTransaction(quantity, pricePerDroid, customerCredits),

//It declares three parameters, the values ​​of which will be set when it is called:
//quantity — number of droids ordered
//pricePerDroid — price of one droid
//customerCredits — amount of funds in the customer's account

//Complete the function as follows

//Declare a variable to store the total amount of the order
//(the total cost of all droids ordered) and assign it an expression for calculating this amount.
//Add a check to see if the customer will be able to pay for the order:
//if the amount to be paid exceeds the number of credits on the customer's account,
//the function should return the string "Insufficient funds!"
//otherwise, the function should return the string "You ordered <quantity> droids worth <totalPrice> credits!".

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return `Insufficient funds!`;
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//Leave this code for review by a mentor.
