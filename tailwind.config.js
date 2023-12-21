/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        poppins: ['poppins', 'sans-serif'],
        krinkes: ['krinkesregular', 'sans-serif'],
        vodan: ['vodan', 'serif'],
        bryson: ["bryson", 'sans-serif']
      }
    },
  },
  plugins: [],
}

