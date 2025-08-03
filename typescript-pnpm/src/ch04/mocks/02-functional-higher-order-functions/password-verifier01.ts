import * as loggerModule from "./complicated-logger";

export const makeVerifier = (
  rules: PasswordRule[],
  logger: typeof loggerModule,
) => {
  return (input: string) => {
    const failed = rules
      .map(rule => rule(input))
      .filter((result) => result === false);

    if (failed.length === 0) {
      logger.info("PASSED");

      return true;
    }

    logger.info("FAIL");

    return false;
  };
};