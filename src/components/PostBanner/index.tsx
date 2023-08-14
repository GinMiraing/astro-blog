import dayjs from "dayjs";

const PostBanner = ({
  imgsrc,
  title,
  date,
  category,
}: {
  imgsrc: string;
  title: string;
  date: Date;
  category: string;
}) => {
  return (
    <>
      <div className="h-64 sm:h-80 relative overflow-hidden bg-slate-200">
        <img
          src={`${imgsrc}@800w_400h_1c.webp`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute h-48 hidden sm:block left-0 right-0 bottom-0 from-black/[.4] to-transparent bg-gradient-to-t"></div>
        <div className="absolute hidden sm:block z-20 text-white bottom-6 left-12 right-12">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold mb-4">{title}</h1>
              <div className="flex space-x-4 text-sm">
                <span>{dayjs(date).format("YYYY.MM.DD")}</span>
                <span>/</span>
                <span>{category}</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="https://article.biliimg.com/bfs/article/d29fe12c860c2b7a54db6483132fb0cf24d6aeb0.png@.webp"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden flex-col items-center py-4 mx-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="text-sm space-x-2 text-secondary mt-4">
          <span>{dayjs(date).format("YYYY.MM.DD")}</span>
          <span>/</span>
          <span>{category}</span>
        </div>
      </div>
    </>
  );
};

export default PostBanner;
