/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        bounce: 'bounce 2.5s infinite', // Adjust the duration as needed
      },
    },
  },
  plugins: [require("daisyui")],
};

export default tailwindConfig;
