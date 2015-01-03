module.exports = function delay(target, ms) {
    return function () {
        var args = arguments;
        setTimeout(function () {
            return target.apply(null, args);
        }, ms);
    };
};