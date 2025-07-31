import { PasswordRuleResult } from "./password-verifier0";

export const oneUpperCaseRule = (input: string): PasswordRuleResult => {
  return {
    passed: (input.toLowerCase() !== input),
    reason: "at least one upper case needed",
  };
};