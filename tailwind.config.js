/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        mainColor: "#14375f",
        primaryColor: "#235af5",
        grayColor: "#f5f5f5",
        secondaryColor: "#ebebee",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {},
      },
    ],
  },
  plugins: [require("daisyui")],
};
