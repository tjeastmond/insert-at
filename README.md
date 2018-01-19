# InsertAt - A simple mixin

InsertAt is a very simple functional method for adding items at a specific point in an array. This was something I threw together for some of my work on SPIN.com and thought I'd share it.

## Using

The function is easy enough to use.

```js
let a = ['figs', 'ash', 'oreo'];
let a2 = insertAt(a, 'mooch', 2);
console.log(a2); // ['figs', 'ash', 'mooch', 'oreo']
```

## A Few Points

- If you try to insert at a position larger than the array, the item will be added to the end of the array
- The method will always return an array, even if you pass in an object literal

## Testing

To run tests, make sure you run

```
  npm install
```

from within the directory to install development dependencies. Then run the following:

```
  npm test
```
