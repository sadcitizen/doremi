'use strict';

import units from '../internal/time-units';

function diff(first, second, unit) {
    if (first === undefined || second === undefined)
        throw new Error('diff() expects at least two arguments');

    const diffInMs = second - first;
    const diff = diffInMs / units.get(unit);
    return Math.round(diff);
}

export default diff;