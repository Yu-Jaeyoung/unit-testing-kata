import type * as loggerModule from "./complicated-logger";

export const verifyPassword2 = (
  input: string,
  rules: PasswordRule[],
  logger: typeof loggerModule,
) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => !result.passed);

  if (failed.length === 0) {
    logger.info("PASSED");

    return true;
  }

  logger.info("FAIL");

  return false;
};
