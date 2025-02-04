import ParserTypescriptEslint from '@typescript-eslint/parser'
import PluginImport from 'eslint-plugin-import';
import PluginPrettier from 'eslint-plugin-prettier'
import globals from 'globals';

export default [
  {
    files: ["src/**/*.{ts,tsx}", "tests/**/*.{ts,tsx}", "src/**/.{css,scss}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: ParserTypescriptEslint,
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    plugins: {
      import: PluginImport,
      prettier: PluginPrettier,
    },
    rules: {
      "prettier/prettier": ["error", { "endOfLine": "auto", "tabWidth": 2, "useTabs": false }]
    },
    settings: {
      "import/resolver": {        
        typescript: {
          project: ["tsconfig.json"],
        },
      },
    },

  }
]