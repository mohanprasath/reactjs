// understand the difference between const, let, and var
const PIZZA = true; // this declaration cannot be changed in the scope
var pizza = "mozzerella"; // this declaration is of global scope
if (PIZZA) {
  let pizza = "vegani";
  console.log(pizza); // will be vegan Yay! :P
}
// Also understand the use of template strings
console.log(`Hello lets see what kind of pizza you like: ${pizza}`);
