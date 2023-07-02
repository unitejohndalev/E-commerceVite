# E-commerceVite

create using react vite with git bash<br/>
$ npm create vite@latest your-app-name -- -- template react  // create a vite app<br/>
$ npm i                                                      // to install dependencies<br/>
$ code .                                                     // to open code editor<br/>
$ npm run dev                                                // to star app<br/>

install tailwind with postcss and autoprefixer <br/>
npm install -D tailwindcss postcss autoprefixer              // to install packages<br/>
npx tailwindcss init -p                                      // to install tailwind.config.js and postcss.config.js<br/>

configure tailwind and index.css<br/>

copy the code below and paste it in tailwind.config.js<br/>
```/** @type {import('tailwindcss').Config} */<br/>
export default {<br/>
  content: [<br/>
    "./index.html",<br/>
    "./src/**/*.{js,ts,jsx,tsx}",<br/>
    
  ],<br/>
  theme: {<br/>
    extend: {},<br/>
  },<br/>
  plugins: [],<br/>
}<br/>

copy the code below and paste it in index.css<br/>
@tailwind base; <br/>
@tailwind components;<br/>
@tailwind utilities;



