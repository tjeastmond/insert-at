# InsertAt - A Simple Mixin

`InsertAt` is a very simple functional method for adding items at a specific point in a copy of the orignal array.

**I DON'T THINK YOU NEED A LIB JUST FOR THIS. IT WAS SOME OLD CODE I WROTE, AND SOME PEOPLE ARE USING IT STILL.**

## How to Use

To use the `InsertAt` mixin:

1. Import the function into your project.

    ```javascript
    import insertAt from 'insert-at';
    ```

2. Call the `insertAt` function with your array, the index at which to insert, and the item you wish to add. It will return a new array with the item inserted at the specified position.

    ```javascript
    const originalArray = [1, 2, 3, 4];
    const newItem = 'a';
    const indexToInsert = 2;

    const newArray = insertAt(originalArray, indexToInsert, newItem);
    // newArray should be [1, 2, 'a', 3, 4]
    ```

You now have a new array with the item inserted at your specified index.
