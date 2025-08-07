import { Substitute } from "@fluffy-spoon/substitute";
import { PasswordVerifier3 } from "./00-password-verifier";
import { IComplicatedLogger } from "./interface/complicated-logger";
import { MaintenanceWindow } from "./interface/maintenance-window";

const makeVerifierWithNoRules = (
  log: IComplicatedLogger,
  maint: MaintenanceWindow,
) =>
  new PasswordVerifier3([], log, maint);

describe("working with substitute part 2", () => {
  test("verify, during maintenance, calls logger", () => {
    const stubMaintWindow = Substitute.for<MaintenanceWindow>();
    stubMaintWindow.isUnderMaintenance()
                   .returns(true);
    const mockLog = Substitute.for<IComplicatedLogger>();
    const verifier = makeVerifierWithNoRules(mockLog, stubMaintWindow);

    verifier.verify("anything");

    mockLog.received()
           .info("Under Maintenance", "verify");
  });

  test("verify, outside maintenance, calls logger", () => {
    const stubMaintWindow = Substitute.for<MaintenanceWindow>();
    stubMaintWindow.isUnderMaintenance()
                   .returns(false);
    const mockLog = Substitute.for<IComplicatedLogger>();
    const verifier = makeVerifierWithNoRules(mockLog, stubMaintWindow);

    verifier.verify("anything");

    mockLog.received()
           .info("PASSED", "verify");
  });
});