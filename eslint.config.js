const { defineConfig } = require("eslint/config");

eslintConfig = defineConfig([
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
    },
  },
]);

module.exports = eslintConfig;
