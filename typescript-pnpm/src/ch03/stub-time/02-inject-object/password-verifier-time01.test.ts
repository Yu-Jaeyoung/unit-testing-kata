import { PasswordVerifier } from "./password-verifier-time01";

const SUNDAY = 0;

describe("verifier", () => {
  test("class constructor: on weekends, throws exception", () => {
    const alwaysSunday = () => SUNDAY;

    const verifier = new PasswordVerifier([], alwaysSunday);

    expect(() => verifier.verify("anything"))
      .toThrow("It's the weekend!");
  });
});