# E-commerceVite

created using react vite with git bash<br/>

```$ npm create vite@latest your-app-name -- -- template react ```
-- to create a react vite app<br/>

```$ npm i ```
-- to install dependencies<br/>

```$ code .```
-- to open code editor<br/>

```$ npm run dev ```
-- to star app<br/>

install tailwind with postcss and autoprefixer <br/>
npm install -D tailwindcss postcss autoprefixer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to install packages<br/>
npx tailwindcss init -p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to install tailwind.config.js and postcss.config.js<br/>

configure tailwind and index.css<br/>

```copy the code below and paste it in tailwind.config.js```
```/** @type {import('tailwindcss').Config} *
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

```copy the code below and paste it in index.css```
```
@tailwind base; <br/>
@tailwind components;<br/>
@tailwind utilities;
```


