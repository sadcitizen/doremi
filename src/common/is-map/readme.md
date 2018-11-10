# isMap(value): Boolean

Checks if the given value is an instance of `Map`.

## Usage

```js
import isMap from 'doremi/common/is-map';

isMap(new Map());
// => true

isMap(new WeakMap());
// => false
```
