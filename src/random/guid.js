import hex from './hex';
import choice from './choice';

// TODO: add description

function guid() {
    return hex(8) + '-' + hex(4) + '-4' + hex(3) + '-' +
        choice(8, 9, 'a', 'b') + hex(3) + '-' + hex(12);
}

export default guid;
