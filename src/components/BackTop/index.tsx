import { ArrowBigUp } from "lucide-react";

const BackTop = () => {
  return (
    <div
      onClick={() => scrollTo(0, 0)}
      className="hidden w-8 h-8 text-secondary bottom-4 right-4 cursor-pointer items-center justify-center sm:flex rounded-sm fixed md:bottom-6 md:right-6 bg-primary md:w-10 md:h-10 shadow-md z-20"
    >
      <ArrowBigUp className="w-4 h-4 md:w-5 md:h-5" fill="#bbb" />
    </div>
  );
};

export default BackTop;
