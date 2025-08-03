import { IComplicatedLogger } from "./interfaces/complicated-logger";
import { PasswordVerifier2 } from "./password-verifier01";

describe("working with long interfaces", () => {
  class FakeComplicatedLogger implements IComplicatedLogger {
    infoWritten = "";
    debugWritten = "";
    errorWritten = "";
    warnWritten = "";

    debug(
      text: string,
      obj: any,
    ) {
      this.debugWritten = text;
    }

    error(
      text: string,
      location: string,
      stacktrace: string,
    ): void {
      this.errorWritten = text;
    }

    info(text: string): void {
      this.infoWritten = text;
    }

    warn(text: string): void {
      this.warnWritten = text;
    }
  }

  test("verify passing, with logger, calls logger with PASS", () => {
    const mockLog = new FakeComplicatedLogger();

    const verifier = new PasswordVerifier2([], mockLog);
    verifier.verify("anything");

    expect(mockLog.infoWritten)
      .toMatch(/PASSED/);
  });

  test("A more JS oriented variation on this test", () => {
    const mockLog = {} as IComplicatedLogger;

    let logged = "";
    mockLog.info = (text: string) => logged = text;

    const verifier = new PasswordVerifier2([], mockLog);
    verifier.verify("anything");

    expect(logged)
      .toMatch(/PASSED/);
  });
});