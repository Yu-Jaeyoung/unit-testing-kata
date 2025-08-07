jest.mock("./complicated-logger");
jest.mock("./configuration-service");

const { stringMatching } = expect;
import { verifyPassword } from "./password-verifier";

import * as complicatedLogger from "./complicated-logger";
import * as configurationService from "./configuration-service";

const mockLoggerModule = jest.mocked(complicatedLogger);
const stubConfigModule = jest.mocked(configurationService);

describe("password verifier", () => {

  afterEach(jest.resetAllMocks);

  test("with info log level and no rules, it calls the logger with PASSED", () => {
    stubConfigModule.getLogLevel.mockReturnValue("info");

    verifyPassword("anything", []);

    expect(mockLoggerModule.info)
      .toHaveBeenCalledWith(stringMatching(/PASS/));
  });

  test("with debug log level and no rules, it calls the logger with DEBUG", () => {
    stubConfigModule.getLogLevel.mockReturnValue("debug");

    verifyPassword("anything", []);

    expect(mockLoggerModule.debug)
      .toHaveBeenCalledWith(stringMatching(/PASS/));
  });
});
