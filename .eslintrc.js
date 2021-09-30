module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: ["error", "never"],
    "no-restricted-imports": ["error", "fs"],
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
  },
}
