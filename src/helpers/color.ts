/**
 * Converts color from hex to rgba format
 * @param {string} hex - Original format
 * @param {string} opacity - Color transparency
 */
export const converHexToRGBA = (hex: string, opacity: string): string => {
  const colorNumber = hex.replace("#", "");
  const r = parseInt(colorNumber.substring(0, 2), 16);
  const g = parseInt(colorNumber.substring(2, 4), 16);
  const b = parseInt(colorNumber.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${Number(opacity) / 100})`;
};
