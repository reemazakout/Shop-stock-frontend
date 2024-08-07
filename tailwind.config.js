/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "350px",
        md: "600px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1380px",
      },
    },
    extend: {
      colors: {
        'primary': '#D40912',
        'secondary': '#323A56',
        'hoverredcolor': '#E61946', 
      },
    },
  },
  plugins: [],
}
