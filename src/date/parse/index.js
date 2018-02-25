import clone from '../clone';
import isDate from '../is-date';

/**
 * [description]
 * @param  {[type]} dirty [description]
 * @return {[type]}       [description]
 */
export default function (dirty) {
    if (isDate(dirty)) {
        return clone(dirty);
    }

    return new Date(dirty);
}
