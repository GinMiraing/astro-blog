import { cn } from "@/lib/utils";

const itemList = [
  {
    title: "主页",
    link: "/",
  },
  {
    title: "文章",
    link: "/post/",
  },
  {
    title: "说说",
    link: "/issue/",
  },
  {
    title: "友链",
    link: "/links/",
  },
];

const NavbarItem = ({
  title,
  link,
  active,
}: {
  title: string;
  link: string;
  active: boolean;
}) => {
  return (
    <div
      className={cn("hover:text-pink transition-colors p-1", {
        "border-b-pink border-b-4": active,
      })}
    >
      <a href={link}>{title}</a>
    </div>
  );
};

const Navbar = ({ select }: { select: number }) => {
  return (
    <div
      className={cn("w-full justify-end flex space-x-4", {
        "text-white": select > 0,
        "text-primary": select === 0,
      })}
    >
      {itemList.map((item, index) => (
        <NavbarItem
          title={item.title}
          link={item.link}
          active={index === select ? true : false}
        />
      ))}
    </div>
  );
};

export default Navbar;
