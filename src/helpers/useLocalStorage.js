export const localGetStorage = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;
