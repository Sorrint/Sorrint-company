module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        // indent: ['error', 4, { SwitchCase: 1, ternary: 1 }],
        indent: ['off'],
        semi: [2, 'always'],
        requireMultiLineTernary: 0,
        'multiline-ternary': ['off'],
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
        'no-unused-expressions': ['off']
    }
};
