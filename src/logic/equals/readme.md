# equals(value, other): Boolean

Checks if the value is equal to the other value.
Uses [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) comparison.

## Usage

```js
import equals from 'doremi/logic/equals';

equals(42, 42);
// => true

equals(NaN, NaN);
// => true

equals(42, 1);
// => false

equals({}, {});
// => false
```
