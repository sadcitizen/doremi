import reverse from '../internal/reverse';

function flip(target) {
    return () => target.apply(null, reverse(arguments));
}

export default flip;