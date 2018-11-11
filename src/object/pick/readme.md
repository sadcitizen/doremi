# pick(object, properties): Object

Creates a copy of the given object with only the given properties.

## Usage

```js
import pick from 'doremi/object/pick';

pick({ a: 'a', b: 'b' }, ['a']);
//=> { a: 'a' }

pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'b']);
//=> { a: 'a', b: 'b' }
```
