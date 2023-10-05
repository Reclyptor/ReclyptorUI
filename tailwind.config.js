/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"']
    },
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-active": "var(--color-primary-active)",
        "primary-focus": "var(--color-primary-focus)",
        "secondary": "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",
        "secondary-active": "var(--color-secondary-active)",
        "secondary-focus": "var(--color-secondary-focus)",
        "tertiary": "var(--color-tertiary)",
        "tertiary-hover": "var(--color-tertiary-hover)",
        "tertiary-active": "var(--color-tertiary-active)",
        "tertiary-focus": "var(--color-tertiary-focus)",
        "background": "var(--color-background)",
        "foreground": "var(--color-foreground)",
        "surface": "var(--color-surface)",
      }
    },
  },
  plugins: [],
}