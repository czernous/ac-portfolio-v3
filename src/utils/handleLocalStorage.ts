export const writeToLocalStorage = (prop: string, value: string) => {
  window.localStorage.setItem(prop, value);
};

export const readFromLocalStorage = (prop: string): string | null => {
  return window.localStorage.getItem(prop);
};
