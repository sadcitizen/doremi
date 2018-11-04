# escape(value): string

Escapes regular expression tokens in the given string.

## Usage

```js
import escape from 'doremi/reg-exp/escape';

escape('2+2=4');
// => '2\\+2\\=4'

escape('100$');
// => '100\\$'
```
