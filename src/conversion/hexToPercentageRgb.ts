/**
 * @param  {String} color A 6 character hex color.
 * @return {Object} An object with the following properties:
 * - r: The red value in percentage of the color.
 * - g: The green value in percentage of the color.
 * - b: The blue value in percentage of the color.
 */
const hexToPercentageRgb = (color: string) => {
  const r = (parseInt(color.slice(1, 3), 16) / 255) * 100;
  const g = (parseInt(color.slice(3, 5), 16) / 255) * 100;
  const b = (parseInt(color.slice(5, 7), 16) / 255) * 100;

  return {
    r,
    g,
    b,
  };
};
export default hexToPercentageRgb;
