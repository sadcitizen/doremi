# isBlank(value): Boolean

Checks if the given string is a blank string.

## Usage

```js
import isBlank from 'doremi/string/is-blank';

isBlank('');
// => true

isBlank('            ');
// => true

isBlank('{"a":"b","c":"d"}');
// => false

isBlank('     \t    \n ');
// => true
```
