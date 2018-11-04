# padRight(value, length, [char]): string

Pads the given string on the right side if its length is less then the given padding length.

## Usage

```js
import padRight from 'doremi/string/pad-right';

padRight('lorem', 9, '-');
// => 'lorem----'

padRight('lorem', 9);
// => 'lorem    '

padRight('lorem', 5);
// => 'lorem'
```
