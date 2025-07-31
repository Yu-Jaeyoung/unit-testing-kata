import moment from "moment";

const originalDependencies = {
  moment: moment,
};

let dependencies = { ...originalDependencies };

export const inject = (fakes: any) => {
  Object.assign(dependencies, fakes);

  return function reset () {
    dependencies = { ...originalDependencies };
  };
};

export const SUNDAY = 0;
export const SATURDAY = 6;

export const verifyPassword = (
  input: string,
  rules: PasswordRule[],
) => {
  const dayOfWeek = dependencies.moment()
                                .day();

  if ([ SATURDAY, SUNDAY ].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }
    // 이곳에 다른 코드를 작성

  // 발견한 오류를 반환
  else
    return [];
};
