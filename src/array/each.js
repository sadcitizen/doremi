function each(target, iteratee, ctx) {
    for (var i = 0, length = target.length; i < length; i++) {
        if (iteratee.call(ctx, target[i], i, target) === false) {
            break;
        }
    }
}

export default each;