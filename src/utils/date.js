export const isAgeMoreThanN = (year, month, day, n) =>
  new Date(Number(year) + n, Number(month) - 1, Number(day)) <= new Date();
