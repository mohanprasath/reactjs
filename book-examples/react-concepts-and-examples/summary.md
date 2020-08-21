# React Concept with Examples and their Summary

## frequently used npm commands after creating a react app

## Linting

1. eslint is favored.
2. npm install -g eslint
3. eslint --init
4. above code creates a .eslintrc.json file in the current directory.
5. npm install -g eslint-plugin-react
6. All eslint rules are here <https://eslint.org/docs/rules/>
7. a famous config is here <https://github.com/dustinspecker/awesome-eslint>

## propTypes and defaultProps

```javascript
static propTypes = {
    isLoggedIn: PropTypes.bool,
    user: PropTypes.shape({
        _id: ProptTypes.string,
    }).isRequired;
}
static defaultProps = {
    isLoggedIn: false,
}
```

1. add code like above examples for code and texts. TO EXPLAIN

## Best Practices

1. When we can use a DRY principle in a component, make a new one.
2. Keep the lines in a component as small as possible.
3. NOT SURE, inline components looks smaller than JS code.

## DevTools & Snippets

1. chrome and Firefox extensions are available
2. Check snippets in extension of IDE

## Comparisons

### Components vs pure Components vs Functional Stateless Components

1. Stateless is a self explanatory, no props, no state, no life cycle methods.
2. Pure Component - re rendering is the different. TO LEARN
    1. npm install --save-dev why-did-you-update
3. Component props changes triggers a re render automatically.
