import { inject, verifyPassword, SATURDAY } from "./password-verifier-time00-modular";

const injectDate = (newDay: number) => {
  const reset = inject({
    moment: function() {
      // 현재 moment.js 모듈의 API를 위조하고 있음

      return {
        day: () => newDay,
      };
    },
  });

  return reset;
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
