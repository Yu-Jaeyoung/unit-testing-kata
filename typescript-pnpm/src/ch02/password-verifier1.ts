export class PasswordVerifier1 {
  private rules: Array<PasswordRule>;

  constructor () {
    this.rules = [];
  }

  addRule (rule: PasswordRule) {
    this.rules.push(rule);
  }

  verify (input: string) {
    const errors: string[] = [];

    this.rules.forEach(rule => {
      const result = rule(input);

      if (!result.passed) {
        errors.push(result.reason);
      }
    });

    return errors;
  }

}