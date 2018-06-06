export default function (array, other) {
    return [].concat(array, other).filter(x => array.includes(x) && other.includes(x));
}
