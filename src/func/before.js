import isFunction from '../is/is-function';

// TODO: add description

function before(target, times) {
    var result;

    times |= 0;

    if (!isFunction(target)) {
        throw new TypeError('Target must be a function.');
    }

    return function () {
        if (--times > 0) {
            result = target.apply(this, arguments);
        } else {
            target = null;
        }
        return result;
    };
}

export default before;