/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5DC",
        "cream-light": "#FDFDF8",
        burgundy: "#800020",
        gold: "#D4AF37",
      },
      fontFamily: {
        yeseva: ["Yeseva One", "serif"],
        josefin: ["Josefin Slab", "serif"],
      },
      borderWidth: {
        9: "9px",
      },
    },
  },
};
