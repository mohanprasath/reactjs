// function declaration example
function helloWorld() {
  console.log("Hello World!");
}
helloWorld();

// function expressions
const helloWorldExpression = function () {
  console.log("Hello World!, in a function expression.");
};
helloWorldExpression();
// NOTE: calling a function before it's declared will throw an error.

// passing arguments, function returns, default parameters
const helloWorldUser = function (userName = "javascript") {
  console.log(`Hello World!, Welcome ${userName}`);
  return `${userName}, we have sent a welcome message!.`;
};
console.log(helloWorldUser("React"));

//arrow functions - above function rewritten
let helloWorldArrow = (userName = "javascript") => {
  console.log(`Hello World!, Welcome ${userName}`);
  return `${userName}, we have sent a welcome message in an arrow function!.`;
};
console.log(helloWorldArrow("Arrow"));

// returning objects
const saveName = (firstName, lastName) => {
  return { firstName, lastName };
};
console.log(saveName("Mohan", "Prasath"));

// arrow functions and scope - use arrow functions TO LEARN Why?
const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function(delay = 1000) {
      setTimeout(() => {
        console.log(this.mountains.join(", "));
      }, delay);
    }
};

tahoe.print();
