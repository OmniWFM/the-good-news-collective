import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,jjsjsx,mdx}',
    './components/**/*.{ts,tsx,jjsjsx,mdx}',
    './app/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9ef',
          100: '#ffefc7',
          200: '#ffd97d',
          300: '#ffc13b',
          400: '#ffac00',
          500: '#e69700",
          600: '#cc8600',
          700: '#a66c00',
          800: '#7f5300',
          900: '#593a00',
        },
        navy: {
           500: '#1a234b',
           900: '#0d1126',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)", 'sans-serif'],
        display: ['var(--font-playfair)", 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0': { opacity: '0', transform: 'translateY(24px)' },
          '100': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0': { opacity: '0' },
          '100': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;