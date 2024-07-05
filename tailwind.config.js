import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        'text-slide-3': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-75%)',
          },
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          }
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        typing: "typing 2s steps(20), blink .7s infinite",
        'text-slide-3': 'text-slide-3 8s cubic-bezier(0.83, 0, 0.17, 1) infinite'
      },
    },
  },
  plugins: [],
};
