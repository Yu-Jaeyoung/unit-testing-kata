import type * as loggerModule from "./complicated-logger";

export class PasswordVerifier {
  _rules: PasswordRule[];
  _logger: typeof loggerModule;


  constructor(
    rules: PasswordRule[],
    logger: typeof loggerModule,
  ) {
    this._rules = rules;
    this._logger = logger;
  }

  verify(input: string) {
    const failed = this._rules
                       .map(rule => rule(input))
                       .filter(result => !result.passed);

    if (failed.length === 0) {
      this._logger.info("PASSED");

      return true;
    }

    this._logger.info("FAIL");

    return false;
  }
}