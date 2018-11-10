# isWeakSet(value): Boolean

Checks if the given value is an instance of `WeakSet`.

## Usage

```js
import isSymbol from 'doremi/common/is-symbol';

isSymbol(Symbol());
// => true

isSymbol(Symbol('lorem'));
// => true

isSymbol(Symbol.for('lorem'));
// => true

isSymbol(Symbol.iterator);
// => true

isSymbol('lorem');
// => false
```
