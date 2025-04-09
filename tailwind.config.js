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
        primaryLight: "rgb(var(--primaryLight))",

        secondary: "rgb(var(--secondary))",
        secondaryForeground: "rgb(var(--secondary-foreground))",
        secondaryLight: "rgb(var(--secondaryLight))",

        muted: "rgb(var(--muted))",
        mutedForeground: "rgb(var(--muted-foreground))",
        mutedLight: "rgb(var(--mutedLight))",


        destructive: "rgb(var(--destructive))",
        destructiveForeground: "rgb(var(--destructive-foreground))",
        destructiveLight: "rgb(var(--destructiveLight))",

        success: "rgb(var(--success))",
        successForeground: "rgb(var(--success-foreground))",
        successLight: "rgb(var(--successLight))",

        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
      },
    },
  },
  plugins: [],
};
