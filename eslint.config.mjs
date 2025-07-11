import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js and TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add Prettier config to disable formatting-related ESLint rules
  ...compat.extends("prettier"),
];

export default eslintConfig;
