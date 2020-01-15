module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'declaration-block-trailing-semicolon': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-list-comma-newline-after': null,
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': [
        'extend',
        'at-root',
        'debug',
        'warn',
        'error',
        'if',
        'else',
        'for',
        'each',
        'while',
        'mixin',
        'include',
        'content',
        'return',
        'function',
        'tailwind',
        'apply',
        'responsive',
        'variants',
        'screen',
      ],
    }],
  }
}