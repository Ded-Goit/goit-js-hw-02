`use strict`;
//Declare the function getShippingCost(country), which should check the possibility of delivering
//  the goods to the user's country (parameter country)
// and return a message about the result. Be sure to use the switch statement.

//The format of the returned string is "Shipping to <country> will cost <price> credits",
// where instead of <country> and <price> you need to substitute the appropriate values.

//List of countries and shipping costs:
// China — 100 credits,Chile — 250 credits,Australia — 170 credits,Jamaica — 120 credits

//The list shows that delivery is not possible everywhere. If the specified country is not in the list,
// then the function should return the string "Sorry, there is no delivery to your country".
function getShippingCost(country) {
  let price;
  switch (country) {
    case `China`:
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case `Chile`:
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case `Australia`:
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case `Jamaica`:
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
      break;
  }
}
//Leave this code for review by a mentor.
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
