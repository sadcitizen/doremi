# isWeakSet(value): Boolean

Checks if the given value is an instance of `WeakSet`.

## Usage

```js
import isWeakSet from 'doremi/common/is-weak-set';

isWeakSet(new WeakSet());
// => true

isWeakSet(new Set());
// => false
```
