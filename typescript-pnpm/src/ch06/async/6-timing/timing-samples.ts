export const calculate1 = (
  x: number,
  y: number,
  resultCallback: Function,
) => {
  setTimeout(() => {resultCallback(x + y);}, 5000);
};

export const calculate2 = (
  getInputsFn: Function,
  resultFn: Function,
) => {
  setInterval(() => {
    const { x, y } = getInputsFn();
    resultFn(x + y);
  }, 1000);
};