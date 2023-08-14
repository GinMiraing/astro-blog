const LinksItem = ({
  link,
  avatar,
  name,
  description,
}: {
  link: string;
  avatar: string;
  name: string;
  description: string;
}) => {
  return (
    <a
      className="hover:bg-hover block transition-colors rounded-sm"
      referrerPolicy="no-referrer"
      target="_blank"
      href={link}
    >
      <div className="flex space-x-4 p-4">
        <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden">
          <img
            src={avatar}
            alt={avatar}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <div className="sm:text-base text-sm font-semibold">{name}</div>
          <div className="text-xs sm:text-sm mt-1 line-clamp-2">
            {description}
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinksItem;
