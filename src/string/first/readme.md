# first(value, length): string

Returns new string with first letter of the given string.
Passing `length` will return the first `length` letters of the given string.

## Usage

```js
import first from 'doremi/string/first';

first('abcdefghijklmnopqrstuvwxyz');
// => 'a'

first('abcdefghijklmnopqrstuvwxyz', 2);
// => 'ab'
```
