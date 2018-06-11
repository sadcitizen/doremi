# uniqueWith(array, [comparator])

Removes duplicates and returns unique elements from an array.

# Usage

```js
import uniqueWith from 'doremi/array/unique-with';

uniqueWith([1, 2, 1, 3, 1, 4]);
// => [1, 2, 3, 4]

const persons = [{ name: 'Casper' }, { name: 'Richard' }, { name: 'Casper' }];
const comparator = (value, other) => value.name === other.name;

uniqueWith(persons, comparator);
// => [{ name: 'Casper' }, { name: 'Richard' }]
```

