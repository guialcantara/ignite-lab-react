import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig(
    [globalIgnores(["**/node_modules/", "**/build/", "**/dist/", "**/.env", "**/src/graphql/generated.ts"]), {
        extends: compat.extends(
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended",
        ),
        plugins: {
            react,
            "@typescript-eslint": typescriptEslint,
        },
        languageOptions: {
            globals: Object.fromEntries(
                Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
            ),
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    }],
);