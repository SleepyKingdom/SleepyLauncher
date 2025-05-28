import { defineConfig } from 'vite';
import path from 'node:path';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Main Vite output (for renderer/frontend assets)
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext'
    },
  },
  plugins: [
    topLevelAwait(),
    react(),
    electron({
      main: {
        entry: 'electron/main.ts',
        vite: {
          build: {
            outDir: 'dist-electron', // Output for Electron's main process
            rollupOptions: {
              output: {
                entryFileNames: 'main.js', // Electron Builder expects main.js
              },
            },
          },
        },
      },
      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
        vite: {
          build: {
            outDir: 'dist-electron', // Preload script output
            rollupOptions: {
              output: {
                entryFileNames: 'preload.js',
              },
            },
          },
        },
      },
      renderer: process.env.NODE_ENV === 'test'
        ? undefined
        : {}, // Adjust Node integration as needed
    }),
  ],
});
