// src/library/microcms.ts
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログ記事の型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

// ブログ一覧を取得する関数
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "blog", queries });
};

// ブログ詳細を1件取得する関数
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.get<Blog>({
    endpoint: "blog",
    contentId,
    queries,
  });
};