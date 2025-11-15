/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  safelist: [
    "w-32","h-32","bg-blue-500","text-white","flex","items-center","justify-center"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

