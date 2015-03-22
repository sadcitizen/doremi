function each(target, fn, ctx) {
    for (var i = 0, length = target.length; i < length; i++) {
        if (fn.call(ctx, target[i], i, target) === false) {
            break;
        }
    }

    return target;
}

export default each;