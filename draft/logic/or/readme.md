# or(...conditions)

Returns false if all conditions are false, true otherwise.

## Usage

```js
import or from 'doremi/logic/or';

or(false, false, false);
// => false

or(true, false, true);
// => true
```