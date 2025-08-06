import { describe, expect, test } from "bun:test";
import { PasswordVerifier2 } from "./password-verifier01";
import { RealLogger } from "./real-logger";

describe("password verifier with interfaces", () => {
  test("verify, with logger, calls logger", () => {
    const testableLog: RealLogger = new RealLogger();
    let logged = "";
    testableLog.info = (text) => logged = text;

    const verifier = new PasswordVerifier2([], testableLog);
    verifier.verify("any input");

    expect(logged)
      .toMatch(/PASSED/);
  });
});

class TestableLogger extends RealLogger {
  logged = "";

  info(text: string) {
    this.logged = text;
  }

  // error() 함수와 debug() 함수는 덮어쓰이지 않았다.
}

describe("partial mock with inheritance", () => {
  test("verify with logger, calls logger", () => {
    const mockLog: TestableLogger = new TestableLogger();

    const verifier = new PasswordVerifier2([], mockLog);
    verifier.verify("any input");

    expect(mockLog.logged)
      .toMatch(/PASSED/);
  });
});