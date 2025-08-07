import { makeVerifier } from "./00-password-verifier";


test("given logger and passing scenario", () => {
  const mockLog = { info: jest.fn(), debug: jest.fn() };
  const verify = makeVerifier([], mockLog);

  verify("any input");

  expect(mockLog.info)
    .toHaveBeenCalledWith(expect.stringMatching(/PASS/));
});