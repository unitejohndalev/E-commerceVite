# E-commerceVite

Created using react vite with git bash<br/>

`$ npm create vite@latest your-app-name -- -- template react `
-- to create a react vite app<br/>

`$ npm i `
-- to install app packages<br/>

`$ code .`
-- to open code editor<br/>

`$ npm run dev `
-- to star app<br/>

<br/>
Install tailwind with postcss and autoprefixer <br/>

`npm install -D tailwindcss postcss autoprefixer `
-- to install packages<br/>

`npx tailwindcss init -p`
-- to install tailwind.config.js and postcss.config.js<br/>

<br/>
Configure tailwind and index.css<br/>

`copy the code below and paste it in tailwind.config.js`

```/** @type {import('tailwindcss').Config} *
export default {
  content: [
    "./index.html",<
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },<br/>
  plugins: [],
}
```

`copy the code below and paste it in index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br/>
Install Material Tailwind<br/>

`npm i @material-tailwind/react`

<br/>
Configure tailwind

```
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
```

<br/>
Install React Icon<br/>

`npm i react-icons`

<br/>
Install Embla React Carousel<br/>

`npm install embla-carousel-react --save`

<br/>
Install Embla Carousel Autoplay<br/>

`npm install embla-carousel-autoplay --save`

<br/>
Install Material UI Icons<br/>

`npm install @mui/icons-material @mui/material @emotion/styled @emotion/react`

<br/>
View localhost on mobile phone<br/>

`ipconfig`
-- on cmd to check ip address
-- find IPv4

<br/>
On package.json change "dev" to<br/>

`"vite --host"`

<br/>
Run the app<br/>

`npm run dev -- --host`

<br/>
use Network address and type it on your mobile phone<br/>

`192.***.*.*:5173`

<br/>
install AOS for animation<br/>

`npm i aos`
