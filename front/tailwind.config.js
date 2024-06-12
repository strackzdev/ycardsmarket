/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "!./src/components/NavigationCards.vue", // Exclude navCard.vue from Tailwind CSS directives
  ],
    theme: {
    extend: {
      padding: {
        'custom': '100px',
      },
    },
  },
  plugins: [],
}

