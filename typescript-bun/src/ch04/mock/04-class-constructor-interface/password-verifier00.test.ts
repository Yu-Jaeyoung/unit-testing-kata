import { describe, expect, test } from "bun:test";
import type { ILogger } from "./interfaces/logger";
import { PasswordVerifier } from "./password-verifier00";

class FakeLogger implements ILogger {
  written: string = "";

  info(text: string): void {
    this.written = text;
  }
}

describe("password verifier with interfaces", () => {
  test("verify, with logger, calls logger", () => {
    const mockLog = new FakeLogger();

    const verifier = new PasswordVerifier([], mockLog);

    verifier.verify("anything");

    expect(mockLog.written)
      .toMatch(/PASS/);
  });
});