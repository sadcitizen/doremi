# isRegExp(value): Boolean

Checks if the given value is a regular expression.

## Usage

```js
import isRegExp from 'doremi/common/is-reg-exp';

isRegExp('[a-zA-Z0-9]/ig');
// => false

isRegExp(/[a-zA-Z0-9]/ig);
// => true
```
