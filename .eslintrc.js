module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["prettier", "prettier/@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "sort-imports-es6-autofix"],
  rules: {
    "typescript-eslint/no-var-requires": 0,
  },
}
