import fn from '../is/fn';

// TODO: add description

function after(target, times) {
    times |= 0;

    if (!fn(target)) {
        throw new TypeError('Target must be a function.');
    }

    return function () {
        if (--times < 1) {
            return target.apply(this, arguments);
        }
    };
}

export default after;