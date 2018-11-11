# omit(source, properties): Object

Creates a copy of the given object without the given properties.

## Usage

```js
import omit from 'doremi/object/omit';

const source = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };

omit(source, ['a', 'c', 'f']);
// => { b: 1, d: 3, e: 4 }
```
