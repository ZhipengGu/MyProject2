# React + Vite+Tailwind CSS--Tech Demo Code          Zhipeng Gu (6987301  zgu038) Assignment

Tech Demo: Tailwind CSS

***
If you already have Node.js and VS code installed, after you download this through Github, you just need to open 
VS code terminal and do:

npm install

npm run dev

Lab 2 of COMPSCI 732 is used as a part of this demo, to compare Tailwind CSS and the original CSS.
It is recommended to install Tailwind CSS IntelliSense as extension in VS Code

CSS Components are only used for comparison. Feel free to delete PokedexPage.module.css and PokedexLayout.module.css
***

***
This part is for React and Tailwind beginners, if you also want to explore
To begin with, react and Tailwind need to be created and installed. Node.js and VS Code are needed too.

For react, I create it with Vite. Run the following command: npm create vite@latest 
Then, select the following options:

•	Project name: XXXX 

•	Framework: React

•	Variant: JavaScript + SWC

This react app is now in the folder and open it with VS code, run :

npm install

npm run dev


To install Tailwind, here is the link: https://tailwindcss.com/docs/guides/vite  In the VS Code terminal, input:

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

After this, add the paths to all of your template files in your tailwind.config.js file. Input:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In index.css file, input: 
```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;

```
***

