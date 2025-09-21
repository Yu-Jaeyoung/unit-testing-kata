import * as Samples from "./timing-samples";

describe("calculate - with jest", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fake timeout with callback", () => {
    Samples.calculate1(1, 2, (result: number) => {
        expect(result)
          .toBe(3);
      },
    );

    jest.advanceTimersToNextTimer();
  });
});