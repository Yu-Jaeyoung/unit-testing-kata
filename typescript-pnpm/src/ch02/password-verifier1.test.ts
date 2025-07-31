import { PasswordVerifier1 } from "./password-verifier1";

const makeVerifier = () => new PasswordVerifier1();
const passingRule = () => ({ passed: true, reason: "" });

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerifier();
  verifier.addRule(passingRule);

  return verifier;
};

const makeVerifierWithFailedRule = (reason: string) => {
  const verifier = makeVerifier();
  const fakeRule = () => ({ passed: false, reason });
  verifier.addRule(fakeRule);

  return verifier;
};

describe("PasswordVerifier", () => {
  describe("with a failing rule", () => {
    it("has an error message based on the rule.reason", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      const errors = verifier.verify("any input");

      expect(errors[0])
        .toContain("fake reason");
    });

    it("has exactly one error", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      const errors = verifier.verify("any input");

      expect(errors.length)
        .toBe(1);
    });
  });

  describe("with a passing rule", () => {
    it("has no errors ", () => {
      const verifier = makeVerifierWithPassingRule();
      const errors = verifier.verify("any input");

      expect(errors.length)
        .toBe(0);
    });
  });

  describe("with a failing and a passing rule", () => {
    it("has one error", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      verifier.addRule(passingRule);
      const errors = verifier.verify("any input");

      expect(errors.length)
        .toBe(1);
    });

    it("error text belongs to failed rule", () => {
      const verifier = makeVerifierWithFailedRule("fake reason");
      verifier.addRule(passingRule);
      const errors = verifier.verify("any input");

      expect(errors[0])
        .toContain("fake reason");
    });
  });
});