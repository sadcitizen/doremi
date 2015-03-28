import slice from '../internal/slice';

function first(target, count = 1) {
    if (count > 0) {
        return count === 1 ? target[0] : slice(target, 0, count);
    }
}

export default first;