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
        bounce: "bounce 2.2s infinite", // Adjust the duration as needed
        "gradient-border": "gradient-border 2s linear infinite", // New animation for rotating gradient
      },
      keyframes: {
        "gradient-border": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%", // Added for the gradient animation
      },
      borderRadius: {
        xl: "1rem", // Custom radius for cards
      },
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin
  ],
};

export default tailwindConfig;
