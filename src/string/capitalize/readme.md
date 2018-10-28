# capitalize(value, [restToLowerCase]): string

Converts first letter of the given string to uppercase
If `restToLowerCase` is `true` the rest of the given string will be converted to lower case.

## Usage

```js
import capitalize from 'doremi/string/capitalize';

capitalize('lorem ipsum');
// => 'Lorem ipsum'

capitalize('lower IPSUM', true);
// => 'Lorem ipsum'

capitalize();
// => ''
```
