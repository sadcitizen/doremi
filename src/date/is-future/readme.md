# isFuture(date): Boolean

Checks if the given date is future.

## Usage

```js
import isFuture from 'doremi/date/is-future';

// Today is 22 Mar 2015

isFuture(new Date(2015, 2, 24));
// => true

isFuture(new Date(2015, 1, 23));
// => false
```
