export const Footer = () => {
  return (
    <footer className="fixed bottom-0 border-t w-full bg-white">
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8 h-full items-center">
        <div className="text-sm">©️ 2023 Yin. All rights reserved.</div>
        <div className="text-sm mt-2 md:mt-0">
          {"Based on "}
          <a href={"https://astro.build/"}>Astro</a>
        </div>
      </div>
    </footer>
  );
};
