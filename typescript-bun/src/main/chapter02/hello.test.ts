import { expect, test } from "bun:test";

test("hello", (): void => {
  expect("hello").toEqual("hello");
});
