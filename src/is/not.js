module.exports = function not() {
    var args = Array.prototype.slice.call(arguments);

    return !Boolean(args.length === 1 ? args[0] : args[0].apply(null, args.slice(1, args.length)));
};