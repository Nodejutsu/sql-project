module.exports = {
  env: {
    browser:  true,
    commonjs: true,
    jquery:   true,
    es6:      true,
    node:     true,
    mocha:    true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  globals: {
    $: false,
    _: false,
    Backbone: false,
    Handlebars: false,
    Hbs: false
  },
  'rules': {
    'comma-dangle': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': [0, {
      'prefer': {
        'returns': 'return'
      },
      'requireReturn': false
    }],
    'valid-typeof': 2,

    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'complexity': [2, 10],
    'consistent-return': 0,
    'curly': 2,
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 1,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 0,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 1,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [2, { 'allow': ['!!', '+'] } ],
    'no-implicit-globals': 1,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': [2, {
      'exceptions': {
        'VariableDeclarator': true,
        'ImportDeclaration': true,
        'Property': true
      }
    }],
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-process-env': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 1,
    'wrap-iife': [2, 'inside'],
    'yoda': 0,

    'strict': 0,

    'init-declarations': 0,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow': 1,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 0,

    'callback-return': 2,
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-restricted-modules': 0,
    'no-sync': 0,

    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'camelcase': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-this': [2, 'that'],
    'eol-last': 2,
    'func-names': 0,
    'func-style': 0,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'jsx-quotes': 0,
    'key-spacing': [2, { 'align': 'value', 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 2,
    'linebreak-style': 0,
    'lines-around-comment': 2,
    'max-depth': [1, 4],
    'max-len': 0,
    'max-nested-callbacks': [1, 4],
    'max-params': [1, 4],
    'max-statements': 0,
    'new-cap': 0,
    'new-parens': 2,
    'newline-after-var': 0,
    'newline-before-return': 2,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': 0,
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': 2,
    'operator-assignment': 0,
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent'],
    'quotes': [2, 'single', 'avoid-escape'],
    'require-jsdoc': 0,
    'semi': [2, 'never'],
    'semi-spacing': 2,
    'sort-imports': 2,
    'sort-vars': 0,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'wrap-regex': 2,

    'arrow-body-style': 2,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-constructor': 0,
    'no-var': 0,
    'object-shorthand': 1,
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-reflect': 0,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'require-yield': 1,
    'template-curly-spacing': 0,
    'yield-star-spacing': 0
  }
}
