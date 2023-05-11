module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh',"react", "import", "unused-imports", "sequence", "prettier"],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/prop-types": 0,
    "indent": ["error", 2],
    "linebreak-style": 1,
    "react/react-in-jsx-scope": "off",
    "quotes": ["error", "single"],
    "unused-imports/no-unused-imports": "warn",
    "prettier/prettier": "error",
    "sequence/ordered-imports-by-path": [
      "error", {
        "ignoreCase": true,
        "sortSideEffectsFirst": true,
        "allowSeparateGroups": true,
        "sortTypeImportsFirst": true
      }
    ]
  }
}


