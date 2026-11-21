// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://asuka-nishimiya.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always' // 各CSSはバラバラのまま、HTML内に直接最速で埋め込む
  }
});