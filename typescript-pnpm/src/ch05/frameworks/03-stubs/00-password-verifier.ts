import { IComplicatedLogger } from "./interface/complicated-logger";
import { MaintenanceWindow } from "./interface/maintenance-window";

export class PasswordVerifier3 {
  private _rules: PasswordRule[];
  private _logger: IComplicatedLogger;
  private _maintenanceWindow: MaintenanceWindow;

  constructor(
    rules: PasswordRule[],
    logger: IComplicatedLogger,
    maintenanceWindow: MaintenanceWindow,
  ) {
    this._rules = rules;
    this._logger = logger;
    this._maintenanceWindow = maintenanceWindow;
  }

  verify(input: string): boolean {
    if (this._maintenanceWindow.isUnderMaintenance()) {
      this._logger.info("Under Maintenance", "verify");

      return false;
    }

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