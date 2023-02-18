/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInLeft: "fadeInLeft 1s",
      },
      keyframes: {
        fadeInLeft: {
          from: {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          to: {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
