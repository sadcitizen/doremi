# ternary(condition, truthy, falsy)

Returns falsy value if all conditions are false, truthy otherwise.

## Usage

```js
import ternary from 'doremi/logic/ternary';

const a = 42;

ternary(a > 0, 1, -1);
// => 1

ternary(a !== 42, 'ok', 'not ok');
// => 'not ok'
```
