# isPast(date): Boolean

Checks if a date is past.

## Usage

```js
import isPast from 'doremi/date/is-past';

// Today is 22 Mar 2015

isPast(new Date(2015, 2, 20));
// => true

isPast(new Date(2015, 2, 24));
// => false
```
