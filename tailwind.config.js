/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#292A73",
          secondary: "#F49C00",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}
