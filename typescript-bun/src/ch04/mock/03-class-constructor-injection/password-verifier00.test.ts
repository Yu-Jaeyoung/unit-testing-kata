import { describe, expect, test } from "bun:test";
import { PasswordVerifier } from "./password-verifier00";

describe("duck typing with function constructor injection", () => {
  describe("password verifier", () => {
    test("logger & passing scenario, calls logger with PASSED", () => {
      let logged = "";

      const mockLog = {
        info: (text: string) => logged = text,
        debug: (text: string) => logged = text,
      };

      const verifier = new PasswordVerifier([], mockLog);

      verifier.verify("any input");

      expect(logged)
        .toMatch(/PASSED/);
    });
  });
});