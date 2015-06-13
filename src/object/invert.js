import keys from './keys';
// TODO: add description
function invert(target) {
    var result = {};

    keys(target).forEach(function (item) {
        result[target[item]] = item;
    }, this);

    return result;
}

export default invert;