import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './tests',
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
