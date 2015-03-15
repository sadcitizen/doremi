import rest from '../array/rest';
import splice from '../internal/splice';

function splice(target) {
    var parts = target.split('');
    splice.apply(parts, rest(arguments));
    return parts.join('');
}

export default splice;