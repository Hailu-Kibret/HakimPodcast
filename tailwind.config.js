/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" }, // Start from left (off-screen)
          "100%": { transform: "translateX(0)" }, // End at the normal position
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" }, // Start from right (off-screen)
          "100%": { transform: "translateX(0)" }, // End at the normal position
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out", // Animation for left slide
        slideInRight: "slideInRight 1s ease-out", // Animation for right slide
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
      animation: {
        typing: "typing 4s steps(40, end) forwards",
        blink: "blink 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};
