export type Enum<T extends object> = T[keyof T];

export const ScreenSize = Object.freeze({
  xs: 360,
  sm: 576,
  md: 768,
  lg: 960,
  xl: 1170,
});

export const wait = (t: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t);
  });
};
