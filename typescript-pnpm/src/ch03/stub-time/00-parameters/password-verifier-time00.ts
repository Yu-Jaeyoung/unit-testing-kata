const SUNDAY = 0, SATURDAY = 6;

export const verifyPassword2 = (
  input: string,
  rules: PasswordRule[],
  currentDay: number,
) => {
  if ([ SATURDAY, SUNDAY ].includes(currentDay)) {
    throw Error("It's the weekend!");
  }

  // 다른 코드를 작성

  // 발견한 오류를 반환

  return [];
};
