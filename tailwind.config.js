/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing_image': "url('/public/landing_page.jpg')",
        'landing_page_bg': "url('/public/landing_page_bg.jpeg')"
      },
      colors: {
        'primary': '#3AAFA9',
        'secondary': '#2B7A78'
      }
    },
  },
  plugins: [],
}

