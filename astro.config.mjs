import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "one-dark-pro",
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["tsx", "typescript", "javascript"],
      wrap: false,
    },
  },
});
