import objectKeys from './keys';

function each(target, iteratee, ctx) {
    var keys = objectKeys(target);

    for (var i = 0, length = keys.length; i < length; i++) {
        if (iteratee.call(ctx, target[keys[i]], keys[i], target)) {
            break;
        }
    }
}

export default each;