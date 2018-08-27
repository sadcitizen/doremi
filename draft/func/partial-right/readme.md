# partialRight(fn, ...args)

Returns a new function that invokes `fn` with `args` appended to the arguments it receives.

## Usage

```js
import partialRight from 'doremi/func/partial-right';

function say(word, name) {
    return word + ', ' + name + '!';
}

const sayWorld = partial('World');
sayWorld('Hello');
// => 'Hello, World!'
```
