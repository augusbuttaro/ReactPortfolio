/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "purple": "#26161E",
      "white": "#F5F5F5",
      "pink-ten": "#FF07E61A",
      "pink-seventy": "#FF07E6B3",
      "green": "#ACD8AA",
      "green-fifty": "#ACD8AA80",
      "pink": "#FF07E6",
      "purple-fifty": "#77096C80"
    },
    fontFamily: {
      darkerGrotesque: ['"Darker Grotesque"', "sans-serif"],
    },
    boxShadow: {
      'pink': '0 0 15px 0 #FF07E680',
      'green': '-5px 5px 50px 0 #ACD8AA80',
    },
    backgroundImage: {
      'bgimg': "url('src/assets/bg-pic.png')",
    }
  },
  plugins: [],
}
