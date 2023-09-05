/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#dc2626',
        blue: '#0284c7',
        grey: '#e2e8f0',
        dark: '#0f172a',
    },
    },
  },
  plugins: [],
}

