/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "!./src/components/NavigationCards.vue", // Exclude navCard.vue from Tailwind CSS directives
  ],
    theme: {
    extend: {
      spacing: {
        '1/2-2': 'calc(50% - 0.5rem)',
        '1/2-4': 'calc(50% - 1rem)',
        '1/2-5': 'calc(50% - 1.25rem)',
        '1/2-8': 'calc(50% - 2rem)',
      },
      padding: {
        'custom': '100px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [],
}

