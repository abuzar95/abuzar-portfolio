/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xss: "375px",
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "2md": "992px",

      "3md": "850px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2lg": "1163px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1868px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#A3A3A3",
        secondary: "#069C7A",
        primaryDark: "#212223",
        primaryLight: "#F2F5F8",
      },
      borderColor: {
        "night-black": "#3b3b3b", // Replace 'your-custom-color' with the color of your choice
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["ligth", "dark"],
  },
};
