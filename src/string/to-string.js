const values = [
    true,
    false,
    -0,
    0,
    +0,
    42,
    Infinity,
    -Infinity,
    NaN,
    null,
    undefined,
    new Date(),
    [],
    [1, 2, 3],
    {},
    { a: 'b', c: 'd' },
    /^\d+$/ig,
    new Map(),
    new WeakMap(),
    new Set(),
    new WeakSet()
];

const strings = values.map(value => ({
    'value': value,
    'Object.toString()': Object.prototype.toString.call(value),
    'String()': String(value),
    'JSON.stringify()': JSON.stringify(value),
    'Template literal': `${value}`,
    'Concatenation': '' + value
}));

console.table(strings);
