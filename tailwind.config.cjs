/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        white: "#FFFFFF",  
        blue: "#6278F7",
        grenn: "#95FFD4",
        gray: "#AFAFAF",
        black: "#212121"
      },
      secondary: {
        programming: "#57C278",
        frontend: "#82CFFA",
        dataSciences: "#A6D157",
        devops: "#E06B69",
        uxDesign: "#DB6EBF",
        mobile: "#FFBA05",
        inovation: "#FF8A29"
      },
      tertiary: {
        programming: "#D9F7E9",
        frontend: "#E8F8FF",
        dataSciences: "#F0F8E2",
        devops: "#FDE7E8",
        uxDesign: "#FAE9F5",
        mobile: "#FFF5D9",
        inovation: "#FFEEDF"
      },
    },
    extend: { 
      fontFamily: {
        "sans": "Montserrat, sans-serif",
        "serif": "Prata, sans-serif",
      }
    },
  },
  plugins: [],
}
