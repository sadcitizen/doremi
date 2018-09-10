# sign(value)

Returns an number (-1, 0 or 1) that indicates the sign of the given number.
Positive and negative zeros treats as unsigned zero.

## Usage

```js
import sign from 'doremi/number/sign';

sign(42);
// => 1

sign(-42);
// => -1

sign(0);
// => 0
```
