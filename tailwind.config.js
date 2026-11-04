
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#aaaaaa',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#1f1f1f',
          900: '#111111',
          950: '#090909',
        },

        teal: {
          50: '#f5f5f5',
          100: '#eeeeee',
          200: '#dddddd',
          300: '#cccccc',
          400: '#aaaaaa',
          500: '#888888',
          600: '#666666',
          700: '#555555',
          800: '#333333',
          900: '#222222',
        },

        cream: {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#eaeaea',
          300: '#dddddd',
          400: '#cccccc',
          500: '#aaaaaa',
        },

        charcoal: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#cccccc',
          300: '#aaaaaa',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#1f1f1f',
          900: '#090909',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Georgia', 'serif'],
      },
    },
  },

  plugins: [],
};
