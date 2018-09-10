# add(value, num, unit): Date

Adds time units to the given date.

## Usage

```js
import add from 'doremi/date/add';

const date = new Date(2015, 0, 1);
const nextDate = add(date, 1, 'year');

nextDate.toUTCString();
// => "Thu, 31 Dec 2015 19:00:00 GMT"
```
