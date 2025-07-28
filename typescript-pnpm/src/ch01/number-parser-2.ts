let total2: number = 0;

const totalSoFar2 = ()=>{
  return total2;
};

const sum2 = (numbers: string): number => {
  const [ a, b ]: string[] = numbers.split(",");

  const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);

  total2 += result;

  return result;
};
