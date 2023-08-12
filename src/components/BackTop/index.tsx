import { ArrowBigUp } from "lucide-react";

const BackTop = () => {
  return (
    <div
      onClick={() => scrollTo(0, 0)}
      className="hidden text-secondary cursor-pointer items-center justify-center sm:flex rounded-sm fixed bottom-4 right-4 bg-primary w-10 h-10 shadow-md z-20"
    >
      <ArrowBigUp className="w-5 h-5" fill="#bbb" />
    </div>
  );
};

export default BackTop;
