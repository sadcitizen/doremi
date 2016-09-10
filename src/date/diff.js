'use strict';

import units from '../internal/time.units';

export default (first, second, unit) => {
	const diffInMs = second - first;
    return diffInMs / units.get(unit);
}