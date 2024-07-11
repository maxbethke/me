/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: {
          '50': '#f2fcff',
          '100': '#e6f9ff',
          '200': '#c2edff',
          '300': '#9edfff',
          '400': '#54bbff',
          '500': '#0b8dfe',
          '600': '#0977e6',
          '700': '#065cbf',
          '800': '#034499',
          '900': '#022d73',
          '950': '#011a4a',
          contrast: {
            text: 'white'
          }
        },
        secondary: '#0A1128'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    spacing: {
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px',
      '7': '56px',
      '8': '64px',
      '9': '72px',
      '10': '80px',
      '11': '88px',
      '12': '96px',
    },
  },
  plugins: [require("tailwindcss-animate")],
}
