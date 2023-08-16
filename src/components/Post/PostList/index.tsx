import { PostCard } from "../PostCard";
import type { CollectionEntry } from "astro:content";

export const PostList = ({ posts }: { posts: CollectionEntry<"blog">[] }) => {
  return (
    <div className="grid grid-cols-1 divide-y">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post.data} slug={post.slug} />;
      })}
    </div>
  );
};
