import * as log from "./complicated-logger";

const originalDependencies = {
  log: log,
};

let dependencies = { ...originalDependencies };

export const restDependencies = () => {
  dependencies = { ...originalDependencies };
};

export const injectDependencies = (fakes: Partial<typeof originalDependencies>) => {
  Object.assign(dependencies, fakes);
};

export const verifyPassword = (
  input: string,
  rules: PasswordRule[],
) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => !result.passed);

  if (failed.length === 0) {
    dependencies.log.info("PASSED");

    return true;
  }

  dependencies.log.debug("FAIL");
  return false;
};
