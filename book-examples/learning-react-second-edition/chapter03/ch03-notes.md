# Learning React

## Chapter 03 Functional Programming with JavaScript

1. In JavaScript, functions are variables. We can add them to objects too.
2. Functions can also be added to arrays in JavaScript.
3. We can pass functions to and return them from other functions as arguments as well.
4. Functions are data. They can be saved, retrieved, or flow through your applications just like variables.
5. Declarative programming declares what things should happen rather than how it should happen.
6. Functional programming is a subset of Declarative programming.
7. Declarative is more readable, and easy to reason with, with a bit of abstraction.
8. Example, declaring JSX in react component is an example of Decl. Prg.
9. Simple React is declarative.

### Functional Concepts

#### Immutability

1. In Functional programming, data never changes, it's always immutable.
2. So to keep the principle, dont change the original object if possible.
3. Object.assign() or spread operator can help here. Check whether copy or a change to the orginal object is happenning.

#### Pure Functions

1. Always takes atleast one argument, returns a value or an object.
2. Does not change anything globally, or the state of the application.
3. Pure functions are testable.
4. So use the spread operator to copy the object and operate on it in the func.
5. Pure functions are a core concept of functional programming.
6. It's actually a good thing since we know it does not change anything outside the function.

#### Data Transformations

1. All Methods:
   a. Array.map
   b. Array.reduce
   c. Array.join
   d. Array.filter
   e. Array.reduceRight
2. Use Array.flter over Array.pop and Array.splice, becuase the filter is immutable

#### Higher Order Functions

1. HOF are functions that operate on other functions.
2. Currying? a functional technique TODO Learn MORE

#### Recursion

1. Not much new stuff on this topic

#### Composition

1. Pure functions combined together as in series or in parallel makes a composition.
2. A well known composition method is chaining.

#### Putting it all together

1. Ticking clock was the goal. Done part of the seconds counter in recursion js file.
