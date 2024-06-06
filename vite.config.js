import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    sveltekit(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.svelte'],
    }),
  ],
  server: {
    host: true,
  },
});
