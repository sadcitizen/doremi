### add

Adds time units to a date.

#### Example

```js
const date = new Date(2015, 0, 1);
const nextDate = add(date, 1, 'year');

console.log(nextDate.toUTCString());
// => "Thu, 31 Dec 2015 19:00:00 GMT"
```