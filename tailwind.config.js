/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d6efd',
          50: '#e7f1ff',
          100: '#cce4ff',
          200: '#99c9ff',
          300: '#66adff',
          400: '#3392ff',
          500: '#0d6efd',
          600: '#0056d2',
          700: '#0041a6',
          800: '#002b7a',
          900: '#00164f',
        },
        secondary: {
          DEFAULT: '#6c757d',
          50: '#f4f5f6',
          100: '#e9ebed',
          200: '#c8ced4',
          300: '#a7b1ba',
          400: '#85949f',
          500: '#6c757d',
          600: '#555e64',
          700: '#3e464a',
          800: '#282e31',
          900: '#111619',
        },
        danger: {
          DEFAULT: '#dc3545',
          50: '#fdebed',
          100: '#fbd7db',
          200: '#f6afb7',
          300: '#f18892',
          400: '#ec606e',
          500: '#dc3545',
          600: '#b82835',
          700: '#8a1f28',
          800: '#5c151b',
          900: '#2e0a0d',
        },
        warning: {
          DEFAULT: '#ffc107',
          50: '#fff9e6',
          100: '#fff2cc',
          200: '#ffe699',
          300: '#ffda66',
          400: '#ffcd33',
          500: '#ffc107',
          600: '#cc9a06',
          700: '#997404',
          800: '#664d03',
          900: '#332701',
        },
        success: {
          DEFAULT: '#198754',
          50: '#e6f3ec',
          100: '#cce7d9',
          200: '#99cfb3',
          300: '#66b78d',
          400: '#339f67',
          500: '#198754',
          600: '#146b44',
          700: '#0f4f34',
          800: '#0a3423',
          900: '#051812',
        },
      }
    },
  },
  plugins: [],
};
