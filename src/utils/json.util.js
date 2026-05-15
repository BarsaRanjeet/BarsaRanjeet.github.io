export const validateJsonParse = (jsonValue) => {
  try {
    const value = JSON.parse(jsonValue);
    return { value, isValid: true };
  } catch (err) {
    return { isValid: false, error: err?.message };
  }
};
