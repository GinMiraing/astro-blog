import { ChevronRight } from "lucide-react";

const More = ({ link, title }: { link: string; title: string }) => {
  return (
    <div className="flex items-center hover:text-pink text-sm transition-colors justify-end mt-2">
      <a href={link}>{title}</a>
      <ChevronRight className="h-4 w-4" />
    </div>
  );
};

export default More;
