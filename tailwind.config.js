/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          pink:    '#C2185B',
          fuchsia: '#9C27B0',
          purple:  '#6A1B9A',
          indigo:  '#3949AB',
          blue:    '#1E88E5',
          cyan:    '#0097A7',
          teal:    '#00ACC1',
        },
      },
      backgroundImage: {
        'brand-gradient':      'linear-gradient(135deg, #C2185B 0%, #9C27B0 30%, #3949AB 60%, #00ACC1 100%)',
        'brand-gradient-r':    'linear-gradient(to right, #C2185B, #9C27B0, #3949AB, #00ACC1)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(194,24,91,0.08) 0%, rgba(156,39,176,0.08) 30%, rgba(57,73,171,0.08) 60%, rgba(0,172,193,0.08) 100%)',
        'hero-dark':           'linear-gradient(135deg, #1a0628 0%, #0e1340 50%, #001e2b 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
