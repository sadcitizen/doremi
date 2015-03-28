import slice from '../internal/slice';

function last(target, count = 1) {
    if (count > 0) {
        return count === 1 ? target[target.length - 1] : slice(target, target.length - count, target.length);
    }
}

export default last;

