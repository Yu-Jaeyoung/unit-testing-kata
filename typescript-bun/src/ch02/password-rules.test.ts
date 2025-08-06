import { describe, expect, test } from "bun:test";
import { oneUpperCaseRule } from "@/ch02/password-rules";

describe("one uppercase rule", () => {
  test("given no uppercase, it fails", () => {
    const result = oneUpperCaseRule("abc");
    expect(result.passed)
      .toEqual(false);
  });

  test.each([ [ "Abc", true ], [ "aBc", true ], [ "abc", false ] ])
      ("given %s, %s", (
        input: string,
        expected: boolean,
      ) => {
        const result = oneUpperCaseRule(input);
        expect(result.passed)
          .toEqual(expected);
      });
});

describe("one uppercase rule, with vanilla JS for,", () => {
  const tests = {
    Abc: true,
    aBc: true,
    abc: false,
  };

  for (const [ input, expected ] of Object.entries(tests)) {
    test(`given ${input} and ${expected}`, () => {
      const result = oneUpperCaseRule(input);
      expect(result.passed)
        .toEqual(expected);
    });
  }
});