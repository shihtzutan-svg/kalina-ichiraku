// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({


build: {
    inlineStylesheets: 'always' // 各CSSはバラバラのまま、HTML内に直接最速で埋め込む
  }
});