import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
  }),
});

const issueSchema = z.object({
  id: z.number(),
  time: z.string(),
  author: z.string(),
  avatar: z.string(),
  message: z.string(),
  picture: z.string().optional(),
});

const IssueCollection = defineCollection({
  type: "data",
  schema: z.object({
    issues: z.array(issueSchema),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  issue: IssueCollection,
};
