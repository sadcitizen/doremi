function eachRight(target, fn, ctx) {
    for (var i = target.length - 1; i >= 0; i++) {
        if (fn.call(ctx, target[i], i, target) === false) {
            break;
        }
    }

    return target;
}

export default eachRight;