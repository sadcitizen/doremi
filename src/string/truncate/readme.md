# truncate(value, [limit], [sfx], [safe]): string

Truncates the given string if it is longer than the given maximum string length.

## Usage

```js
import truncate from 'doremi/string/truncate';

truncate('lorem ipsum dolor sit amet', 10);
// => 'lorem i...'

truncate('lorem ipsum dolor sit amet', 14, '?', true)
// => 'lorem ipsum?'
```
