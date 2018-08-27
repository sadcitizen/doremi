# isValid(date): Boolean

Checks if the value is a valid date.

## Usage

```js
import isValid from 'doremi/date/is-valid';

isValid('');
// => false

isValid(new Date());
// => true

isValid(new Date('date'));
// => false
```
