/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azonix: ["Azonix", "sans-serif"],
        noir: ["Noir", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        quantum: ["Quantum", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2cea37",
        },
        secondary: {
          DEFAULT: "#ffffff",
        },
        tertiary: {
          DEFAULT: "#000000",
        },
      },
      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "move-left-1": "move-left 10s linear infinite",
        "move-left-2": "move-left 10s linear 10s infinite",
      },
    },
  },
  plugins: [],
};
