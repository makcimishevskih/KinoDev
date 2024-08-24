module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      "eslint:recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
   ],
   ignorePatterns: ["dist", "*.cjs"],
   parser: "@typescript-eslint/parser",
   plugins: ["react-refresh"],
   rules: {
      "react-hooks/rules-of-hooks": "warn",
      "react-refresh/only-export-components": [
         "warn",
         { allowConstantExport: true },
      ],
      quotes: ["error", "double", { avoidEscape: true }],
      "react/jsx-first-prop-new-line": [2, "multiline"],
      "react/jsx-max-props-per-line": [2, { maximum: 1, when: "multiline" }],
      "react/jsx-closing-bracket-location": [2, "tag-aligned"],
   },
   settings: {
      "import/resolver": {
         node: {
            paths: ["src"],
            extensions: [".js", ".jsx", ".ts", ".tsx"],
         },
         alias: true,
      },
   },
};
