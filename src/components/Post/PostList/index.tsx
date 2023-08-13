import { useState } from "react";
import { PostCard } from "../PostCard";
import { cn } from "@/lib/utils";
import type { CollectionEntry } from "astro:content";

export const PostList = ({ posts }: { posts: CollectionEntry<"blog">[] }) => {
  const [currentList, setCurrentList] = useState<CollectionEntry<"blog">[]>(
    posts.slice(0, 7)
  );

  const [offset, setOffset] = useState<number>(8);
  const btnClickHandler = () => {
    setOffset((prev) => {
      return prev + 8;
    });
    setCurrentList((prev) => [...prev, ...posts.slice(offset, offset + 7)]);
  };
  return (
    <>
      <div className="grid grid-cols-1 divide-y">
        {currentList.map((post) => {
          return <PostCard key={post.id} post={post.data} slug={post.slug} />;
        })}
      </div>
      <button
        className={cn("text-sm", {
          hidden: offset >= posts.length,
        })}
        onClick={() => btnClickHandler()}
      >
        - 加载更多 -
      </button>
    </>
  );
};
