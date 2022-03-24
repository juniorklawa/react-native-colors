import hueToRgb from './hueToRgb';
import toHex from './singleHex';

const hslToHex = (h: number, s: number, l: number) => {
  h /= 360;
  s /= 100;
  l /= 100;

  h = Math.min(h, 1);
  s = Math.min(s, 1);
  l = Math.min(l, 1);

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export default hslToHex;
