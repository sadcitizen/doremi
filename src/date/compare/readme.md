# compare

Compares two dates, returns -1 if first date is before second date, returns 1 if first date is after second date, 0 otherwise.

## Usage

```js
const dates = [new Date(1989, 0, 26), new Date(2000, 2, 1), new Date(1985, 2, 22)];

dates.sort(compare);
// => ["Fri Mar 22 1985 00:00:00", "Thu Jan 26 1989 00:00:00", "Wed Mar 01 2000 00:00:00"]
```
