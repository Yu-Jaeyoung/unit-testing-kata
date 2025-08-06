import { sum } from "./sum";

describe('sum function', () => {
  it('should correctly add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
