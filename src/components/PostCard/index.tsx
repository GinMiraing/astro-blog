import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import LazyImage from "../LazyImage";

type PostCardProps = {
  post: CollectionEntry<"blog">;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex flex-col border-stone-300 hover:border-rose-300 border rounded-lg overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <a href={`/p/${post.slug}`}>
          <LazyImage
            src={post.data.cover}
            alt={post.data.title}
            width="800"
            height="400"
            className="hover:scale-150 transition-transform"
          />
        </a>
      </div>
      <div className="px-4 my-3">
        <h1 className="text-xl font-medium text-stone-900">
          <a
            className="hover:text-rose-400 transition-colors"
            href={`/p/${post.slug}`}
          >
            {post.data.title}
          </a>
        </h1>
        <time className="block mt-2 text-stone-600">
          {dayjs(post.data.date).format("YYYY-MM-DD")}
        </time>
      </div>
      <div className="px-4 my-3 flex-grow">
        <p className="text-justify line-clamp-2 text-stone-900">
          <a
            className="hover:text-rose-400 transition-colors"
            href={`/p/${post.slug}`}
          >
            {post.data.description}
          </a>
        </p>
      </div>
      <div className="px-4 mt-2 text-sm text-stone-600 font-medium pb-4">{`# ${post.data.category}`}</div>
    </div>
  );
};
