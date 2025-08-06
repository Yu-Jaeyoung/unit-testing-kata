import { describe, expect, test } from "bun:test";
import { PasswordVerifier } from "./password-verifier-time01";

const SUNDAY = 0, MONDAY = 1;

describe("refactor with constructor", () => {
  const makeVerifier = (
    rules: PasswordRule[],
    dayFn: DayOfWeekFn,
  ) => {
    return new PasswordVerifier(rules, dayFn);
  };

  test("class constructor: on weekends, throws exception", () => {
    const alwaysSunday = () => SUNDAY;

    const verifier = makeVerifier([], alwaysSunday);

    expect(() => verifier.verify("anything"))
      .toThrow("It's the weekend!");
  });

  test("class constructor: on weekdays, with no rules, passes", () => {
    const alwaysMonday = () => MONDAY;

    const verifier = makeVerifier([], alwaysMonday);

    const result = verifier.verify("anything");

    expect(result.length)
      .toBe(0);
  });
});