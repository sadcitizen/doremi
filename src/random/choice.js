import int from './int';
import array from '../is/array';
import slice from '../internal/slice';

// TODO: add description

function choice(list) {
    let args = (arguments.length === 1 && array(list)) ? list : slice(arguments);

    return args[int(0, args.length - 1)];
}

export default choice;
