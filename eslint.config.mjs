import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  playwright.configs['flat/recommended'],
  prettier,
  {
    rules: {
      'playwright/no-skipped-test': 'warn',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Custom ignores
    'node_modules/',
    'test-results/',
    'playwright-report/',
    'blob-report/',
    'playwright/.cache/',
    'dist/',
    '.git/',
    'pnpm-lock.yaml',
  ]),
]);

export default eslintConfig;
