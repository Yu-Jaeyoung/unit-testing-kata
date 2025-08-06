const SUNDAY = 0, MONDAY = 1, SATURDAY = 6;

export const verifyPassword3 = (
  input: string,
  rules: PasswordRule[],
  getDayFn: () => number,
) => {
  const dayOfWeek = getDayFn();
  if ([ SATURDAY, SUNDAY ].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }
  // 이곳에 다른 코드를 작성

  // 발견한 오류를 반환
};
