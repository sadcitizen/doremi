# fixed(num, precision = 2)

Formats a number using fixed-point notation (like Number.toFixed(), but without rounding).

## Usage

```js
import fixed from 'doremi/number/fixed';

fixed(12.345, 2);
// => '12.34'

(12.345).toFixed(2);
// => '12.35'
```