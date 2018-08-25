# isTomorrow(date): Boolean

Checks if a date is tomorrow.

## Usage

```js
import isTomorrow from 'doremi/date/is-tomorrow';

// Today is 22 Mar 2015

isTomorrow(new Date(2015, 2, 23));
// => true

isTomorrow(new Date(2015, 2, 21));
// => false

isTomorrow(new Date(2015, 2, 24));
// => false
```
