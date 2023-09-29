/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
          "xs":'425px'
      },
      colors: {
        'regal-blue': '#243c5a',
        "p":"#606060",
        "backGround":"#0000000d"
      },
      scrollbar: {
        '.scrollbar': {
              backgroundColor:'#0F172A',    
        },
      },
    },
  },
  plugins: [],
}

