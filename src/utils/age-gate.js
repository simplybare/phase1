import Cookies from 'js-cookie';

const REQUIRED_AGE_BY_PROVINCE = {
  AB: 18,
  BC: 19,
  MB: 19,
  NB: 19,
  NL: 19,
  NT: 19,
  NS: 19,
  NU: 19,
  ON: 19,
  PE: 19,
  QC: 21,
  SK: 19,
  YT: 19,
};

const COOKIE_NAME = 'sb_province';

export const PROVINCES_AVAILABLE = ['SK', 'BC']; // ['AB', 'BC', 'SK', 'ON'];

export const validateMonth = month => {
  if (!month) {
    return 'Month is required';
  }

  if (Number.isNaN(Number(month))) {
    return 'Month is not valid';
  }

  if (month < 1 || month > 12) {
    return 'Month is not valid';
  }

  return undefined;
};

export const validateDay = day => {
  if (!day) {
    return 'Day is required';
  }

  if (Number.isNaN(Number(day))) {
    return 'Day is not valid';
  }

  if (day < 1 || day > 31) {
    return 'Day is not valid';
  }

  return undefined;
};

export const validateYear = year => {
  if (!year) {
    return 'Year is required';
  }

  if (Number.isNaN(Number(year))) {
    return 'Year is not valid';
  }

  if (year < 1900 || year >= new Date().getFullYear()) {
    return 'Year is not valid';
  }

  return undefined;
};

export const validateProvince = province =>
  !(province || '').length ? 'Province is required' : undefined;

export const getRequiredAgeByProvince = province => REQUIRED_AGE_BY_PROVINCE[province];

export const getProvinceSelection = () => Cookies.get(COOKIE_NAME);

export const setProvinceSelection = province => {
  Cookies.set(COOKIE_NAME, province, { expires: 1 });
};

export const clearProvinceSelection = () => Cookies.remove(COOKIE_NAME);
