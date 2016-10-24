function before(target, times) {
    var result;

    times |= 0;

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
