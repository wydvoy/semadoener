/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ff9159",
        "primary-fixed": "#ff7a2f",
        "on-primary-fixed": "#000000",
        "surface": "#0e0e0e",
        "surface-container": "#191919",
        "surface-container-high": "#1f1f1f",
        "surface-container-low": "#131313",
        "surface-container-lowest": "#000000",
        "on-surface": "#ffffff",
        "on-surface-variant": "#ababab",
        "background": "#0e0e0e"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Be Vietnam Pro", "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
