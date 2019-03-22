export type Unit =
    | 'year'
    | 'Y'
    | 'month'
    | 'M'
    | 'day'
    | 'D'
    | 'hour'
    | 'h'
    | 'minute'
    | 'm'
    | 'second'
    | 's'
    | 'millisecond'
    | 'ms';

declare const units: { [paramName in Unit]: Unit };

export default units;