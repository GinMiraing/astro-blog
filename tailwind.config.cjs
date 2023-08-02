/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Noto Serif SC", "serif"],
      },
      colors: {
        primarytext: "var(--text-primary)",
        secondarytext: "var(--text-secondary)",
      },
    },
  },
};
