/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "!./src/components/NavCards.vue", // Exclude navCard.vue from Tailwind CSS directives
  ],
    theme: {
    extend: {},
  },
  plugins: [],
}

