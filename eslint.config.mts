import globals from "globals"
import stylistic from "@stylistic/eslint-plugin"
import tseslint from "typescript-eslint"

export default tseslint.config({
    ignores: [
        "node_modules",
        "static",
        ".vscode",
        "dist",
        "storybook-static",
    ],
}, {
    linterOptions: {
        noInlineConfig: false,
        reportUnusedInlineConfigs: "error",
        reportUnusedDisableDirectives: true,
    },
}, {
    files: ["**/*.{ts,cts,mts,tsx}"],
    extends: [
        tseslint.configs.recommendedTypeChecked,
        tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        parserOptions: {
            project: ["./tsconfig.json"],
            tsconfigRootDir: __dirname,
        },
    },
    rules: {
        "@typescript-eslint/consistent-type-imports": ["error"],
        "@typescript-eslint/no-empty-object-type": ["error", {
            allowObjectTypes: "always",
        }],
        "@typescript-eslint/prefer-nullish-coalescing": ["error", {
            ignoreBooleanCoercion: true,
        }],
    },
}, {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    extends: [
        stylistic.configs.recommended,
        stylistic.configs["disable-legacy"],
    ],
    languageOptions: {
        ecmaVersion: 2022,
        globals: globals.browser,
    },
    rules: {
        "@stylistic/linebreak-style": ["error", "unix"],
        "@stylistic/semi": ["error", "never"],
        "@stylistic/quotes": ["error", "double"],
        "@stylistic/indent": ["error", 4],
        "@stylistic/jsx-indent-props": ["error", 4],
        "@stylistic/comma-dangle": ["error", "always-multiline"],
        "@stylistic/no-confusing-void-expression": ["off"],
        "sort-imports": ["error", {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "multiple", "all", "single"],
            allowSeparatedGroups: true,
        }],
    },
}, {
    files: ["**/*.{js,cjs,mjs,jsx}"],
    rules: {
        "@stylistic/semi": ["error", "always"],
    },
})
