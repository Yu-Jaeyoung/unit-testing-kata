const sum1 = (numbers: string): number => {
  const [ a, b ]: string[] = numbers.split(",");

  return parseInt(a) + parseInt(b);
};