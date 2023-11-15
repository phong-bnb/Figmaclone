/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    colors: {
      white: "#fafafa",
      pink: "#FF5151",
      pinkc:"#fdebf9",
      graytext:"#686868",
      violetpink:"#fdebf9"
    },
    padding: {
      '50px': '50px',
      leftmin:'14px',
      table:'640px'
    },
    width:{
      widthtb:"640px"
    },
    gap:{
      gapl:"50px"
    },
    background:{
bggray:"##f5f5f5"
    }
  
  },
};
export const plugins = [];
