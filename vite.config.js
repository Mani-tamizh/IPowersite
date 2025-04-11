import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/IPowersite/", // 👈 correct path for GitHub Pages
});
