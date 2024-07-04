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
        "loop-scroll":{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
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
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        typing: "typing 2s steps(20), blink .7s infinite"
      }
  },
  },
  plugins: [],
}