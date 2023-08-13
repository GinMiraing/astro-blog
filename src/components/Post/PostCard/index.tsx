import dayjs from "dayjs";

type PostCardProps = {
  post: {
    title: string;
    description: string;
    date: Date;
    category: string;
    cover: string;
    author: string;
    id: number;
  };
  slug: string;
};

export const PostCard = ({ post, slug }: PostCardProps) => {
  return (
    <div className="flex flex-col justify-between py-4 h-48">
      <h3 className="text-lg sm:text-xl font-semibold">
        <a className="hover:text-link transition-colors" href={`/p/${slug}`}>
          {post.title}
        </a>
      </h3>
      <p className="my-4 flex-grow-0 text-sm/8 sm:text-base/8 line-clamp-2 text-justify">
        <a className="hover:text-link transition-colors" href={`/p/${slug}`}>
          {post.description}
        </a>
      </p>
      <div className="text-secondary truncate sm:text-sm text-xs space-x-2 sm:space-x-4">
        <span>{dayjs(post.date).format("YYYY.MM.DD")}</span>
        <span>/</span>
        <span>{post.category}</span>
      </div>
    </div>
  );
};
