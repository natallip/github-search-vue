module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/babel',
    'prettier/vue',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': ['warn', { allow: ['__metadata'] }],
    'valid-v-slot': 'off',
    'vue/component-name-in-template-casing': 'warn',
    'vue/custom-event-name-casing': 'off',
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-empty-component-block': 'warn',
    'vue/no-multiple-objects-in-class': 'warn',
    'vue/no-potential-component-option-typo': 'warn',
    'vue/no-reserved-component-names': 'warn',
    'vue/no-static-inline-styles': 'off',
    'vue/no-template-target-blank': 'warn',
    'vue/no-useless-v-bind': 'warn',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/padding-line-between-blocks': 'warn',
    'vue/require-explicit-emits': 'off',
    'vue/require-name-property': 'warn',
    'vue/v-for-delimiter-style': 'warn',
    'vue/v-on-function-call': 'warn',
    'vue/valid-v-slot': 'off',
    'vue/order-in-components': 'warn',
    'no-var': 'warn',
    'new-cap': 'warn',
    'vars-on-top': 'warn',
    'block-scoped-var': 'warn',
    'vue/html-comment-indent': 'warn',
  },
};
