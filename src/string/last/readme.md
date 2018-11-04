# last(value, length): string

Returns new string with last letter of the given string.
Passing `length` will return the last `length` letters of the given string.

## Usage

```js
import last from 'doremi/string/last';

last('abcdefghijklmnopqrstuvwxyz');
// => 'z'

last('abcdefghijklmnopqrstuvwxyz', 2);
// => 'yz'
```
