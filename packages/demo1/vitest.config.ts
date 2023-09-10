import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./**/*.test.{ts,tsx,js}'],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    testTimeout: 1000 * 60,
  },
});
