import { Substitute, Arg } from "@fluffy-spoon/substitute";
import { IComplicatedLogger } from "./interface/complicated-logger";
import { PasswordVerifier } from "./00-password-verifier";

describe("working with long interface", () => {
  describe("password verifier", () => {
    test("verify, w logger & passing, calls logger w PASS", () => {
      const mockLog = Substitute.for<IComplicatedLogger>();

      const verifier = new PasswordVerifier([], mockLog);

      verifier.verify("anything");

      mockLog.received()
             .info(
               Arg.is((x) => x.includes("PASSED")),
               "verify",
             );
    });
  });
});