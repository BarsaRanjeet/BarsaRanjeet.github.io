const KEY_PREFIX = "RANJEET:BARSA";

export const getLocalStorage = (key) => {
  if (!key) return;
  return localStorage.getItem(`${KEY_PREFIX}:${key}`) || "";
};

export const setLocalStorage = (key, value) => {
  if (!key || !value) return;
  localStorage.setItem(`${KEY_PREFIX}:${key}`, value);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(`${KEY_PREFIX}:${key}`);
};
