/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/globals.css",
    "./public/**/*.html"
  ],
  safelist: [
    "animate-[var(--scroll)]",
    "animate-[var(--scroll-reverse)]"
  ],
  theme: {
    extend: {
      colors: {
        testdebug: "#ff00ff"
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'scroll-reverse': 'scrollReverse 40s linear infinite',
      },
    },
  },
  plugins: [],
};