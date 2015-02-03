import reverse from '../internal/reverse';

function flip(target) {
    return function () {
        return target.apply(null, reverse(arguments));
    };
}

export default flip;