/* eslint-disable no-plusplus */
export default function (array, predicate, context) {
    for (let i = array.length; i >= 0; i--) {
        if (predicate.call(context, array[i], i, array)) {
            return i;
        }
    }

    return -1;
}
/* eslint-enable no-plusplus */
