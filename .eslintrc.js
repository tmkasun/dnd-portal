const path = require("path");

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        "airbnb",
        "airbnb-typescript/base",
        "plugin:jsx-a11y/recommended",
        "prettier",
    ],
    plugins: ["prettier", "testing-library"],
    overrides: [
        {
            // from https://github.com/testing-library/eslint-plugin-testing-library
            files: [
                "**/__tests__/**/*.[jt]s?(x)",
                "**/?(*.)+(spec|test).[jt]s?(x)",
            ],
            extends: [
                "plugin:testing-library/react",
                "plugin:jest-dom/recommended",
            ],
        },
    ],
    rules: {
        "prettier/prettier": ["error"],
        "@typescript-eslint/no-unused-vars": ["error"],
        'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }], // Allow JSX syntax only in .tsx no .jsx
        "react/react-in-jsx-scope": "off", // Prevent forcing `Need to import React for JSX`
        "import/extensions": "off", // Disable to allow import files without file extensions
        "react/prop-types": "off", // No sense with TS https://github.com/iamturns/eslint-config-airbnb-typescript/issues/57
        "import/prefer-default-export": "off",
        "react/require-default-props": "off", // Prevent forcing to have default props
        "react/function-component-definition": [2, { "namedComponents": ["arrow-function", "function-declaration"] }],
        "import/no-extraneous-dependencies": [0, { "devDependencies": ["**/*.test.js", "**/*.spec.js", "src/tests/test-utils.tsx", "src/setupTests.ts", "msw"] }]
    },
};
