import { verifyPassword3 } from "./password-verifier-time01";

const SUNDAY = 0, MONDAY = 1, SATURDAY = 6;

describe("verifier3 - dummy function", () => {
  test("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY;
    expect(() => verifyPassword3("anything", [], alwaysSunday))
      .toThrow(
        "It's the weekend!",
      );
  });
});