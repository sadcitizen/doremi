### equals

Checks if the dates are equal. 

#### Example

```js
const value = new Date(2015, 2, 23);
const other = new Date(2015, 2, 23);
equals(value, other); // => true
```

```js
const value = new Date(2015, 2, 23, 3, 10);
const other = new Date(2015, 2, 23, 3, 13);
equals(value, other, 'minute'); // => false
```

