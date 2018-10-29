# trim(value, [characters]): string

Removes leading and trailing whitespaces or given characters from given string.

## Usage

```js
import trim from 'doremi/string/trim';

trim('   lorem   ');
// => 'lorem'

trim('*+/lorem/+*', '*');
// => '+/lorem/+'

trim('*+/lorem/+*', '/+*');
// => 'lorem'
```
