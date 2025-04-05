import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./package/**/*.{js,jsx,ts,tsx}"], // Only scan your library files
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",

        primary: "rgb(var(--primary))",
        primaryForeground: "rgb(var(--primary-foreground))",

        secondary: "rgb(var(--secondary))",
        secondaryForeground: "rgb(var(--secondary-foreground))",

        muted: "rgb(var(--muted))",
        mutedForeground: "rgb(var(--muted-foreground))",

        accent: "rgb(var(--accent))",
        accentForeground: "rgb(var(--accent-foreground))",

        destructive: "rgb(var(--destructive))",
        destructiveForeground: "rgb(var(--destructive-foreground))",

        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
      },
    },
  },
  plugins: [],
};
