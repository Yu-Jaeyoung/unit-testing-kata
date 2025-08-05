import { injectDependencies, restDependencies, verifyPassword } from "./password-verifier-injectable01";

describe("password verifier", () => {

  afterEach(restDependencies);

  describe("given logger and passing scenario", () => {
    it("calls the logger with PASS", () => {
      let logged = "";

      const mockLog = {
        info: (text: string) => {
          logged = text;
        },
        debug: (text: string) => {
          logged = text;
        },
      };

      injectDependencies({ log: mockLog });

      verifyPassword("anything", []);

      expect(logged)
        .toMatch(/PASSED/);
    });
  });
});
