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
      violetpink:"#fdebf9",
      hihi:"#161E54",
      bg1:"#ffefe7",
      bg2:"#e8f0fb",
      bg3:"#fdebf9"
    },
    padding: {
      '50px': '50px',
      leftmin:'14px',
      table:'640px',
      pright:"18rem"
    },
    width:{
      widthtb:"640px"
    },
    gap:{
      gapl:"50px"
    },
    background:{
    bggray:"##f5f5f5"
    },
    screens: {
      'xs': '360px'
    },
  
  },
  // screens: {
  //   'xs': '640px',
  //   // => @media (min-width: 640px) { ... }

  // },
};
export const plugins = [];
