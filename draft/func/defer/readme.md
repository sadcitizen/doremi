# defer(fn)

Returns a new function that invoked at the end of the event loop.

## Usage

```js
import defer from 'doremi/func/defer';

const deferredLog = defer(console.log);
deferredLog('Hi!');
// => 'Hi!'
```
