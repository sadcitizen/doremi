# sortBy(array, [iteratee=identity])

Sorts the elements of the given array.

## Usage

```js
import sortBy from 'doremi/array/sort-by';

sortBy(['Moscow', 'Tokyo', 'New York', 'Amsterdam']);
// => ['Amsterdam', 'Moscow', 'New York', 'Tokyo']

sortBy(['Moscow', 'Tokyo', 'New York', 'Amsterdam'], x => x.length);
// => ['Tokyo', 'Moscow', 'New York', 'Amsterdam']
```
