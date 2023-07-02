# E-commerceVite

create using react vite with git bash

$ npm create vite@latest your-app-name -- -- template react  // create a vite app


$ npm i                                                      // to install dependencies


$ code .                                                     // to open code editor


$ npm run dev                                                // to star app



install tailwind with postcss and autoprefixer 


npm install -D tailwindcss postcss autoprefixer              // to install packages


npx tailwindcss init -p                                      // to install tailwind.config.js and postcss.config.js


configure tailwind and index.css


copy the code below and paste it in tailwind.config.js


/** @type {import('tailwindcss').Config} */


export default {


  content: [

  
    "./index.html",

    
    "./src/**/*.{js,ts,jsx,tsx}",

    
  ],

  
  theme: {

  
    extend: {},

    
  },

  
  plugins: [],

  
}


copy the code below and paste it in index.css

@tailwind base;

@tailwind components;

@tailwind utilities;



