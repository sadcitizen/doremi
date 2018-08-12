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

    let [decimal, fractional] = fixed(value, options.precision).split('.');

    if (options.groupSeparator.length > 0) {
        decimal = chopRight(decimal, 3).join(options.groupSeparator);
    }

    if (options.skipTrailingZeros) {
        fractional = fractional.replace(/0+$/, '');
    }

    if (fractional.length > 0) {
        return `${decimal}${options.decimalSeparator}${fractional}`;
    }

    return decimal;
}
