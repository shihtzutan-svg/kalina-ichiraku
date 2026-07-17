import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 💡 最新版で必須のローダーをインポート

const blogCollection = defineCollection({
  // 💡 最新版の書き方: globを使ってMarkdownファイルの場所を指定します
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    catchphrase: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};