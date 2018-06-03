/**
 * https://eslint.org/docs/rules/
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    rules: {
        'accessor-pairs': 'off', // require getter/setter pairs in objects
        'array-bracket-newline': [ // enforce line breaks after opening and before closing array brackets
            'error',
            {
                multiline: true
            }
        ],
        'array-bracket-spacing': [ // disallow spaces inside of brackets
            'error',
            'never'
        ],
        'array-callback-return': 'error', // enforces return statements in callbacks of array’s methods
        'array-element-newline': [ // enforce line breaks between array elements
            'error',
            {
                multiline: true
            }
        ],
        'arrow-body-style': [ // enforces no braces where they can be omitted
            'error',
            'as-needed'
        ],
        'arrow-parens': [ // allows omitting parens when there is only one argument
            'error',
            'as-needed'
        ],
        'arrow-spacing': [ // require space before and after arrow function’s arrow
            'error',
            {
                before: true,
                after: true
            }
        ],
        'block-scoped-var': 'error', // enforce the use of variables within the scope they are defined
        'block-spacing': [ // enforce spaces inside of blocks after opening block and before closing block
            'error',
            'always'
        ],
        'brace-style': [ // require brace style
            'error',
            '1tbs'
        ],
        'callback-return': 'off', // require return statements after callbacks
        camelcase: 'error', // require camelcase naming convention
        'capitalized-comments': 'off', // enforce or disallow capitalization of the first letter of a comment
        'class-methods-use-this': 'warn', // enforce that class methods utilize `this`
        'comma-dangle': [ // disallow trailing commas
            'error',
            'never'
        ],
        'comma-spacing': [ // require space after comma, disallow space before comma
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [ // require a comma after and on the same line as an array element, object property, or variable declaration
            'error',
            'last'
        ],
        complexity: 'off', // limit cyclomatic complexity
        'computed-property-spacing': [ // disallow spaces inside of computed properties
            'error',
            'never'
        ],
        'consistent-return': 'error', // require `return` statements to always specify values
        'consistent-this': [ // enforce consistent naming when capturing the current execution context
            'error',
            'that'
        ],
        'constructor-super': 'error', // verify calls of `super()` in constructors
        curly: 'error', // enforce consistent brace style for all control statements
        'default-case': 'off', // require default case in `switch` statements
        'dot-location': [ // enforce newline before and after dot
            'error',
            'property'
        ],
        'dot-notation': 'error', // require dot notation whenever possible
        'eol-last': [ // require newline at the end of files
            'error',
            'always'
        ],
        eqeqeq: 'error', // require === and !==
        'for-direction': 'error', // enforce `for` loop update clause moving the counter in the right direction
        'func-call-spacing': [ // disallow spacing between function identifiers and their invocations
            'error',
            'never'
        ],
        'func-name-matching': 'off', // require function names to match the name of the variable or property to which they are assigned
        'func-names': 'off', // require or disallow named `function` expressions
        'func-style': 'off', // enforce the consistent use of either `function` declarations or expressions
        'function-paren-newline': [ // enforce consistent line breaks inside function parentheses
            'error',
            'multiline'
        ],
        'generator-star-spacing': [ // enforce spacing around the * in generator functions
            'error',
            {
                before: false,
                after: true
            }
        ],
        'getter-return': 'error', // enforce `return` statements in getters
        'global-require': 'off', // enforce `require()` on the top-level module scope
        'guard-for-in': 'off', // require or disallow guarding `for-in`
        'handle-callback-err': 'off', // enforce callback error handling
        'id-blacklist': 'off', // disallow specified identifiers
        'id-length': 'off', // enforce minimum and maximum identifier lengths
        'id-match': 'off', // require identifiers to match a specified regular expression
        'implicit-arrow-linebreak': [ // enforce the location of arrow function bodies with implicit returns
            'error',
            'beside'
        ],
        indent: [ // require consistent indentation
            'error',
            4, // 4 spaces
            {
                ignoredNodes: [
                    'JSXElement *'
                ]
            }
        ],
        'indent-legacy': 'off', // deprecated, replaced by indent
        'init-declarations': 'off', // require or disallow initialization in variable declarations
        'jsx-quotes': [ // enforce the use of double quotes in JSX attributes
            'error',
            'prefer-double'
        ],
        'key-spacing': [ // enforce consistent spacing between keys and values in object literal properties
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [ // enforce consistent spacing before and after keywords
            'error',
            {
                before: true,
                after: true
            }
        ],
        'line-comment-position': 'off', // enforce position of line comments
        'linebreak-style': 'off', // enforce consistent linebreak style
        'lines-around-comment': 'off', // require empty lines around comments
        'lines-around-directive': 'off', // deprecated, replaced by padding-line-between-statements
        'lines-between-class-members': [ // require an empty line between class members
            'error',
            'always'
        ],
        // rule for eslint 5.0
        // 'max-classes-per-file': 'error', // one class per file only
        'max-depth': 'off', // enforce a maximum depth that blocks can be nested
        'max-len': 'off', // enforce a maximum line length
        'max-lines': 'off', // enforce a maximum file length
        'max-nested-callbacks': 'off', // enforce a maximum depth that callbacks can be nested
        'max-params': 'off', // enforce or disallow a maximum number of parameters in function definitions
        'max-statements': 'off', // enforce a maximum number of statements allowed in function blocks
        'max-statements-per-line': 'off', // enforce a maximum number of statements allowed per line
        'multiline-comment-style': 'off', // enforce a particular style for multiline comments
        'multiline-ternary': 'off', // enforce or disallow newlines between operands of ternary expressions
        'new-cap': 'error', // require constructor names to begin with a capital letter
        'new-parens': 'error', // require parentheses when invoking a constructor with no arguments
        'newline-after-var': 'off', // deprecated, replaced by padding-line-between-statements
        'newline-before-return': 'off', // deprecated, replaced by padding-line-between-statements
        'newline-per-chained-call': 'off', // require a newline after each call in a method chain
        'no-alert': 'error', // disallow the use of `alert`, `prompt` and `confirm` functions
        'no-array-constructor': 'off', // disallow use of the `Array()` constructor
        'no-await-in-loop': 'warn', // disallow `await` inside of loops
        'no-bitwise': 'error', // disallow bitwise operators
        'no-buffer-constructor': 'off', // disallow use of the `Buffer()` constructor
        'no-caller': 'error', // disallow the use of caller/callee
        'no-case-declarations': 'error', // disallow lexical declarations in case/default clauses
        'no-catch-shadow': 'off', // disallow shadowing of variables inside of `catch`
        'no-class-assign': 'error', // disallow modifying variables of class declarations
        'no-compare-neg-zero': 'error', // disallow comparing against -0
        'no-cond-assign': 'error', // disallow assignment operators in conditional statements
        'no-confusing-arrow': 'off', // disallow arrow functions where they could be confused with comparisons
        'no-console': [ // disallow the use of `console`
            'error',
            {
                allow: [
                    'info' // allow the use `console.info()`
                ]
            }
        ],
        'no-const-assign': 'error', // disallow modifying variables that are declared using `const`
        'no-constant-condition': 'error', // disallow constant expressions in conditions
        'no-continue': 'off', // disallow `continue` statements
        'no-control-regex': 'error', // disallow control characters in regular expressions
        'no-debugger': 'error', // disallow the use of `debugger`
        'no-delete-var': 'error', // disallow deleting variables
        'no-div-regex': 'off', // disallow division operators explicitly at the beginning of regular expressions
        'no-dupe-args': 'error', // disallow duplicate arguments in function definitions
        'no-dupe-class-members': 'error', // disallow duplicate name in class members
        'no-dupe-keys': 'error', // disallow duplicate keys in object literals
        'no-duplicate-case': 'error', // disallow a duplicate case label
        'no-duplicate-imports': 'error', // disallow duplicate imports
        'no-else-return': 'error', // disallow return before else
        'no-empty': [ // disallow empty block statements
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        'no-empty-character-class': 'error', // disallow empty character classes in regular expressions
        'no-empty-function': 'off', // disallow empty functions
        'no-empty-pattern': 'error', // disallow empty destructuring patterns
        'no-eq-null': 'error', // disallow null comparisons
        'no-eval': 'error', // disallow the use of `eval()`
        'no-ex-assign': 'error', // disallow reassigning exceptions in `catch` clauses
        'no-extend-native': 'error', // disallow extending of native objects
        'no-extra-bind': 'off', // disallow unnecessary function binding
        'no-extra-boolean-cast': 'error', // disallow unnecessary boolean casts
        'no-extra-label': 'off', // disallow unnecessary labels
        'no-extra-parens': [ // disallow unnecessary parentheses
            'error',
            'all',
            {
                nestedBinaryExpressions: false,
                ignoreJSX: 'multi-line'
            }
        ],
        'no-extra-semi': 'error', // disallow unnecessary semicolons
        'no-fallthrough': 'error', // disallow `case` statement fallthrough
        'no-floating-decimal': 'error', // disallow floating decimals
        'no-func-assign': 'error', // disallow reassigning `function` declarations
        'no-global-assign': 'error', // disallow assignment to native objects or read-only global variables
        'no-implicit-coercion': 'off', // disallow the type conversion with shorter notations
        'no-implicit-globals': 'off', // disallow variable and `function` declarations in the global scope
        'no-implied-eval': 'error', // disallow implied `eval()`
        'no-inline-comments': 'off', // disallow inline comments after code
        'no-inner-declarations': 'error', // disallow variable or `function` declarations in nested blocks
        'no-invalid-regexp': 'error', // disallow invalid regular expression strings in `RegExp` constructors
        'no-invalid-this': 'off', // disallow `this` keywords outside of classes or class-like objects
        'no-irregular-whitespace': 'error', // disallow irregular whitespace
        'no-iterator': 'error', // disallow the use of the `__iterator__` property
        'no-label-var': 'error', // disallow labels that share a name with a variable
        'no-labels': 'error', // disallow labeled statements
        'no-lone-blocks': 'error', // disallow unnecessary nested blocks
        'no-lonely-if': 'warn', // disallow `if` statements as the only statement in `else` blocks
        'no-loop-func': 'error', // disallow function declarations and expressions inside loop statements
        'no-magic-numbers': [ // disallow magic numbers
            'warn',
            {
                ignoreArrayIndexes: true
            }
        ],
        'no-mixed-operators': [ // disallow mixed binary operators
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],
        'no-mixed-requires': 'off', // disallow `require` calls to be mixed with regular variable declarations
        'no-mixed-spaces-and-tabs': 'error', // disallow mixed spaces and tabs for indentation
        'no-multi-assign': 'error', // disallow use of chained assignment expressions
        'no-multi-spaces': 'warn', // disallow multiple spaces
        'no-multi-str': 'error', // disallow multiline strings
        'no-multiple-empty-lines': [ // disallow multiple empty lines
            'error',
            {
                max: 1,
                maxEOF: 1
            }
        ],
        'no-native-reassign': 'off', // deprecated, replaced by no-global-assign
        'no-negated-condition': 'off', // disallow negated conditions
        'no-negated-in-lhs': 'off', // deprecated, replaced by no-unsafe-negation
        'no-nested-ternary': 'warn', // disallow nested ternary expressions
        'no-new': 'error', // disallow `new` operators outside of assignments or comparisons
        'no-new-func': 'error', // disallow `new` operators with the `Function` object
        'no-new-object': 'error', // disallow `Object` constructors
        'no-new-require': 'error', // disallow `new require()`
        'no-new-symbol': 'error', // disallow `Symbol` constructor
        'no-new-wrappers': 'error', // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        'no-obj-calls': 'error', // disallow calling global object properties as functions
        'no-octal': 'error', // disallow octal literals
        'no-octal-escape': 'off', // disallow octal escape sequences in string literals
        'no-param-reassign': 'error', // disallow reassigning `function` parameters
        'no-path-concat': 'error', // disallow string concatenation with `__dirname` and `__filename`, use `path.join` instead
        'no-plusplus': 'warn', // disallow the unary operators `++` and `--`
        'no-process-env': 'off', // disallow `process.env`
        'no-process-exit': 'error', // disallow the use of `process.exit()`
        'no-proto': 'error', // disallow the use of the `__proto__` property
        'no-prototype-builtins': 'warn', // disallow the use of `Object.prototypes` builtins directly
        'no-redeclare': 'error', // disallow variable redeclaration
        'no-regex-spaces': 'error', // disallow multiple spaces in regular expression literals
        'no-restricted-globals': 'off', // disallow specified global variables
        'no-restricted-imports': 'off', // disallow specified modules when loaded by `import`
        'no-restricted-modules': 'off', // disallow specified modules when loaded by `require`
        'no-restricted-properties': 'off', // disallow certain properties on certain objects
        'no-restricted-syntax': 'off', // disallow specified syntax
        'no-return-assign': 'warn', // disallow assignment operators in `return` statements
        'no-return-await': 'error', // disallow unnecessary `return await`
        'no-script-url': 'warn', // disallow `javascript:` urls
        'no-self-assign': 'error', // disallow assignments where both sides are exactly the same
        'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
        'no-sequences': 'error', // disallow comma operators
        'no-shadow': 'error', // disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow-restricted-names': 'error', // disallow identifiers from shadowing restricted names
        'no-spaced-func': 'off', // deprecated, replaced by func-call-spacing
        'no-sparse-arrays': 'error', // disallow sparse arrays
        'no-sync': 'off', // disallow synchronous methods
        'no-tabs': 'off', // disallow all tabs
        'no-template-curly-in-string': 'warn', // disallow template literal placeholder syntax in regular strings
        'no-ternary': 'off', // disallow ternary operators
        'no-this-before-super': 'error', // disallow use of `this`/`super` before calling `super()` in constructors
        'no-throw-literal': 'error', // restrict what can be thrown as an exception
        'no-trailing-spaces': 'warn', // disallow trailing whitespace at the end of lines
        'no-undef': 'error', // disallow undeclared variables
        'no-undef-init': 'error', // disallow initializing variables to `undefined`
        'no-undefined': 'error', // disallow the use of `undefined` as an identifier
        'no-underscore-dangle': 'error', // disallow dangling underscores in identifiers
        'no-unexpected-multiline': 'error', // disallow confusing multiline expressions
        'no-unmodified-loop-condition': 'off', // disallow unmodified loop conditions
        'no-unneeded-ternary': 'warn', // disallow ternary operators when simpler alternatives exist
        'no-unreachable': 'error', // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        'no-unsafe-finally': 'error', // disallow control flow statements in `finally` blocks
        'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators
        'no-unused-expressions': 'error', // disallow unused expressions
        'no-unused-labels': 'error', // disallow unused labels
        'no-unused-vars': 'error', // disallow unused variables
        'no-use-before-define': 'error', // disallow early use
        'no-useless-call': 'error', // disallow unnecessary calls to `.call()` and `.apply()`
        'no-useless-computed-key': 'error', // disallow unnecessary computed property keys in object literals
        'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
        'no-useless-constructor': 'error', // disallow unnecessary constructors
        'no-useless-escape': 'error', // disallow unnecessary escape usage
        'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name
        'no-useless-return': 'error', // disallow redundant return statements
        'no-var': 'error', // require `let` or `const` instead of `var`
        'no-void': 'error', // disallow `void` operators
        'no-warning-comments': 'off', // disallow specified warning terms in comments
        'no-whitespace-before-property': 'error', // disallow whitespace before properties
        'no-with': 'error', // disallow `with` statements
        'nonblock-statement-body-position': 'off', // enforce the location of single-line statements
        'object-curly-newline': [ // enforce consistent line breaks inside braces
            'warn',
            {
                consistent: true
            }
        ],
        'object-curly-spacing': [ // enforce consistent spacing inside braces
            'warn',
            'always'
        ],
        'object-property-newline': [ // enforce placing object properties on separate lines
            'error',
            {
                allowAllPropertiesOnSameLine: true
            }
        ],
        'object-shorthand': [ // require or disallow method and property shorthand syntax for object literals
            'error',
            'always',
            {
                avoidQuotes: true,
                avoidExplicitReturnArrows: true
            }
        ],
        'one-var': [ // enforce variables to be declared either together or separately in functions
            'warn',
            'never'
        ],
        'one-var-declaration-per-line': [ // require newlines around variable declarations
            'error',
            'always'
        ],
        'operator-assignment': 'warn', // require assignment operator shorthand where possible
        'operator-linebreak': [ // enforce consistent linebreak style for operators
            'error',
            'before'
        ],
        'padded-blocks': [ // disallow padding within blocks
            'error',
            'never'
        ],
        'padding-line-between-statements': [ // require or disallow padding lines between statements
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            },
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var'
                ],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: [
                    'const',
                    'let',
                    'var'
                ],
                next: [
                    'const',
                    'let',
                    'var'
                ]
            }
        ],
        'prefer-arrow-callback': 'error', // require using arrow functions for callbacks
        'prefer-const': 'error', // require `const` declarations for variables that are never reassigned after declared
        'prefer-destructuring': 'warn', // require destructuring from arrays and/or objects
        'prefer-numeric-literals': 'off', // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
        // rule for eslint 5.0
        //'prefer-object-spread': 'warn', // disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
        'prefer-promise-reject-errors': 'error', // require using `Error` objects as `Promise` rejection reasons
        'prefer-reflect': 'off', // deprecated
        'prefer-rest-params': 'error', // suggest using the rest parameters instead of `arguments`
        'prefer-spread': 'error', // suggest using the spread operator instead of `apply()`
        'prefer-template': 'error', // suggest using template literals instead of string concatenation
        'quote-props': [ // require quotes around object literal property names
            'error',
            'as-needed'
        ],
        quotes: [ // enforce the consistent use of either backticks, double, or single quotes
            'error',
            'single'
        ],
        radix: 'error', // require radix parameter
        'require-await': 'error', // disallow async functions which have no `await` expression
        'require-jsdoc': 'off', // require JSDoc comments
        'require-yield': 'error', // disallow generator functions that do not have `yield`
        'rest-spread-spacing': [ // enforce spacing between rest and spread operators and their expressions
            'error',
            'never'
        ],
        semi: [ // require semicolons instead of ASI
            'error',
            'always'
        ],
        'semi-spacing': [ // enforce consistent spacing before and after semicolons
            'error',
            {
                before: false,
                after: true
            }
        ],
        'semi-style': [ // enforce location of semicolons
            'error',
            'last'
        ],
        'sort-imports': 'off', // enforce sorted import declarations within modules, use eslint-plugin-import instead
        'sort-keys': 'off', // require object keys to be sorted
        'sort-vars': 'off', // require variables within the same declaration block to be sorted
        'space-before-blocks': [ // enforce consistent spacing before blocks
            'error',
            'always'
        ],
        'space-before-function-paren': [ // enforce consistent spacing before `function` definition opening parenthesis
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': [ // enforce consistent spacing inside parentheses
            'error',
            'never'
        ],
        'space-infix-ops': 'error', // require spacing around infix operators
        'space-unary-ops': [ // enforce consistent spacing before or after unary operators
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        'spaced-comment': [ // enforce consistent spacing after the `//` or `/*` in a comment
            'warn',
            'always'
        ],
        strict: 'off', // disallow strict mode directives
        'switch-colon-spacing': 'warn', // enforce spacing around colons of `switch` statements
        'symbol-description': 'error', // require symbol descriptions
        'template-curly-spacing': [ // disallow spacing around embedded expressions of template strings
            'error',
            'never'
        ],
        'template-tag-spacing': [ // disallow spacing between template tags and their literals
            'error',
            'never'
        ],
        'unicode-bom': 'error', // disallow Unicode byte order mark (BOM)
        'use-isnan': 'error', // require calls to `isNaN()` when checking for `NaN`
        'valid-jsdoc': 'off', // enforce or disallow valid JSDoc comments
        'valid-typeof': 'error', // enforce comparing `typeof` expressions against valid strings
        'vars-on-top': 'off', // require `var` declarations be placed at the top of their containing scope
        'wrap-iife': [ // require parentheses around immediate function invocations
            'error',
            'inside'
        ],
        'wrap-regex': 'off', // require parenthesis around regex literals
        'yield-star-spacing': [ // disallow spacing before the `*` in `yield*` expressions
            'error',
            'before'
        ],
        yoda: [ // disallow yoda conditions
            'error',
            'never',
            {
                exceptRange: true
            }
        ]
    }
};
