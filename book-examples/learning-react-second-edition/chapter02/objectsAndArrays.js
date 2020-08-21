// ES6 has allowed scoping variables within objects and arrays

// Desctructuring Objects
// part 1
const person = {
  firstname: "john",
  lastname: "constantine",
  favorites: { color: "white", fruit: "grapes" },
};

const first = person.firstname;
console.log("this first name is uneditable");
let last = person.lastname;
last = "magician";
console.log(last);
console.log("But the original stuff remains untouched!");
console.log(person.lastname);

// part 2 & 3 - we can get the variables in a nice way inside a function
const printNames = ({ firstname, lastname, favorites: { color, fruit } }) => {
  console.log({ firstname }, { lastname }); // always use the {} TODO But Why?
  console.log(`Likes ${fruit}`);
};

printNames(person);

// Destructuring Arrays - simple stuff
const [firstAnimal] = ["Horse", "Mouse", "Cat"];
console.log(firstAnimal); // Horse
const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal); // Cat

// Object Literal Enhancement
// part 1
const name = "Tallac";
console.log(name);
const allDetails = { name };
console.log(allDetails);

const print = function () {
  // sometimes this works without the function keyword in object methods
  console.log(` within function call ${this.name}`);
};
const allDetailsWithFunction = { name, print };
allDetailsWithFunction.print();

const allDetailsFinal = {
  name,
  print() {
    console.log(` within final function call ${this.name}`);
  },
};
allDetailsFinal.print();

// The Spread Operator - allows us to make a copy and not change the original array
const green = ["Leaf", "Rain", "Forest"];
const blue = ["Waves", "sky", "whale"];
console.log([...green, ...blue]);
const [lastItem] = [...green].reverse();
console.log(lastItem); // Tricky one - Forest
const [firstItem, ...other] = blue;
console.log(other.join(", "));
function testingDots(...args) {
  console.log(green.length, [...args].length);
}
testingDots(...green); // while sending to ...args, we need to send multiple items
// spread can be used in objects as well
