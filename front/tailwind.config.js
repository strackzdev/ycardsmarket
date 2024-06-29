/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "!./src/components/NavigationCards.vue", // Exclude navCard.vue from Tailwind CSS directives
  ],
  safelist: [
    'from-amber',
    'from-amethyst',
    'from-emerald',
    'from-ruby',
    'from-sapphire',
    'from-steel',
    ],
    theme: {
    extend: {
      colors: {
        'amber': '#F4B431',
        'amethyst': '#803A7B',
        'emerald': '#418B34',
        'ruby': '#D43C31',
        'sapphire': '#0689C3',
        'steel': '#9FA9B3',
      },
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

