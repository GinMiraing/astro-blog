import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  prevUrl?: string;
  nextUrl?: string;
};

const Pagination = ({ prevUrl, nextUrl }: PaginationProps) => {
  return (
    <div className="flex justify-between text-sm transition-colors my-2">
      <div
        className={cn("flex items-center hover:text-pink transition-colors", {
          invisible: !prevUrl,
        })}
      >
        <ChevronLeft className="h-4 w-4" />
        <a href={prevUrl}>上一页</a>
      </div>
      <div
        className={cn("flex items-center hover:text-pink transition-colors", {
          invisible: !nextUrl,
        })}
      >
        <a href={nextUrl}>下一页</a>
        <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Pagination;
