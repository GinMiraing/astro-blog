import { cn } from "@/lib/utils";
import { ArrowUp, Menu } from "lucide-react";
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
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={cn(
        "fixed top-0 w-full overflow-hidden shadow-md duration-500 transition-all bg-rose-100 z-10 sm:hidden",
        {
          "max-h-16": !toggle,
          "max-h-screen": toggle,
        }
      )}
    >
      <div className="flex items-center px-4 w-full h-16 justify-between">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://article.biliimg.com/bfs/article/d29fe12c860c2b7a54db6483132fb0cf24d6aeb0.png@.webp"
            alt="avatar"
          />
        </div>
        <div className="flex h-16 items-center space-x-4">
          <div className="cursor-pointer" onClick={() => scrollTo(0, 0)}>
            <ArrowUp className="h-6 w-6 text-primary" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          >
            <Menu className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
      <div className="flex pb-2 flex-col">
        {itemList.map((item) => (
          <div key={item.title} className="w-full px-4 py-1">
            <a
              className="w-full h-8 rounded-sm leading-8 block text-center transition-colors hover:text-pink hover:bg-black/10"
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
