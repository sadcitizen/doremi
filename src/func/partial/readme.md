# partial(fn, ...args): Function

Return a new function that invokes `fn` with `args` prepended to the arguments it receives.

## Usage

```js
import partial from 'doremi/func/partial';

function say(word, name) {
    return word + ', ' + name + '!';
}

const sayHello = partial('Hello');

sayHello('World');
// => 'Hello, World!'
```
