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
      },
      colors: {
        pink: "var(--primary)",
      },
    },
  },
};
