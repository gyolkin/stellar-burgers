/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1240px',
      },
      padding: {
        DEFAULT: '2rem',
        xl: 0,
      },
    },
    extend: {
      colors: {
        primary: '#131316',
        secondary: '#3a3a55',
        night: '#2f2f37',
        dark: '#1c1c21',
        inactive: '#8585ad',
        success: '#0cc',
        error: '#e52b1a',
        accent: '#4c4cff',
        purple: '#801ab3',
      },
      boxShadow: {
        glow: '0 0 16px 8px rgba(51,51,255,.25), 0 0 8px 8px rgba(51,51,255,.25)',
        dark: '0 0 16px 8px rgba(40, 40, 50, 0.25), 0 0 8px 8px rgba(20, 20, 24, 0.25)',
        tab: 'inset 0px -1px 0px #2F2F37',
        tabselect: 'inset 0px -2px 0px #4C4CFF',
      },
      fontFamily: {
        iceland: ['Iceland', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
