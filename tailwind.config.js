const theme = require('./colors.json');

const expandTheme = (palette) => {
  const blend = (color, opacity, base) => {
    const red = Math.ceil(Number.parseInt(color.slice(1, 3), 16) * (opacity / 100) + ((100 - opacity) / 100) * Number.parseInt(base.slice(1, 3), 16)).toString(16).padStart(2, "0").toUpperCase();
    const green = Math.ceil(Number.parseInt(color.slice(3, 5), 16) * (opacity / 100) + ((100 - opacity) / 100) * Number.parseInt(base.slice(3, 5), 16)).toString(16).padStart(2, "0").toUpperCase();
    const blue = Math.ceil(Number.parseInt(color.slice(5, 7), 16) * (opacity / 100) + ((100 - opacity) / 100) * Number.parseInt(base.slice(5, 7), 16)).toString(16).padStart(2, "0").toUpperCase();
    return `#${red}${green}${blue}`;
  };
  return {
    "transparent": "transparent",
    "current": "currentColor",
    "black": "#000000",
    "white": "#FFFFFF",
    "background": palette.background,
    "background-accent": blend(palette.background, 95, "#FFFFFF"),
    "background-mute": blend(palette.background, 80, "#000000"),
    "foreground": palette.foreground,
    "foreground-accent": blend(palette.foreground, 95, "#FFFFFF"),
    "foreground-mute": blend(palette.foreground, 80, "#000000"),
    "primary": palette.primary,
    "primary-accent": blend(palette.primary, 95, "#FFFFFF"),
    "primary-mute": blend(palette.primary, 80, "#000000"),
    "secondary": palette.secondary,
    "secondary-accent": blend(palette.secondary, 95, "#FFFFFF"),
    "secondary-mute": blend(palette.secondary, 80, "#000000")
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"']
    },
    extend: {
      colors: expandTheme(theme)
    },
  },
  plugins: [],
}
