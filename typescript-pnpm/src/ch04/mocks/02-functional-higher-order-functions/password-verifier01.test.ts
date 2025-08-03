import { makeVerifier } from "./password-verifier01";

describe("higher order factory functions", () => {
  describe("password verifier", () => {
    test("given logger and passing scenario", () => {
      let logged = "";

      const mockLog = {
        info: (text: string) => logged = text,
        debug: (text: string) => logged = text,
      };

      const passVerify = makeVerifier([], mockLog);

      passVerify("any input");

      expect(logged)
        .toMatch(/PASSED/);
    });
  });
});