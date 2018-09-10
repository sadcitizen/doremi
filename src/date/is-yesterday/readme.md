# isYesterday(date): Boolean

Checks if the given date is yesterday.

## Usage

```js
import isYesterday from 'doremi/date/is-yesterday';

// Today is 22 Mar 2015

isYesterday(new Date(2015, 2, 21));
// => true

isYesterday(new Date(2015, 2, 20));
// => false

isYesterday(new Date(2015, 2, 22));
// => false
```
