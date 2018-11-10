# lines(value): Array

Creates an array with the lines of the given string.

## Usage

```js
import lines from 'doremi/string/lines';

lines('Lorem ipsum');
// => ['Lorem ipsum']

lines('Lorem \nipsum');
// => ['Lorem ', 'ipsum']
```
