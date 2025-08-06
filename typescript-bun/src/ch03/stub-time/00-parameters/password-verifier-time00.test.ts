import { describe, expect, test } from "bun:test";
import { verifyPassword2 } from "./password-verifier-time00";

const SUNDAY = 0, MONDAY = 1, SATURDAY = 6;

describe("verifier2 - dummy object", () => {
  test("on weekends, throws exceptions", () => {
    expect(() => verifyPassword2("anything", [], SUNDAY))
      .toThrow("It's the weekend");
  });
});