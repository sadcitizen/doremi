import reverse from '../internal/reverse';

// TODO: add description

function flip(target) {
    return () => target.apply(null, reverse(arguments));
}

export default flip;