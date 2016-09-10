import isFunction from '../is/is-function';

// TODO: add description

function after(target, times) {
    times |= 0;

    if (!isFunction(target)) {
        throw new TypeError('Target must be a function.');
    }

    return function () {
        if (--times < 1) {
            return target.apply(this, arguments);
        }
    };
}

export default after;