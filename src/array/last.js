import slice from '../internal/slice';

// TODO: add description

function last(target, count = 1) {
    let length = target.length;

    if (count >= length) {
        return target;
    }

    if (count === 1) {
        return target[target.length - 1];
    }

    if (count > 0) {
        return slice(target, target.length - count, target.length);
    }
}

export default last;

