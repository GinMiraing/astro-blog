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

const issueSchema = z.object({
  id: z.number(),
  time: z.string(),
  author: z.string(),
  avatar: z.string(),
  message: z.string(),
  picture: z.array(z.string()).optional(),
  hide: z.boolean().optional(),
});

const IssueCollection = defineCollection({
  type: "data",
  schema: z.object({
    issues: z.array(issueSchema),
  }),
});

export const collections = {
  blog: blogCollection,
  issue: IssueCollection,
};
