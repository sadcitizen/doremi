export default function (target) {
    const result = {};
    Object.keys(target).forEach(item => result[target[item]] = item, this);
    return result;
}
