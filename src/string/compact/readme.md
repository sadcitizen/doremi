# compact(value): string

Replaces whitespaces in the given string to a single space and trims the ends.

## Usage

```js
import compact from 'doremi/string/compact';

compact('\0 \b \t \n \v \f \r');
// => ''

compact('           Hello,      World!             ');
// => 'Hello, World!'
```
