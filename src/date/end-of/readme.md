### startOf

Creates a new date at the end of time period

#### Example

```js
const date = new Date(2015, 2, 23, 23, 20, 11, 491);
endOf(date, 'year'); // => "Dec 31 2015 23:59:59.999"
endOf(date, 'month'); // => "Mar 31 2015 23:59:59.999"
endOf(date, 'day'); // => "Mar 23 2015 23:59:59.999"
``` 