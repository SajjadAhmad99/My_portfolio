/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-black': '#0A0A0A',
        'secondary-black': '#1A1A1A',
        'accent-red': '#FF2D2D',
        'accent-red-hover': '#FF4D4D',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(255, 45, 45, 0.4)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
