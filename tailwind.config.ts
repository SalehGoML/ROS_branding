import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E6B5E',
        'primary-lt': '#4A8C7C',
      },
      screens: {
        xs: '380px',
      },
    },
  },
}

export default config
