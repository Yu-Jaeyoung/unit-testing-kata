import { PasswordVerifier } from "./password-verifier-time01";
import { FakeTimeProvider } from "./time-provider";

const SUNDAY = 0;

describe("verifier", () => {
  test("class constructor: on weekends, throws exception", () => {
    const verifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY).getDay);

    expect(() => verifier.verify("anything"))
      .toThrow("It's the weekend!");
  });
});
