# after(fn, times): Function

Creates a new function that invokes `fn` once it's called `times` or more times.

## Usage

```js
import after from 'doremi/func/after';

const log = after(console.log, 2);

log();
// => not called

log('hi!');
// => 'hi!'
```
