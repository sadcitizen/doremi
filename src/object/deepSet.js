import ns from './ns';

/**
 * Sets nested property value.
 *
 * @param target The object to inspect.
 * @param prop The property name.
 * @param value The value to set.
 *
 * @example
 *
 * var lorem = {};
 *
 * set(lorem, 'ipsum.dolor', 'sit');
 * // => lorem: { ipsum: { dolor: 'sit' } }
 * console.log(lorem.ipsum.dolor);
 * // => 'sit'
 */
export default function (target, prop, value) {
    const parts = prop.split('.');
    let key;

    if (parts.length > 1) {
        key = parts.pop();
        ns(target, parts.join('.'))[key] = value;
    } else {
        target[prop] = value;
    }
}