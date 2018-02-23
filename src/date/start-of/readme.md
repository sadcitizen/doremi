### startOf

Creates a new date at the start of time period

#### Example

```js
const date = new Date(2015, 2, 23, 23, 20, 11, 491);
startOf(date, 'year'); // => "Thu Jan 01 2015 00:00:00"
startOf(date, 'month'); // => "Sun Mar 01 2015 00:00:00"
startOf(date, 'day'); // => "Mon Mar 23 2015 00:00:00"
``` 