/**
 * https://github.com/jest-community/eslint-plugin-jest
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        es6: true,
        jest: true,
        node: true
    },
    plugins: [
        'jest'
    ],
    extends: [
        './import.js'
    ],
    rules: {
        'jest/consistent-test-it': [ // enforce consistent `test` or `it` keyword
            'error',
            {
                fn: 'test',
                withinDescribe: 'test'
            }
        ],
        'jest/lowercase-name': 'warn', // enforce lowercase test names
        'jest/no-disabled-tests': 'warn', // disallow disabled tests
        'jest/no-focused-tests': 'error', // disallow focused tests
        'jest/no-hooks': 'off', // disallow setup and teardown hooks
        'jest/no-identical-title': 'error', // disallow identical titles
        'jest/no-jest-import': 'error', // disallow importing jest
        'jest/no-large-snapshots': 'off', // disallow large snapshots
        'jest/no-test-prefixes': 'error', // disallow using `f` & `x` prefixes to define focused/skipped tests
        'jest/prefer-to-have-length': 'warn', // suggest using `toHaveLength()`
        'jest/prefer-to-be-null': 'warn', // suggest using `toBeNull()`
        'jest/prefer-to-be-undefined': 'warn', // suggest using `toBeUndefined()`
        'jest/prefer-expect-assertions': 'off', // suggest using `expect.assertions()` or `expect.hasAssertions()`
        'jest/valid-describe': 'error', // enforce valid `describe()` callback
        'jest/valid-expect': 'error', // enforce valid `expect()` usage
        'jest/valid-expect-in-promise': 'off' // enforce having return statement when testing with promises
    }
};
