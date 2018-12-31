# format(date, pattern, locale): String

Formats the given date to a string according to `pattern`.

## Replaced tokens

- *YYYY* - Year with century as a zero-padded decimal number (e.g. 0900 or 2014)
- *YYY* - Year with century as a decimal number (e.g. 900 or 2014)
- *YY* - Year without century as a zero-padded decimal number (e.g. 00 or 14)
- *Y* - Year without century as a decimal number (e.g. 0 or 14)
- *MMMM* - Full month name (e.g. January or December)
- *MMM* - Abbreviated month name (e.g. Jan. or Dec.)
- *MM* - Month as a zero-padded decimal number (from 01 to 12)
- *M* - Month as a decimal number (from 1 to 12)
- *DDDD* - Full weekday name (e.g. Monday or Sunday)
- *DDD* - Abbreviated weekday name (e.g. Mon. or Sun.)
- *DD* - Day of month as a zero-padded decimal number (from 01 to 31)
- *D* - Day of month as a decimal number (from 1 to 31)
- *HH* - Hours (24-hour clock) as a zero-padded decimal number (from 00 to 23)
- *H* - Hours (24-hour clock) as a decimal number (от 0 до 23)
- *hh* - Hours (12-hour clock) as a zero-padded decimal number (from 00 to 12)
- *h* - Hours (12-hour clock) as a decimal number (from 0 to 12)
- *mm* - Minutes as a zero-padded decimal number (from 00 to 59)
- *m* - Minutes as a decimal number (from 0 to 59)
- *ss* - Seconds as a zero-padded decimal number (from 00 to 59)
- *s* - Seconds as a decimal number (from 0 to 59)
- *fff* - Fraction of second as zero-padded 3-digit decimal number, milliseconds (from 000 to 999)
- *ff* - Fraction of second as zero-padded 2-digit decimal number (from 00 to 99)
- *f* - Fraction of second as zero-padded 1-digit decimal number (from 0 to 9)
- *TT* - AM/PM
- *tt* - am/pm
- *Z* - UTC time offset (e.g. +0600)
- *Q* - Quarter of year (1, 2, 3 or 4)

## Usage

```js
import format from 'doremi/date/format';

var date = new Date(2015, 1, 1, 13, 29, 6);

format(date, 'DD-MM-YYYY HH:mm:ss');
// => '01-01-2015 13:29:06'

format(date, 'DD.MM.YYYY hh:mm:ss TT');
// => '01.01.2015 01:29:06 PM'
```
