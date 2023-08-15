import Navbar from "../Navbar";

type PageBannerProps = {
  imgsrc: string;
  title: string;
  description: string;
  select: number;
};

const PageBanner = ({
  imgsrc,
  title,
  description,
  select,
}: PageBannerProps) => {
  return (
    <div className="w-full relative h-64 sm:h-80 bg-slate-200">
      <img
        className="w-full h-full object-cover"
        src={`${imgsrc}@800w_400h_1c.webp`}
        alt="banner"
      />
      <div className="absolute h-48 hidden sm:block left-0 right-0 bottom-0 from-black/[.4] to-transparent bg-gradient-to-t"></div>
      <div className="absolute block sm:hidden top-0 left-0 right-0 h-64 bg-black/[.2]"></div>
      <div className="absolute flex sm:hidden items-center justify-center top-0 left-0 right-0 bottom-0">
        <h1 className="text-white font-bold text-xl">{title}</h1>
      </div>
      <div className="absolute hidden sm:block z-20 text-white bottom-6 left-12 right-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="flex space-x-4 text-sm">{description}</div>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://article.biliimg.com/bfs/article/d29fe12c860c2b7a54db6483132fb0cf24d6aeb0.png@.webp"
              alt="avatar"
            />
          </div>
        </div>
      </div>
      <div className="absolute hidden sm:block right-12 top-6">
        <Navbar select={select} />
      </div>
    </div>
  );
};

export default PageBanner;
