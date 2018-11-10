# isWeakMap(value): Boolean

Checks if the given value is an instance of `WeakMap`.

## Usage

```js
import isWeakMap from 'doremi/common/is-weak-map';

isWeakMap(new WeakMap());
// => true

isWeakMap(new Map());
// => false
```
