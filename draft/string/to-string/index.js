import isString from '../../../src/common/is-string';

export default function (value) {
    if (isString(value)) {
        return value;
    }

    return String(value);
}
