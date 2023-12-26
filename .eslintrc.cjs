module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "@stylistic/eslint-plugin-js"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "semi": "error",
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "double"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "@stylistic/js/max-len": ["error", { "code": 120 }]
    },
};
