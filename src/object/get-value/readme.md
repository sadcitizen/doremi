# getValue(object, path, defaultValue)

Gets a nested value of an object by property path. Returns a default value if it is specified.

## Usage

```js
import getValue from 'doremi/object/get-value';

const target = {
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

getValue(target, 'a.b');
// => { c: 'd' }

getValue(target, 'i.3.o');
// => { p: 'q' }
```