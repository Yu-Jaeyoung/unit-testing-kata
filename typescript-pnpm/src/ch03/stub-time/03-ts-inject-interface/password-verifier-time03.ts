import { TimeProviderInterface } from "./time-provider-interface";
import { PasswordRuleResult } from "../../../ch02/password-verifier0";

const SUNDAY = 0, MONDAY = 1;

export class PasswordVerifier {
  private _timeProvider: TimeProviderInterface;

  constructor(
    rules: PasswordRuleResult[],
    timeProvider: TimeProviderInterface,
  ) {
    this._timeProvider = timeProvider;
  }

  verify(input: string): string[] {
    const isWeekend = [ SUNDAY, MONDAY ].filter(x => x === this._timeProvider.getDay()).length > 0;

    if (isWeekend) {
      throw new Error("It's the weekend!");
    }

    // 더 많은 로직이 있음

    return [];
  }
}