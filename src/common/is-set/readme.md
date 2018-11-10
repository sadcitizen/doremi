# isSet(value): Boolean

Checks if the given value is an instance of `Set`.

## Usage

```js
import isSet from 'doremi/common/is-set';

isSet(new Set());
// => true

isSet(new WeakSet());
// => false
```
