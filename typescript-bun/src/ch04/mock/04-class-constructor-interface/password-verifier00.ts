import { ILogger } from "./interfaces/logger";

export class PasswordVerifier {
  private _rules: PasswordRule[];
  private _logger: ILogger;

  constructor(
    rules: PasswordRule[],
    logger: ILogger,
  ) {
    this._rules = rules;
    this._logger = logger;
  }

  verify(input: string): boolean {
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