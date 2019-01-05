# debounce(fn, [ms = 100], [isLeading = false]): Function

Creates a debounced function that delays the execution of `fn` until after `ms` milliseconds have passed.
The debounced function comes with a `cancel` method to cancel delayed invocation.

Subsequent calls to the debounced function return the result of the last `fn` invocation.

If `isLeading` is true `fn` is invoked on the leading edge of `ms` timeout. 

## Usage

```js
import debounce from 'doremi/func/debounce';

window.onresize = debounce(resize, 200);

function resize() {
    // doing something useful  
}
```
