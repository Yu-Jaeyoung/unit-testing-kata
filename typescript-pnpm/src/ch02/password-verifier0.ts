export interface PasswordRuleResult {
  passed: boolean;
  reason: string;
}

export const verifyPassword = (
  input: string,
  rules: Array<PasswordRule>,
): string[] => {
  const errors: string[] = [];

  rules.forEach((rule) => {
    const result = rule(input);

    if (!result.passed) {
      errors.push(`error ${ result.reason }`);
    }
  });

  return errors;
};