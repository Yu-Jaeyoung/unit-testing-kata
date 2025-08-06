import { RealTimeProvider } from "./time-provider";

const SUNDAY = 0, SATURDAY = 6;

class PasswordVerifier {
  private readonly rules: PasswordRule[];
  private readonly timeProvider: RealTimeProvider;

  constructor (
    rules: PasswordRule[],
    timeProvider: RealTimeProvider,
  ) {
    this.rules = rules;
    this.timeProvider = timeProvider;
  }

  verify (input: string) {
    if ([ SATURDAY, SUNDAY ].includes(this.timeProvider.getDay())) {
      throw new Error("It's the weekend!");
    }

    const errors: string[] = [];

    // 실제로 더 많은 에러가 존재

    return errors;
  }
}