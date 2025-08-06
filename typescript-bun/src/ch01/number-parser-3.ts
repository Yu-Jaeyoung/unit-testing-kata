let total3: number = 0;

const totalSoFar3 = ()=>{
  return total3;
};

let makeLogger = ()=>{
  return {
    info : (
      output: string,
      param: { firstNumWas: string; secondNumWas: string },
    )=>{
      ``;
    },
  };
};

const logger3 = makeLogger();

const sum3 = (numbers: string)=>{
  const [ a, b ] = numbers.split(",");
  numbers.split(",");

  logger3.info(`this is a very important log output`, {
    firstNumWas : a,
    secondNumWas : b,
  });

  const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);

  total3 += result;

  return result;
};