import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

type LazyImageProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
  className?: string;
};

const LazyImage = ({ src, alt, width, height, className }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "50px 0px",
  });

  return (
    <div
      ref={ref}
      data-inview={inView}
      className="relative data-[inview=true]:blur-none blur-sm duration-500 transition-all h-full w-full overflow-hidden"
    >
      <img
        alt={alt}
        src={
          inView
            ? `${src}@${width}w_${height}h_1c.webp`
            : `https://article.biliimg.com/bfs/article/3ab219979329e88a15d8d38b7e67c0e283945f3d.png@${width}w_${height}h_1c.webp`
        }
        className={cn("object-cover h-full w-full", className)}
      />
    </div>
  );
};

export default LazyImage;
