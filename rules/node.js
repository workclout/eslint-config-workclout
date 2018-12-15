const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  extends: [
    './index.js',
    './imports.js',
  ],
  rules: {
    'callback-return': OFF,
    'global-require': ERROR,
    'handle-callback-err': OFF,
    'no-buffer-constructor': ERROR,
    'no-mixed-requires': [OFF, false],
    'no-new-require': ERROR,
    'no-path-concat': ERROR,
    'no-process-env': OFF,
    'no-process-exit': OFF,
    'no-restricted-modules': OFF,
    'no-sync': OFF,
  },
};
