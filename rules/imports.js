const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  settings: {
    'import/extensions': [
      '.js',
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    // Static analysis:
    'import/no-unresolved': [ERROR, { commonjs: true, caseSensitive: true }],
    'import/named': ERROR,
    'import/default': OFF,
    'import/namespace': OFF,

    // Helpful warnings:
    'import/export': ERROR,
    'import/no-named-as-default': ERROR,
    'import/no-named-as-default-member': ERROR,
    'import/no-deprecated': OFF,

    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': [ERROR, {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__generated__/**', // relay pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where extension/filename's suffix denotes that it is a test
        '**/jestSetup.js', // jest setup framework file
        '**/jest.config.js', // jest config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
      ],
      optionalDependencies: false,
    }],
    'import/no-mutable-exports': OFF,

    // Module systems:
    'import/no-commonjs': OFF,
    'import/no-amd': ERROR,

    // TODO: enable?
    'import/no-nodejs-modules': OFF,

    // Style guide:
    'import/first': [ERROR, 'absolute-first'],

    // deprecated: use `import/first`
    'import/imports-first': OFF,
    'import/no-duplicates': ERROR,

    // disallow namespace imports
    'import/no-namespace': OFF,
    'import/extensions': [ERROR, 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    }],
    'import/order': [ERROR, {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
    }],
    'import/newline-after-import': ERROR,
    'import/prefer-default-export': ERROR,
    'import/no-restricted-paths': OFF,
    'import/max-dependencies': [OFF, { max: 10 }],
    'import/no-absolute-path': ERROR,
    'import/no-dynamic-require': ERROR,
    'import/no-internal-modules': [OFF, {
      allow: [],
    }],
    'import/unambiguous': OFF,
    'import/no-webpack-loader-syntax': ERROR,
    'import/no-unassigned-import': OFF,
    'import/no-named-default': ERROR,
    'import/no-anonymous-default-export': [OFF, {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],
    'import/exports-last': OFF,
    'import/group-exports': OFF,
    'import/no-default-export': OFF,
    'import/no-self-import': ERROR,

    // TODO: switch this to ERROR after next release of eslint-plugin-import
    'import/no-cycle': [OFF, { maxDepth: Infinity }],

    'import/no-useless-path-segments': ERROR,
    'import/dynamic-import-chunkname': [OFF, {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    }],
  },
};
