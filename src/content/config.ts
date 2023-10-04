import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
    id: z.number(),
    hide: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
