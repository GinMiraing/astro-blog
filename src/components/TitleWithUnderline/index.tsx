const TitleWithUnderline = ({ title }: { title: string }) => {
  return (
    <h2 className="text-lg sm:text-xl font-semibold mb-3 w-auto inline-block relative after:absolute after:opacity-40 after:bottom-1 after:left-0 after:block after:right-0 after:h-2 after:bg-pink after:content-['']">
      {title}
    </h2>
  );
};

export default TitleWithUnderline;