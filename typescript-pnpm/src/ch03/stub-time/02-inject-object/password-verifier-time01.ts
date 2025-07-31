const SUNDAY = 0, SATURDAY = 6;

export class PasswordVerifier {
  private readonly rules: PasswordRule[];
  private readonly dayOfWeek: () => number;

  constructor (
    rules: PasswordRule[],
    dayOfWeekFn: () => number,
  ) {
    this.rules = rules;
    this.dayOfWeek = dayOfWeekFn;
  }

  verify (input: string) {
    if ([ SATURDAY, SUNDAY ].includes(this.dayOfWeek())) {
      throw new Error("It's the weekend!");
    }

    const errors: string[] = [];

    // 실제로 더 많은 에러가 존재

    return errors;
  }
}