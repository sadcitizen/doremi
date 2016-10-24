export default function (target, times) {
    times |= 0;

    return function () {
        if (--times < 1) {
            return target.apply(this, arguments);
        }
    };
}
