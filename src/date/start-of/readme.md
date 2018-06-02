# startOf

Creates a new date at the start of time period

## Usage

```js
const date = new Date(2015, 2, 23, 23, 20, 11, 491);
startOf(date, 'year'); // => "Jan 01 2015 00:00:00.000"
startOf(date, 'month'); // => "Mar 01 2015 00:00:00.000"
startOf(date, 'day'); // => "Mar 23 2015 00:00:00.000"
```