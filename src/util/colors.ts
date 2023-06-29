export const deltaE = (color: string, base: string = "#000000"): number => {
  const red = Number.parseInt(color.slice(1, 3), 16) - Number.parseInt(base.slice(1, 3), 16);
  const green = Number.parseInt(color.slice(3, 5), 16) - Number.parseInt(base.slice(3, 5), 16);
  const blue = Number.parseInt(color.slice(5, 7), 16) - Number.parseInt(base.slice(5, 7), 16);
  return Math.sqrt(Math.pow(red, 2) + Math.pow(green, 2) + Math.pow(blue, 2));
};

export const complement = (color: string = "#000000"): string => {
  const red = Math.ceil(Math.abs(255 - Number.parseInt(color.slice(1, 3), 16))).toString(16).padStart(2, "0").toUpperCase();
  const green = Math.ceil(Math.abs(255 - Number.parseInt(color.slice(3, 5), 16))).toString(16).padStart(2, "0").toUpperCase();
  const blue = Math.ceil(Math.abs(255 - Number.parseInt(color.slice(5, 7), 16))).toString(16).padStart(2, "0").toUpperCase();
  return `#${red}${green}${blue}`;
};

export const blend = (color: string = "#000000", opacity: number = 100, base: string = "#000000"): string => {
  const red = Math.ceil(Number.parseInt(color.slice(1, 3), 16) * (opacity / 100) + ((100 - opacity) / 100) * Number.parseInt(base.slice(1, 3), 16)).toString(16).padStart(2, "0").toUpperCase();
  const green = Math.ceil(Number.parseInt(color.slice(3, 5), 16) * (opacity / 100) + ((100 - opacity) / 100) * Number.parseInt(base.slice(3, 5), 16)).toString(16).padStart(2, "0").toUpperCase();
  const blue = Math.ceil(Number.parseInt(color.slice(5, 7), 16) * (opacity / 100) + ((100 - opacity) / 100) * Number.parseInt(base.slice(5, 7), 16)).toString(16).padStart(2, "0").toUpperCase();
  return `#${red}${green}${blue}`;
};

export const approximate = (color: string = "#000000", target: string = "#000000", base: string = "#000000"): string => {
  let distance = Number.MAX_VALUE;
  let approximation = 100;
  for (let opacity = approximation; opacity >= 0; opacity -= 1) {
    const delta = deltaE(blend(color, opacity, base), target);
    if (delta < distance) {
      distance = delta;
      approximation = opacity;
    }
  }
  return `${color}${percentToHex(approximation)}`;
};

export const percentToHex = (percent: number): string => {
  return Math.ceil(255 * percent / 100).toString(16).padStart(2, "0").toUpperCase();
};

export const hexToPercent = (hex: string): number => {
  return Math.ceil(100 * Number.parseInt(hex.slice(0, 2), 16) / 255);
};