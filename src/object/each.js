import objectKeys from './keys';

// TODO: add description

function each(target, fn, ctx) {
    var keys = objectKeys(target);

    for (var i = 0, length = keys.length; i < length; i++) {
        if (fn.call(ctx, target[keys[i]], keys[i], target) === false) {
            break;
        }
    }
}

export default each;