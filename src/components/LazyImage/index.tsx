import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

type LazyImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
};

const LazyImage = ({ src, width, height, alt, className }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "10px",
  });
  const srcSuffix = `${width ? width : "800"}w_${
    height ? height : "400"
  }h_1c.webp`;

  const placeholder = `https://article.biliimg.com/bfs/article/18d1e2d11b9e00ea443016e3f94beb9af888d339.png@${srcSuffix}`;

  return (
    <div ref={ref} className={cn("h-full w-full overflow-hidden", className)}>
      <img
        src={inView ? `${src}@${srcSuffix}` : placeholder}
        className="lazyload object-cover h-full w-full"
        alt={alt ? alt : ""}
      />
    </div>
  );
};

const LazyFancyboxImage = ({
  src,
  width,
  height,
  alt,
  className,
}: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "10px",
  });
  const srcSuffix = `${width ? width : "800"}w_${
    height ? height : "400"
  }h_1c.webp`;

  const placeholder = `https://article.biliimg.com/bfs/article/18d1e2d11b9e00ea443016e3f94beb9af888d339.png@${srcSuffix}`;
  return (
    <div ref={ref} className={cn("h-full w-full overflow-hidden", className)}>
      <a
        className="hover:brightness-90 transition-all"
        data-fancybox
        data-caption={alt ? alt : ""}
        href={src}
      >
        <img
          src={inView ? `${src}@${srcSuffix}` : placeholder}
          className="lazyload object-cover h-full w-full"
          alt={alt ? alt : ""}
        />
      </a>
    </div>
  );
};

export { LazyImage, LazyFancyboxImage };