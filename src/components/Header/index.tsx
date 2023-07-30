import { useState } from "react";
import { AlignJustify, ChevronUpSquare, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "w-full h-16 md:h-16 transition-all sticky shadow-md bg-white",
        {
          "h-80": mobileMenuOpen,
        }
      )}
    >
      <nav className="flex h-full flex-col overflow-hidden">
        <div className="flex h-16 p-4 justify-between items-center">
          <a
            className="p-2 text-lg hover:text-slate-500 transition-colors font-semibold"
            href={"/"}
          >
            胤的博客
          </a>

          <div className="p-2 md:block hidden space-x-4">
            <a
              className="hover:bg-slate-100 transition-colors rounded p-2"
              href={"/"}
            >
              归档
            </a>
            <a
              className="hover:bg-slate-100 transition-colors rounded p-2"
              href={"/"}
            >
              分类
            </a>
            <a
              className="hover:bg-slate-100 transition-colors rounded p-2"
              href={"/"}
            >
              友链
            </a>
          </div>

          <div className="md:hidden flex space-x-4 items-center">
            <button>
              <ChevronUpSquare className="h-6 w-6" fill="red" />
            </button>
            <button>
              <Sun className="h-6 w-6" fill="red" />
            </button>
            <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
              <AlignJustify className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div
          className={cn("flex flex-col my-auto justify-evenly items-center")}
        >
          <div className="w-full text-center">
            <a
              className="hover:bg-slate-100 transition-colors p-4 w-full block"
              href={"/"}
            >
              归档
            </a>
          </div>
          <div className="w-full text-center">
            <a
              className="hover:bg-slate-100 transition-colors p-4 w-full block"
              href={"/"}
            >
              分类
            </a>
          </div>
          <div className="w-full text-center">
            <a
              className="hover:bg-slate-100 transition-colors p-4 w-full block"
              href={"/"}
            >
              友链
            </a>
          </div>
          <div className="w-full text-center">
            <a
              className="hover:bg-slate-100 transition-colors p-4 w-full block"
              href={"/"}
            >
              归档
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
