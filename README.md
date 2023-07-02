# E-commerceVite

create using react vite with git bash<br/>
$ npm create vite@latest your-app-name -- -- template react &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// create a react vite app<br/>
$ npm i &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to install dependencies<br/>
$ code . &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to open code editor<br/>
$ npm run dev &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to star app<br/>

install tailwind with postcss and autoprefixer <br/>
npm install -D tailwindcss postcss autoprefixer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to install packages<br/>
npx tailwindcss init -p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to install tailwind.config.js and postcss.config.js<br/>

configure tailwind and index.css<br/>

```copy the code below and paste it in tailwind.config.js<br/>```
```/** @type {import('tailwindcss').Config} */<br/>
export default {
  content: [
    "./index.html",<
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
  },<br/>
  plugins: [],
}
```

```copy the code below and paste it in index.css<br/>```
```
@tailwind base; <br/>
@tailwind components;<br/>
@tailwind utilities;
```


