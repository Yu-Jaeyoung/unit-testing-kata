import * as log from "./complicated-logger";

const verifyPassword = (
  input: string,
  rules: PasswordRule[],
) => {
  const failed =
    rules
      .map(rule => rule(input))
      .filter(result => !result.passed);

  if (failed.length === 0) {
    // 기존 의존성 주입 방식으로는 테스트할 수 없음
    log.info("PASSED");
    return true;
  }

  // 기존 의존성 주입 방식으로는 테스트할 수 없음
  log.info("FAIL");

  return false;
};