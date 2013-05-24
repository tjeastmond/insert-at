# InsertAt - A simple mixin

InsertAt is a very simple mixin for Underscore. The idea is to provide you with an easy way to insert items into an array at a specific index. This was something I threw together for some of my work on SPIN and thought I'd share it.

## Using

The function is easy enough to use.

```js
var a = ['figs', 'ash', 'oreo'];
a = _.insertAt(a, 'mooch', 2);
console.log(a); // ['figs', 'ash', 'mooch', 'oreo']
```

If you don't want to use Underscore (weirdo), you can just call the function *insertAt()*.

## A Few Points

- If you try to insert at a position larger than the array, the item will be added to the end of the array
- If the first item you pass in isn't an array, the function will return false

## Testing

To run tests, make sure you run

	npm install

from within the directory to install development dependencies. Then run the following:

	make test

