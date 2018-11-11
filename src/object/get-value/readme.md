# getValue(object, path, [defaultValue]): *

Gets a nested value of an object by property path. Returns a default value if it is specified.

## Usage

```js
import getValue from 'doremi/object/get-value';

const source = {
    a: {
        b: {
            c: 'd'
        },
        d: 'e'
    },
    f: {
        g: 'h'
    },
    i: ['j', 'k', 'l', { m: 'n', o: { p: 'q' } }]
};

getValue(source, ['a', 'b']);
// => { c: 'd' }

getValue(source, ['i', 3, 'o']);
// => { p: 'q' }
```
