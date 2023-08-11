/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        link: "var(--primary)",
      },
      backgroundColor: {
        primary: "var(--card-bg)",
        hr: "var(--hr-bg)",
        body: "var(--body-bg)",
        hover: "var(--hover-bg)",
      },
      colors: {
        pink: "var(--primary)",
      },
      fontFamily: {
        noto: ["Noto Serif SC", "sans-serif"],
      },
      minHeight: {
        main: "calc(100vh - 4rem)",
      },
    },
  },
};
