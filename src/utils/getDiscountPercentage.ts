export const getDiscountPercentage = (regular: number, current: number): number => {
  if (!regular || regular <= current) return 0;
  return Math.round(((regular - current) / regular) * 100);
};
