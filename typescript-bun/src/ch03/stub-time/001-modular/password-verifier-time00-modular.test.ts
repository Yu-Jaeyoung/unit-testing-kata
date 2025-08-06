import { describe, expect, it } from "bun:test";
import { inject, SATURDAY, verifyPassword } from "./password-verifier-time00-modular";

const injectDate = (newDay: number) => {
  return inject({
    moment: () => {
      // 현재 moment.js 모듈의 API를 위조하고 있음

      return {
        day: () => newDay,
      };
    },
  });
};

describe("verifyPassword", () => {
  describe("when its the weekend", () => {
    it("throws an error", () => {
      const reset = injectDate(SATURDAY);

      expect(() => verifyPassword("any input", []))
        .toThrow(
          /It's the weekend!/,
        );

      reset();
    });
  });
});
