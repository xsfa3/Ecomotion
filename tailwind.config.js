/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx,vue,html}",
  ],
  theme: {
    extend: {  colors: {
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
    },},
  },
  plugins: [],
};
