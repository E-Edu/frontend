module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-html'
    ],
    rules: {
        'no-console': 'error',
        'no-debugger': 'error',
        'no-extra-semi': 'error',
        'no-import-assign': 'error',
        'no-unreachable': 'error',
        'dot-location': ['error', 'object'],
        'dot-notation': ['error', {'allowKeywords': false}],
        'eqeqeq': ['error', 'always'],
        'no-alert': 'error',
        'no-empty-function': 'error',
        'no-iterator': 'error',
        'no-invalid-this': 'error',
        'no-magic-numbers': 'error',
        'no-multi-spaces': 'error',
        'no-script-url': 'error',
        'no-var': 'error',
        'no-unused-vars': 'error',
        'array-bracket-newline': ['error', {'multiline': true, 'minItems': 2}],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': 'error',
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'camelcase': ['error', {allow: ['de_DE', 'en_US']}],
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', {'minProperties': 3}],
        /*'no-use-before-define': 'error'*/
        /*'id-blacklist': ['error', 'data', 'err', 'e', 'cb', 'callback']*/
    },
};
