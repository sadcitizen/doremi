# padLeft(value, length, [char]): string

Pads the given string on the left side if its length is less then the given padding length.

## Usage

```js
import padLeft from 'doremi/string/pad-left';

padLeft('lorem', 9, '-');
// => '----lorem'

padLeft('lorem', 9);
// => '    lorem'

padLeft('lorem', 5);
// => 'lorem'
```
