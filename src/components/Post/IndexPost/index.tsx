import type { CollectionEntry } from "astro:content";
import { useMemo } from "react";
import { PostCard } from "../PostCard";

export const IndexPost = ({ posts }: { posts: CollectionEntry<"blog">[] }) => {
  const postList = useMemo<CollectionEntry<"blog">[]>(
    () => posts.sort((a, b) => b.data.id - a.data.id).slice(0, 5),
    [posts]
  );
  return (
    <div className="grid grid-cols-1 divide-y">
      {postList.map((post) => {
        return <PostCard key={post.id} post={post.data} slug={post.slug} />;
      })}
    </div>
  );
};
