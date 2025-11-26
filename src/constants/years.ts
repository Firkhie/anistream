export const currentYear = new Date().getFullYear();
export const YEARS = Array.from({ length: currentYear - 1939 }, (_, i) => {
  const year = String(currentYear - i);
  return { value: year, label: year };
});
