/**
 * https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        es6: true
    },
    plugins: [
        'import'
    ],
    rules: {
        'import/default': 'error', // ensure a default export is present, given a default import
        'import/dynamic-import-chunkname': 'error', // enforce a leading comment with the webpackChunkName for dynamic imports
        'import/export': 'error', // report any invalid exports, i.e. re-export of the same name
        'import/exports-last': 'error', // ensure all exports appear after other statements
        'import/extensions': [ // ensure consistent use of file extension within the import path
            'error',
            {
                js: 'never',
                ignorePackages: true
            }
        ],
        'import/first': 'error', // ensure all imports appear before other statements
        'import/group-exports': 'off', // prefer named exports to be grouped together in a single export declaration
        'import/max-dependencies': 'off', // limit the maximum number of dependencies a module can have
        'import/named': 'error', // ensure named imports correspond to a named export in the remote file
        'import/namespace': 'error', // ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/newline-after-import': 'error', // enforce a newline after import statements
        'import/no-absolute-path': 'error', // forbid import of modules using absolute paths
        'import/no-amd': 'error', // report AMD `require` and `define` calls
        'import/no-anonymous-default-export': 'off', // forbid anonymous values as default exports
        'import/no-commonjs': 'off', // report CommonJS `require` calls and `module.exports` or `exports.*`
        'import/no-cycle': 'error', // forbid a module from importing a module with a dependency path back to itself
        'import/no-default-export': 'off', // forbid default exports
        'import/no-deprecated': 'warn', // report imported names marked with `@deprecated` documentation tag
        'import/no-duplicates': 'error', // report repeated import of the same module in multiple places
        'import/no-dynamic-require': 'warn', // forbid `require()` calls with expressions
        'import/no-extraneous-dependencies': [ // forbid the use of extraneous packages
            'error',
            {
                devDependencies: true
            }
        ],
        'import/no-internal-modules': 'off', // prevent importing the submodules of other modules
        'import/no-mutable-exports': 'error', // forbid the use of mutable exports with `var` or `let`.
        'import/no-named-as-default-member': 'warn', // report use of exported name as property of default export
        'import/no-named-as-default': 'warn', // report use of exported name as identifier of default export
        'import/no-named-default': 'error', // forbid named default exports
        'import/no-namespace': 'warn', // reports if namespace import is used
        'import/no-nodejs-modules': 'off', // forbid the use of Node.js builtin modules
        'import/no-relative-parent-imports': 'off', // forbid importing modules from parent directories
        'import/no-restricted-paths': 'off', // restrict which files can be imported in a given folder
        'import/no-self-import': 'error', // forbid a module from importing itself
        'import/no-unassigned-import': 'warn', // forbid unassigned imports
        'import/no-unresolved': 'error', // ensure imports point to a file/module that can be resolved
        'import/no-useless-path-segments': 'error', // prevent unnecessary path segments in import and require statements
        'import/no-webpack-loader-syntax': 'error', // forbid Webpack loader syntax in imports
        'import/order': [ // enforce a convention in module import order
            'warn',
            {
                groups: [
                    'builtin',
                    [
                        'external',
                        'internal'
                    ],
                    'parent',
                    [
                        'sibling',
                        'index'
                    ]
                ]
            }
        ],
        'import/prefer-default-export': 'warn', // prefer a default export if module exports a single name
        'import/unambiguous': 'error' // report potentially ambiguous parse goal (`script` vs. `module`)
    }
};
