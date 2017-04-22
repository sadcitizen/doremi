export default function (target) {
    var result = {};
    Object.keys(target).forEach(item => result[target[item]] = item, this);
    return result;
}
