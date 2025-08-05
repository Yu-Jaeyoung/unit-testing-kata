type PasswordRuleResult = {
  passed: boolean;
  reason: string;
}

type PasswordRule = (input: string) => PasswordRuleResult;

type DayOfWeekFn = () => number;