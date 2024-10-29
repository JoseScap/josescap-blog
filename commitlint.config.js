// ommitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'ui', 'chore', 'refactor', 'test', 'docs']],
    'subject-case': [2,'always', 'lower-case']
  },
};
