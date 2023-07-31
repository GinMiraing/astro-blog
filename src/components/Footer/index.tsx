export const Footer = () => {
  return (
    <footer className="border-t h-16 w-full bg-white">
      <div className="flex flex-col md:flex-row justify-between p-3 md:p-8 h-full items-center">
        <div className="text-xs md:text-sm">
          ©️ 2023 Yin. All rights reserved.
        </div>
        <div className="text-xs md:text-sm">
          {"Based on "}
          <a href={"https://astro.build/"}>Astro</a>
        </div>
      </div>
    </footer>
  );
};
