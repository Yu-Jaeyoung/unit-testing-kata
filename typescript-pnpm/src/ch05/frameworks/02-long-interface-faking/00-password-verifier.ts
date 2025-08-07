import { IComplicatedLogger } from "./interface/complicated-logger";

export class PasswordVerifier {
  private _rules: PasswordRule[];
  private _logger: IComplicatedLogger;

  constructor(
    rules: PasswordRule[],
    logger: IComplicatedLogger,
  ) {
    this._rules = rules;
    this._logger = logger;
  }

  verify(input: string): boolean {
    const failed = this._rules
                       .map(rule => rule(input))
                       .filter(result => !result.passed);

    if (failed.length === 0) {
      this._logger.info("PASSED", "verify");

      return true;
    }

    this._logger.info("FAIL", "verify");

    return false;
  }
}