import each from './each';

// TODO: add description

function partition(target, fn, ctx) {
    var pass = [], fail = [];

    each(target, (value, index, target) => (fn.call(ctx, value, index, target) ? pass : fail).push(value));

    return [pass, fail];
}

export default partition;