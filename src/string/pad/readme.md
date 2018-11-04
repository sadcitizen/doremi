# pad(value, length, [char]): string

Pads the given string on the right and left sides if its length is less then the given padding length.

## Usage

```js
import pad from 'doremi/string/pad';

pad('lorem', 9, '-');
// => '--lorem--'

pad('lorem', 9);
// => '  lorem  '

pad('lorem', 5);
// => 'lorem'
```
