# delay(fn, ms, context): Function

Creates a new function that will always invoke `fn` after `ms` milliseconds have passed.

## Usage

```js
import delay from 'doremi/func/delay';

const log = delay(console.log, 50);

log('Hi!');
// => 'Hi!'
```
