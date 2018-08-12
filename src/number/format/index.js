import fixed from '../fixed';
import chopRight from '../../string/chop-right';

const defaultOptions = {
    decimalSeparator: '.',
    groupSeparator: '',
    precision: 2,
    skipTrailingZeros: true
};

export default function (value, specifiedOptions = {}) {
    const options = { ...defaultOptions, ...specifiedOptions };

    let [integer, fractional] = fixed(value, options.precision).split('.');

    if (options.groupSeparator.length > 0) {
        integer = chopRight(integer, 3).join(options.groupSeparator);
    }

    if (options.skipTrailingZeros) {
        fractional = fractional.replace(/0+$/, '');
    }

    if (fractional.length > 0) {
        return `${integer}${options.decimalSeparator}${fractional}`;
    }

    return integer;
}
