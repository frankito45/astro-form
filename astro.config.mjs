import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: process.env.NODE_ENV === 'production' ? (Number(process.env.PORT) || 80) : 4321,
    host: true
  }
});