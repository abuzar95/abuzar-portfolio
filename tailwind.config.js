/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xss: "375px",
      xs: "475px",
      sm: "640px",
      md: "768px",
      "2md": "992px",
      "3md": "850px",
      lg: "1024px",
      "2lg": "1163px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1868px",
    },
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        display: ['"Syne"', '"Instrument Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#E4E4E7",
        secondary: "#069C7A",
        primaryDark: "#212223",
        primaryLight: "#F2F5F8",
        ink: "#F7F7F8",
        canvas: "#18191A",
        surface: "#212223",
        mute: "#C4C4C8",
        read: "#E8E8EA",
      },
      borderColor: {
        "night-black": "#3b3b3b",
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
    themes: ["light", "dark"],
  },
};
