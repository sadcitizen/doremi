import namespace from '../namespace';
//https://github.com/jonschlinkert/set-value
// TODO: Поддержка работы с массивами
/**
 * @param {Object} target
 * @param {string} path
 * @param {*} value
 * @param {boolean} merge
 */
export default function (target, path, value, merge = false) {
    const steps = path.split('.');
    let key;

    if (steps.length > 1) {
        key = steps.pop();
        namespace(target, steps.join('.'))[key] = value;
    } else {
        target[path] = value;
    }
}
