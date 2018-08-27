# bind(object, ...methods)

## Usage

```js
import react from 'react';
import bind from 'doremi/object/bind';

export default class Component extend React.Component {
    constructor(props) {
        super(props);

        bind(this, 'handleClick', 'handleChange');
    }

    handleClick() {
        // ...
    }

    handleChange() {
        // ...
    }
}
```