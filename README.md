# Portfolio Page

# Setup Steps

### Update packages

- `brew update`
- `brew doctor`
- `brew upgrade` or `brew upgrade node`
- `brew link node`

### Create Project

- `npm create vite@latest`

### Run Project

- `cd` into project
- First Time: `npm install`
- Run: `npm run dev`
- Stop: `CTRL + C`

# Add Tailwind

### Clear default code

- Delete everything in src > App.css
- Delete everything in src > index.css
- Delete everything in src > App.jsx

### Add Boilerplate Code

- Add to App.jsx
```
import './App.css'

function App() {
  return (
    <div>
      <p className='underline text-4xl'>Hello TailWind</p>
    </div>
  )
}

export default App
```

### Install TailwindCSS

- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`

### Add TailwindCSS Config items

- Replace code in `tailwind.config.js` with:
```
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
```

### Add Tailwind reference to CSS

- Add to index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
