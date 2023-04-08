module.exports = {
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vitest/recommended',
    'plugin:testing-library/react',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
  },
  rules: {
    "import/no-named-as-default": 0,
    "import/no-unresolved": "error",
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": [
      "error", {
        "component": true,
        "html": true
      }
    ],
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["../"]
      }
    ],
  },
  plugins: ["vitest", "import"]
};