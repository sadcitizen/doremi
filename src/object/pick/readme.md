# pick(object, properties)

## Usage

```js
import pick from 'doremi/object/pick';

pick({ a: 'a', b: 'b' }, 'a');
//=> { a: 'a' }

pick({ a: 'a', b: 'b', c: 'c' }, ['a', 'b']);
//=> { a: 'a', b: 'b' }
```
