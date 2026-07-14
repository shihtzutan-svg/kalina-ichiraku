import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 👈 新しいローダーを読み込み

const newsCollection = defineCollection({
  // 👈 V6では type: 'content' の代わりに loader を使います
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'news': newsCollection,
};