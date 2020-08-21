# Learning React

## Chapter 04 How React Works

1. JSX + tag+based JavaScript Syntax
2. Atomic units of React: Elements

### Page Setup

1. React requires React(for creating Views) and React DOM(rendering it to the browser) libraries.
2. Creating react app without packages requires using the minimum js versions of React and ReactDOM. Also a html file with a div root element.

### React Elements

1. DOM uses HTML in its construction, the html code usually resembles a tree.
2. AJAX + HTML enabled the creation of Single Page Application (SPA).
3. Using DOM API we can change the DOM and the display on the browser.
4. React does this job and updates the DOM for us and we dont need to interact with the DOM anymore.
5. React DOM consists of several React Elements.
6. React.creatElement helps us in this process.

### React DOM

1. After a React Element is created React DOM renders it for us.
2. ReactDOM.render(element_we_want_to_render, under which existing element we are rendering the React Element, usually its the root element).
3. We can render an array as react elements as well.

#### Children

```javascript
React.createElement(
  "ul",
  null,
  React.createElement("li", null, "2 lb salmon"),
  React.createElement("li", null, "5 sprigs fresh rosemary")
);
```

```javascript
const items = ["2 lb salmon", "5 sprigs fresh rosemary"];
React.createElement(
  "ul",
  { className: "ingredients" },
  items.map((ingredient) => React.createElement("li", null, ingredient))
);
```

1. Above code shows that we can have multiple childrens in a react element.
2. while printing the above react element, we can see that they are inside a property called `props.children`
3. Note: In JS, we have an attribute called class while in React we are using className to denote the same while creating React Elements.
4. Using JS we can improve the syntax of the above code.
5. Remember to add an unique key to each child element.

```javascript
React.createElement(
  "ul",
  { className: "ingredients" },
  items.map((ingredient, i) =>
    React.createElement("li", { key: i }, ingredient)
  )
);
```

### React Components

1. components enables reusability of code, and structure.
2. React.createClass is one of the old ways of creating Components.
3. React.Component is the new way of declaring components.

```javascript
class IngredientsList extends React.Component {
  render() {
    <div>
      <h1>Component</h1>
    </div>;
  }
}
```
