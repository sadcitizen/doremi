# groupBy(value, [iteratee])

Groups the elements of the array by key. The key can be resolved by `iteratee`.

## Usage

```js
import group from 'doremi/array/group';

groupBy([1, 2, 3, 3, 2, 4]);

// => { '1': [1], '2': [2, 2], '3': [3, 3], '4': [4] }

const cities = [{ name: 'Moscow' }, { name: 'London' }, { name: 'Tokyo' }, { name: 'Paris' }, { name: 'Berlin' }];

groupBy(cities, city => city.name.length);
// => {
// =>   5: [{ name: 'Tokyo' }, { name: 'Paris' }],
// =>   6: [{ name: 'Moscow' }, { name: 'London' }, { name: 'Berlin' }]
// => }
```
