import units from '../../internal/time-units';
import { UNDEF } from '../../internal/constants';
// TODO: Refactoring
export default function (first, second, unit) {
    if (first === UNDEF || second === UNDEF) {
        throw new Error('diff() expects at least two arguments');
    }

    const diffInMs = second - first;
    const diff = diffInMs / units.get(unit);

    return Math.round(diff);
}
