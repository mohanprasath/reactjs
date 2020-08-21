# Learning React

## Chapter 02

1. JavaScript is everywhere now, and so to Node.js
2. JS standards are done by European Computer Manufacturers
   Association (ECMA)
3. ES versions started from 1997, 98, 99,-, 2009, 2015.
4. ESNext contains proposals for next JS releases.
5. Find info about compotibility in this Kangax Compatibility Table <http://kangax.github.io/compat-table/esnext/>

### Asynchronous JavaScript

1. JS can work on other things while an API fetch is handled
2. fetch, async/await, promises
3. fetch an URL and let the status of the promise known to the user
4. chain fetch to then function, also we can add a catch on the chain
5. Does fetch require an explicit import? it's not in node right not. It needs an external import while running in node JS
6. async/await is very similar to the fetch, also include a try/catch to handle the errors

### Es6 Modules

1. one file per module, this allows reusability
2. use module.exports = {} and store the functions inside a {}
3. import the modules using require("")
