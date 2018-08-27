# after(fn, times)

Returns a new function that invokes `fn` once it's called `times` or more times.

## Usage

```js
import after from 'doremi/func/after';

const log = after(console.log, 2);
log();
log('hi!');
// => 'hi!'
```
