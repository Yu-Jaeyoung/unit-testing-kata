import _ from "lodash";
import type * as loggerModule from "./complicated-logger";

export const verifyPassword3 = _.curry((
  rules: PasswordRule[],
  logger: typeof loggerModule,
  input: string,
) => {
  const failed = rules
    .map(rule => rule(input))
    .filter((result) => !result.passed);

  if (failed.length === 0) {
    logger.info("PASSED");

    return true;
  }

  logger.info("FAIL");

  return false;
});