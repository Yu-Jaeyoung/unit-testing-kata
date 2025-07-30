import { verifyPassword } from "./password-verifier0";


describe("verifyPassword", () => {
  describe("given a failing rule", () => {
    it("returns errors", () => {
      const fakeRule: PasswordRule = input =>
        ({ passed: false, reason: "fake reason" });

      const errors = verifyPassword("any value", [ fakeRule ]);

      expect(errors[0])
        .toContain("fake reason");
    });
  });
});

