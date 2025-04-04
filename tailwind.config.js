/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./package/**/*.{js,jsx,ts,tsx}"], // Only scan your library files
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        primaryText: "rgb(var(--primary-text))",
        secondaryText: "rgb(var(--secondary-text))",
        text: "rgb(var(--text))",
        linkText: "rgb(var(--link-text))",
      },
    },
  },
  plugins: [],
};
