import { debug, info } from "./complicated-logger";
import { getLogLevel } from "./configuration-service";

const log = (text: string) => {
  if (getLogLevel() === "info") {
    info(text);
  }

  if (getLogLevel() === "debug") {
    debug(text);
  }
};

const verifyPassword = (
  input: string,
  rules: PasswordRule[],
) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    log("PASSED");

    return true;
  }

  log("FAIL");
  return false;
};
