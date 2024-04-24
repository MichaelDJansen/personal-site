/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        quarternary: "var(--quarternary)",
      },
      boxShadow: {
        button: "0px 4px 4px 0px rgba(0,0,0,0.25)"
      },
      gridTemplateRows: {
        layout: "96px auto 96px"
      }
    },
  },
  plugins: [],
}
