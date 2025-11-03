import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',

  adapter: node({
    mode: 'standalone'
  }),

  server: {
    port: process.env.NODE_ENV === 'production' ? (Number(process.env.PORT) || 80) : 4321,
    host: true
  },

  vite: {
    plugins: [tailwindcss()]
  }
});