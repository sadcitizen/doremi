import units from '../../internal/time-units';

export default function (first, second, unit) {
    if (first === undefined || second === undefined)
        throw new Error('diff() expects at least two arguments');

    const diffInMs = second - first;
    const diff = diffInMs / units.get(unit);
    return Math.round(diff);
}
