import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";

type PostCardProps = {
  post: CollectionEntry<"blog">;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="flex flex-col border rounded-md overflow-hidden">
      <div className="w-full h-48 overflow-hidden">
        <a href={`/p/${post.slug}`}>
          <img
            loading="lazy"
            className="w-full h-full object-cover hover:scale-150 transition-transform"
            src={post.data.cover}
            alt={post.data.title}
          />
        </a>
      </div>
      <div className="px-4 my-3">
        <h1 className="text-xl font-sans font-medium">
          <a href={`/p/${post.slug}`}>{post.data.title}</a>
        </h1>
        <time className="font-serif mt-2">
          {dayjs(post.data.date).format("YYYY-MM-DD")}
        </time>
      </div>
      <div className="px-4 my-3 flex-grow">
        <p className="text-justify font-serif line-clamp-2">
          <a href={`/p/${post.slug}`}>{post.data.description}</a>
        </p>
      </div>
      <div className="px-4 mt-2 text-sm font-serif font-medium pb-4">{`# ${post.data.category}`}</div>
    </div>
  );
};
