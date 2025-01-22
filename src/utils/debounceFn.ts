export const debouceFn = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) => {
  let timer: any;
  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
