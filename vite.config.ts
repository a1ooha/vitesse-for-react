/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import LinguiLoader from 'unplugin-lingui-loader/vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    LinguiLoader(),

    react({
      babel: { plugins: ['macros'] }
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      exclude: ['**/components/**/*']
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: true
    })
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom'
  }
});
