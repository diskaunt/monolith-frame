export const throttleFn = <T extends (...args: any[]) => any>(
  fn: T,
  ms: number
) => {
  let lastFunc: any;
  let lastRun: number;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!lastRun) {
      fn(...args);
      lastRun = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRun >= ms) {
            fn.apply(this, args);
            lastRun = Date.now();
          }
        },
        ms - (Date.now() - lastRun)
      );
    }
  };
};
