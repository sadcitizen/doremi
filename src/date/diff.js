'use strict';

import units from '../internal/time-units';

function diff(first, second, unit) {
    const diffInMs = second - first;
    return diffInMs / units.get(unit);
}

export default diff;