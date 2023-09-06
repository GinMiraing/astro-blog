import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

const itemList = [
  {
    title: "主页",
    link: "/",
  },
  {
    title: "文章",
    link: "/post/1",
  },
  {
    title: "说说",
    link: "/issue/",
  },
  {
    title: "友链",
    link: "/links/",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={cn(
        "fixed top-0 w-full overflow-hidden shadow-md duration-500 transition-all bg-white z-10 sm:hidden",
        {
          "max-h-16": !toggle,
          "max-h-screen": toggle,
        }
      )}
    >
      <div className="flex items-center px-4 w-full h-16 justify-between">
        <a className="block" href="/">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://article.biliimg.com/bfs/article/d29fe12c860c2b7a54db6483132fb0cf24d6aeb0.png@.webp"
              alt="avatar"
            />
          </div>
        </a>
        <div
          className="cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          <Menu className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="flex pb-2 flex-col">
        {itemList.map((item) => (
          <div key={item.title} className="w-full px-4 py-1">
            <a
              onClick={() => setToggle((prev) => !prev)}
              className="w-full h-10 rounded-sm leading-10 block text-center transition-colors hover:text-pink hover:bg-hover"
              href={item.link}
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
