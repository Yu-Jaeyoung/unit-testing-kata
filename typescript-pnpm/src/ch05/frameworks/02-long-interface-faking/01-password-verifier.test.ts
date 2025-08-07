import { IComplicatedLogger } from "./interface/complicated-logger";
import { PasswordVerifier } from "./00-password-verifier";

describe("working with long interfaces", () => {
  describe("password verifier", () => {
    test("verify, w logger & passing, calls logger with PASS", () => {
      const mockLog: IComplicatedLogger = {
        info: jest.fn(),
        warn: jest.fn(),
        debug: jest.fn(),
        error: jest.fn(),
      };

      const verifier = new PasswordVerifier([], mockLog);

      verifier.verify("anything");

      expect(mockLog.info)
        .toHaveBeenCalledWith(
          expect.stringMatching(/PASS/),
          expect.stringMatching(/verify/),
        );
    });
  });
});