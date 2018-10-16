# isLeapYear(date): Boolean

Checks if the value is a leap year.

```js
import isLeapYear from 'doremi/date/is-leap-year';

isLeapYear(2016);
// => true

isLeapYear(2017);
// => false

isLeapYear(new Date(2016, 1, 29));
// => true

isLeapYear(new Date(2017, 1, 28));
// => false
```
