# equals(array, other, [comparer])

Checks if the arrays contain the same elements.

## Usage

```js
import equals from 'doremi/array/equals';

const oneToFour = [1, 2, 3, 4];
const fiveToEight = [5, 6, 7, 8];

equals(oneToFour, oneToFour);
// => true

equals(oneToFour, fiveToEight);
// => false

const a = [{ name: 'Donald' }, { name: 'Hillary' }, { name: 'Vladimir' }];
const b = [{ name: 'Donald' }, { name: 'Hillary' }, { name: 'Vladimir' }];
const c = [{ name: 'Donald' }, { name: 'Bill' }, { name: 'Vladimir' }];
const comparer = (left, right) => left.name === right.name;

equals(a, b, comparer);
// => true

equals(a, c, comparer);
// => false
```
