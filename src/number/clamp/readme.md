# clamp(value, min, max): Number

Clamps the given number within bounds.

## Usage

```js
import clamp from 'doremi/number/clamp';

clamp(2, 12, 15);
// => 12

clamp(2, 12, 10);
// => 10

clamp(2, 12, 1);
// => 2
```
