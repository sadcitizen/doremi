# countBy(array, [iteratee])

Counts the elements of the array by key.

## Usage

```js
import countBy from 'doremi/array/count-by';

count([1, 2, 3, 3, 2, 4]);
// => { 1: 1, 2: 2, 3: 2, 4: 1 }

const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];
countBy(cities, city => city.name.length);
// => { 5: 2, 6: 3 }
```
