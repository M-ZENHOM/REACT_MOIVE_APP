/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fill,minmax(300px,1fr))",
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
};
