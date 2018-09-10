# equals(value, other, unit): Boolean

Checks if the dates are equal with time unit.

## Usage

```js
import equals from 'doremi/date/equals';

equals(new Date(2015, 2, 23), new Date(2015, 2, 23));
// => true

const value = new Date(2015, 2, 23, 3, 10);
const other = new Date(2015, 2, 23, 3, 13);

equals(value, other, 'minute'); // => false
```

