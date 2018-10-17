# delay(fn, ms, context): Function

Returns a new function that will always invoke `fn` after `ms` milliseconds.

## Usage

```js
import delay from 'doremi/func/delay';

const delayedLog = delay(console.log, 50);

delayedLog('Hi!');
// => 'Hi!'
```
